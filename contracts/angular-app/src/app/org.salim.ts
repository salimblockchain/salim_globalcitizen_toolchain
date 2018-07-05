import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.salim{
   export class SampleParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class SampleAsset extends Asset {
      assetId: string;
      owner: SampleParticipant;
      value: string;
   }
   export class SampleTransaction extends Transaction {
      asset: SampleAsset;
      newValue: string;
   }
   export class SampleEvent extends Event {
      asset: SampleAsset;
      oldValue: string;
      newValue: string;
   }
   export enum Status {
      INITIALSTATE,
      GLOBALCITIZENREVIEW,
      GOVORGREVIEW,
      PROPOSALFUNDED,
      TRANSFERRING,
   }
   export enum FundingType {
      WEEKLY,
      MONTHLY,
      SEMIANNUALY,
      ANNUALY,
      TBD,
   }
   export enum FundingStatus {
      COMPLETE,
      INCOMPLETE,
   }
   export enum MessageStatus {
      NOTREVIEWED,
      REVIEWED,
   }
   export class Funding {
      fundingType: FundingType;
      nextFundingDueInDays: number;
      approvedFunding: number;
      totalFundsReceived: number;
      fundsPerInstallment: number;
      govOrgId: GovOrg;
   }
   export class ProjectPledge extends Asset {
      pledgeId: string;
      name: string;
      decription: string;
      fundsRequired: number;
      status: Status;
      aidOrg: AidOrg;
      funds: Funding[];
   }
   export class gov_ac extends Asset {
      ac_name: string;
      bank_name: string;
      currency: string;
      balance: number;
   }
   export class aid_ac extends Asset {
      ac_name: string;
      bank_name: string;
      currency: string;
      balance: number;
   }
   export abstract class User extends Participant {
      projectPledge: ProjectPledge[];
   }
   export class GovOrg extends User {
      govOrgId: string;
      fundedPledges: ProjectPledge[];
   }
   export class AidOrg extends User {
      aidOrgId: string;
   }
   export class GlobalCitizen extends User {
      citizenId: string;
   }
   export class CreateProjectPledge extends Transaction {
      pledgeId: string;
      name: string;
      decription: string;
      fundsRequired: number;
      aidOrg: AidOrg;
   }
   export class SendPledgeToGlobalCitizen extends Transaction {
      citizenId: GlobalCitizen;
      pledgeId: ProjectPledge;
   }
   export class SendPledgeToGovOrg extends Transaction {
      govOrg: GovOrg[];
      pledgeId: ProjectPledge;
   }
   export class UpdatePledge extends Transaction {
      govOrgId: GovOrg;
      pledgeId: ProjectPledge;
      fundingType: FundingType;
      approvedFunding: number;
      fundsPerInstallment: number;
   }
   export class TransferFunds extends Transaction {
      govOrgId: GovOrg;
      pledgeId: ProjectPledge;
      gov_ac_Obj: gov_ac;
      aid_ac_Obj: aid_ac;
   }
   export class NewPledgeNotification extends Event {
      pledgeId: string;
      name: string;
      fundsRequired: number;
      status: string;
      aidOrgId: string;
   }
   export class PledgeApprovedbyGOVNotification extends Event {
      pledgeId: string;
      name: string;
      govOrgId: string;
      aidOrgId: string;
      approvedFunding: number;
      fundsPerInstallment: number;
   }
   export class PledgeTsfedbyGOVNotification extends Event {
      pledgeId: string;
      name: string;
      govOrgId: string;
      aidOrgId: string;
      fundsTsfedSofar: number;
      fundstobeTsfed: number;
   }
// }
