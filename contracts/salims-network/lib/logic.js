'use strict';
/**
 * Write your transction processor functions here
 */
var NS = 'org.salim';

/**
 * Sample transaction
 * @param {org.salim.SampleTransaction} sampleTransaction
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.salim.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.salim', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}

/**
 * createProjectPledge
 * @param {org.salim.CreateProjectPledge} createProjectPledge
 * @transaction
 */
function createProjectPledge(txParams) {
    if(!txParams.name || (txParams.name && txParams.name === '')) {
        throw new Error('Invalid Pledge Name!!');
    }
    if(!txParams.aidOrg) {
        throw new Error('Invalid Aid Org!!');
    }
    var factory = getFactory();
    var pledge = null;
    return getAssetRegistry(NS + '.ProjectPledge').then(function (registry) {
        pledge = factory.newResource(NS, 'ProjectPledge', txParams.pledgeId);
        pledge.name = txParams.name;
        pledge.decription = txParams.decription;
        pledge.fundsRequired = txParams.fundsRequired;
        pledge.status = 'INITIALSTATE';
        pledge.funds = [];
        pledge.aidOrg = txParams.aidOrg;
        return registry.add(pledge);
    }).then(function () {
        return getParticipantRegistry(NS + '.AidOrg');
    }).then(function (aidOrgRegistry) {
        txParams.aidOrg.projectPledge.push(pledge);
        return aidOrgRegistry.update(txParams.aidOrg);
    }).then(function () {
        var newPledgeNotification = getFactory().newEvent(NS, 'NewPledgeNotification');
        newPledgeNotification.pledgeId = txParams.pledgeId;
        newPledgeNotification.name = txParams.name;
		newPledgeNotification.status = 'INITIALSTATE';
        newPledgeNotification.approvedFunding = 0;
		newPledgeNotification.totalFundsReceived = 0;
        newPledgeNotification.nextFundingDueInDays = 0;
        emit(newPledgeNotification);
    });
}
/**
 * SendPledgeToGlobalCitizen
 * @param {org.salim.SendPledgeToGlobalCitizen} sendPledgeToGlobalCitizen
 * @transaction
 */
function sendPledgeToGlobalCitizen(txParams) {
    if(!txParams.citizenId || !txParams.pledgeId) {
        throw new Error('Invalid input parameters!!');
    }
    txParams.pledgeId.status = 'GLOBALCITIZENREVIEW';
    txParams.citizenId.projectPledge.push(txParams.pledgeId);
    var factory = getFactory();
    return getAssetRegistry(NS + '.ProjectPledge').then(function (registry) {
        return registry.update(txParams.pledgeId);
    }).then(function () {
        return getParticipantRegistry(NS + '.GlobalCitizen');
    }).then(function (registry) {
        return registry.update(txParams.citizenId);
    }).then(function () {
        var pledgeSentToGcNotification = getFactory().newEvent(NS, 'PledgeSentToGcNotification');
        pledgeSentToGcNotification.pledgeId = txParams.pledgeId.pledgeId;
        pledgeSentToGcNotification.name = txParams.pledgeId.name;
		pledgeSentToGcNotification.status = 'GLOBALCITIZENREVIEW';
        pledgeSentToGcNotification.approvedFunding = 0;
		pledgeSentToGcNotification.totalFundsReceived = 0;
        pledgeSentToGcNotification.nextFundingDueInDays = 0;
        emit(pledgeSentToGcNotification);
    });
}
/**
 * SendPledgeToGovOrg
 * @param {org.salim.SendPledgeToGovOrg} sendPledgeToGovOrg
 * @transaction
 */
function sendPledgeToGovOrg(txParams) {
    if(!txParams.pledgeId || !txParams.govOrg || (txParams.govOrg && txParams.govOrg.length === 0)) {
        throw new Error('Invalid input parameters!!');
    }
    var factory = getFactory();
    txParams.pledgeId.status = 'GOVORGREVIEW';
    return getAssetRegistry(NS + '.ProjectPledge').then(function (registry) {
        return registry.update(txParams.pledgeId);
    }).then(function () {
        return getParticipantRegistry(NS + '.GovOrg');
    }).then(function (registry) {
        for(var i = 0; i < txParams.govOrg.length; i++) {
            txParams.govOrg[i].projectPledge.push(txParams.pledgeId);
        }
        return registry.updateAll(txParams.govOrg);
    }).then(function () {
        var pledgeSentToGoVNotification = getFactory().newEvent(NS, 'PledgeSentToGoVNotification');
        pledgeSentToGoVNotification.pledgeId = txParams.pledgeId.pledgeId;
        pledgeSentToGoVNotification.name = txParams.pledgeId.name;
		pledgeSentToGoVNotification.status = 'GOVORGREVIEW';
        pledgeSentToGoVNotification.approvedFunding = 0;
		pledgeSentToGoVNotification.totalFundsReceived = 0;
        pledgeSentToGoVNotification.nextFundingDueInDays = 0;
        emit(pledgeSentToGoVNotification);
    });
}
/**
 * UpdatePledge
 * @param {org.salim.UpdatePledge} updatePledge
 * @transaction
 */
