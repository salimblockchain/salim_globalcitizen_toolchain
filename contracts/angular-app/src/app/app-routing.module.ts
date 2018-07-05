/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';
import { ProjectPledgeComponent } from './ProjectPledge/ProjectPledge.component';
import { gov_acComponent } from './gov_ac/gov_ac.component';
import { aid_acComponent } from './aid_ac/aid_ac.component';

import { SampleParticipantComponent } from './SampleParticipant/SampleParticipant.component';
import { GovOrgComponent } from './GovOrg/GovOrg.component';
import { AidOrgComponent } from './AidOrg/AidOrg.component';
import { GlobalCitizenComponent } from './GlobalCitizen/GlobalCitizen.component';

import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';
import { CreateProjectPledgeComponent } from './CreateProjectPledge/CreateProjectPledge.component';
import { SendPledgeToGlobalCitizenComponent } from './SendPledgeToGlobalCitizen/SendPledgeToGlobalCitizen.component';
import { SendPledgeToGovOrgComponent } from './SendPledgeToGovOrg/SendPledgeToGovOrg.component';
import { UpdatePledgeComponent } from './UpdatePledge/UpdatePledge.component';
import { TransferFundsComponent } from './TransferFunds/TransferFunds.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SampleAsset', component: SampleAssetComponent },
  { path: 'ProjectPledge', component: ProjectPledgeComponent },
  { path: 'gov_ac', component: gov_acComponent },
  { path: 'aid_ac', component: aid_acComponent },
  { path: 'SampleParticipant', component: SampleParticipantComponent },
  { path: 'GovOrg', component: GovOrgComponent },
  { path: 'AidOrg', component: AidOrgComponent },
  { path: 'GlobalCitizen', component: GlobalCitizenComponent },
  { path: 'SampleTransaction', component: SampleTransactionComponent },
  { path: 'CreateProjectPledge', component: CreateProjectPledgeComponent },
  { path: 'SendPledgeToGlobalCitizen', component: SendPledgeToGlobalCitizenComponent },
  { path: 'SendPledgeToGovOrg', component: SendPledgeToGovOrgComponent },
  { path: 'UpdatePledge', component: UpdatePledgeComponent },
  { path: 'TransferFunds', component: TransferFundsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
