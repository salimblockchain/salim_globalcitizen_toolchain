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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('angular-app');
    })
  });

  it('network-name should be salims-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('salims-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be angular-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('angular-app');
    });
  });

  
    it('SampleAsset component should be loadable',() => {
      page.navigateTo('/SampleAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleAsset');
      });
    });

    it('SampleAsset table should have 4 columns',() => {
      page.navigateTo('/SampleAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('ProjectPledge component should be loadable',() => {
      page.navigateTo('/ProjectPledge');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ProjectPledge');
      });
    });

    it('ProjectPledge table should have 8 columns',() => {
      page.navigateTo('/ProjectPledge');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });
  
    it('gov_ac component should be loadable',() => {
      page.navigateTo('/gov_ac');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('gov_ac');
      });
    });

    it('gov_ac table should have 5 columns',() => {
      page.navigateTo('/gov_ac');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('aid_ac component should be loadable',() => {
      page.navigateTo('/aid_ac');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('aid_ac');
      });
    });

    it('aid_ac table should have 5 columns',() => {
      page.navigateTo('/aid_ac');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SampleParticipant component should be loadable',() => {
      page.navigateTo('/SampleParticipant');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleParticipant');
      });
    });

    it('SampleParticipant table should have 4 columns',() => {
      page.navigateTo('/SampleParticipant');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('GovOrg component should be loadable',() => {
      page.navigateTo('/GovOrg');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('GovOrg');
      });
    });

    it('GovOrg table should have 4 columns',() => {
      page.navigateTo('/GovOrg');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('AidOrg component should be loadable',() => {
      page.navigateTo('/AidOrg');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AidOrg');
      });
    });

    it('AidOrg table should have 3 columns',() => {
      page.navigateTo('/AidOrg');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('GlobalCitizen component should be loadable',() => {
      page.navigateTo('/GlobalCitizen');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('GlobalCitizen');
      });
    });

    it('GlobalCitizen table should have 3 columns',() => {
      page.navigateTo('/GlobalCitizen');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SampleTransaction component should be loadable',() => {
      page.navigateTo('/SampleTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleTransaction');
      });
    });
  
    it('CreateProjectPledge component should be loadable',() => {
      page.navigateTo('/CreateProjectPledge');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateProjectPledge');
      });
    });
  
    it('SendPledgeToGlobalCitizen component should be loadable',() => {
      page.navigateTo('/SendPledgeToGlobalCitizen');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SendPledgeToGlobalCitizen');
      });
    });
  
    it('SendPledgeToGovOrg component should be loadable',() => {
      page.navigateTo('/SendPledgeToGovOrg');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SendPledgeToGovOrg');
      });
    });
  
    it('UpdatePledge component should be loadable',() => {
      page.navigateTo('/UpdatePledge');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UpdatePledge');
      });
    });
  
    it('TransferFunds component should be loadable',() => {
      page.navigateTo('/TransferFunds');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TransferFunds');
      });
    });
  

});