function updatePledge(txParams) {
    if(!txParams.govOrgId) {
        throw new Error('Invalid user type!!');
    }
    var factory = getFactory();
    var funding = factory.newConcept(NS, 'Funding');
    var daysToAdd = 0;
    switch(txParams.fundingType) {
    case 'WEEKLY':
        daysToAdd = 7;
        break;
    case 'MONTHLY':
        daysToAdd = 30;
        break;
    case 'SEMIANNUALY':
        daysToAdd = 180;
        break;
    case 'ANNUALY':
        daysToAdd = 365;
        break;
    }
    funding.fundingType = txParams.fundingType;
    funding.nextFundingDueInDays = daysToAdd;
    funding.approvedFunding = txParams.approvedFunding;
    funding.totalFundsReceived = 0;
    funding.fundsPerInstallment = txParams.fundsPerInstallment;
    funding.govOrgId = txParams.govOrgId;
    txParams.pledgeId.status = 'PROPOSALFUNDED';
    txParams.pledgeId.funds.push(funding);
    txParams.govOrgId.fundedPledges.push(txParams.pledgeId);
    return getAssetRegistry(NS + '.ProjectPledge').then(function (registry) {
        return registry.update(txParams.pledgeId);
    }).then(function () {
        return getParticipantRegistry(NS + '.GovOrg');
    }).then(function (registry) {
        return registry.update(txParams.govOrgId);
    }).then(function () {
        var pledgeApprovedbyGOVNotification = getFactory().newEvent(NS, 'PledgeApprovedbyGOVNotification');
        pledgeApprovedbyGOVNotification.pledgeId = txParams.pledgeId.pledgeId;
        pledgeApprovedbyGOVNotification.name = txParams.pledgeId.name;
		pledgeApprovedbyGOVNotification.status = 'PROPOSALFUNDED'
        pledgeApprovedbyGOVNotification.approvedFunding = txParams.approvedFunding;
        pledgeApprovedbyGOVNotification.totalFundsReceived = 0;
		pledgeApprovedbyGOVNotification.nextFundingDueInDays = daysToAdd;
        emit(pledgeApprovedbyGOVNotification);
    });
}
/**
 * TransferFunds
 * @param {org.salim.TransferFunds} transferFunds
 * @transaction
 */
function transferFunds(txParams) {
    if(!txParams.pledgeId || !txParams.govOrgId) {
        throw new Error('Invalid input parameters!!');
    }
    var factory = getFactory();
    var valid = false;
    for(var j = 0; j < txParams.govOrgId.fundedPledges.length; j++) {
        if(txParams.govOrgId.fundedPledges[j].pledgeId === txParams.pledgeId.pledgeId) {
            valid = true;
            break;
        }
    }
    if(!valid) {
        throw new Error('Pledge not funded!!');
    }
    for(var i = 0; i < txParams.pledgeId.funds.length; i++) {
        if(txParams.pledgeId.funds[i].govOrgId === txParams.govOrgId) {
            var daysToAdd = 0;
            switch(txParams.pledgeId.funds[i].fundingType) {
            case 'WEEKLY':
                daysToAdd = 7;
                break;
            case 'MONTHLY':
                daysToAdd = 30;
                break;
            case 'SEMIANNUALY':
                daysToAdd = 180;
                break;
            case 'ANNUALY':
                daysToAdd = 365;
                break;
            }

            // check for account balance in govt account should be >= fundsPerInstallment
            if(txParams.gov_ac_Obj.balance < txParams.pledgeId.funds[i].fundsPerInstallment) {
                throw new Error('Not enough Balance in GOVT account!!');
                //break;
            }

            // if there is enough balance, settle the account balances of GOVT and AID and update the totalFundsReceived of the asset ProjectPledge
            return getAssetRegistry(NS + '.gov_ac').then(function (govAcRegis) {
                var gv = txParams.gov_ac_Obj;
                gv.balance = gv.balance - txParams.pledgeId.funds[i].fundsPerInstallment;
                return govAcRegis.update(gv);
            }).then(function() {
                return getAssetRegistry(NS + '.aid_ac');
            }).then(function (aidAcRegis) {
                var ad = txParams.aid_ac_Obj;
                ad.balance = ad.balance + txParams.pledgeId.funds[i].fundsPerInstallment;
                return aidAcRegis.update(ad);
            }).then(function() {
                txParams.pledgeId.funds[i].nextFundingDueInDays = daysToAdd;
                txParams.pledgeId.funds[i].totalFundsReceived += txParams.pledgeId.funds[i].fundsPerInstallment;
                //break;
            }).then(function () {
				txParams.pledgeId.status = 'TRANSFERRING';
                return getAssetRegistry(NS + '.ProjectPledge')
			}).then(function (registry) {
                return registry.update(txParams.pledgeId);
            }).then(function () {
                var pledgeTsfedbyGOVNotification = getFactory().newEvent(NS, 'PledgeTsfedbyGOVNotification');
                pledgeTsfedbyGOVNotification.pledgeId = txParams.pledgeId.pledgeId;
                pledgeTsfedbyGOVNotification.name = txParams.pledgeId.name;
			    pledgeTsfedbyGOVNotification.status = 'TRANSFERRING';
                pledgeTsfedbyGOVNotification.approvedFunding = txParams.pledgeId.funds[i].approvedFunding;
                pledgeTsfedbyGOVNotification.totalFundsReceived = txParams.pledgeId.funds[i].totalFundsReceived;
				pledgeTsfedbyGOVNotification.nextFundingDueInDays = daysToAdd;
                emit(pledgeTsfedbyGOVNotification);
            });
	    }
    }
    
}