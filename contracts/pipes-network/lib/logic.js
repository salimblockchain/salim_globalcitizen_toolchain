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
 * SendIotReading
 * @param {org.salim.SendIotReading} sendIotReading
 * @transaction
 */
function sendIotReading(txParams) {
    if(!txParams.iotIdObj) {
        throw new Error('Invalid ioT!!');
    }
 
    txParams.iotIdObj.rpm =  txParams.rpm;
    txParams.iotIdObj.pressure =  txParams.pressure;
    txParams.iotIdObj.level =  txParams.level;
    var cumulReading =  ( txParams.pressure * txParams.level ) / (txParams.rpm * txParams.iotIdObj.radius);

    var warningLvl = null;

    if (cumulReading > 3) {
        warningLvl = 'RED';
        console.log('RED');
    }

    if (cumulReading > 2 && cumulReading < 3) {
        warningLvl = 'ORANGE';
        console.log('ORANGE');
    }

    if (cumulReading < 2 ) {
        warningLvl = 'GREEN';
        console.log('GREEN');
    }

    return getAssetRegistry(NS + '.IotReadings').then(function (registry) {
        return registry.update(txParams.iotIdObj);
    }).then(function () {
        var issueWarning = getFactory().newEvent(NS, 'IssueWarning');
        issueWarning.iotId = txParams.iotIdObj.iotId;
        issueWarning.fromLat = txParams.iotIdObj.fromLat;
        issueWarning.fromLong = txParams.iotIdObj.fromLong;
        issueWarning.toLat = txParams.iotIdObj.toLat;
        issueWarning.toLong = txParams.iotIdObj.toLong;
        issueWarning.radius = txParams.iotIdObj.radius;
        issueWarning.rpm = txParams.rpm;
        issueWarning.pressure = txParams.pressure;
        issueWarning.level = txParams.level;
        issueWarning.cumulReading = cumulReading;
        issueWarning.alertLvl = warningLvl;
        emit(issueWarning);
    });
}
