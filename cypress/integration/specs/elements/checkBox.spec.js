
import { COMPONENT } from '../../helper/static/TestModuleName';
import Home from '../../helper/pages/Home';
import LeftPanel from '../../helper/pages/modules/LeftPanel';
import CheckBox from '../../helper/pages/elements/CheckBox';

const home = new Home();
const leftPanel = new LeftPanel();
const checkBox = new CheckBox();

describe(`${COMPONENT.checkBox}`, () => {

  describe('Validate the check box options with full select and un-select options', function() {

    before(() => {
      cy.visit(Cypress.env('url'));
      home.clickCard('Elements');
      cy.url().should('contains','elements');
      leftPanel.getMenuList().should('have.length',6);
      leftPanel.getSubMenuList().should('have.length',9);
    });

    it('should click the check box and select all the values', function() {
      leftPanel.clickSubMenu('Check Box');
      checkBox.clickCollapse();
      checkBox.clickTitle('Home');
      checkBox.getResult().should('have.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
    })

    it('should unselect the checkbox without any issues', () => {
      checkBox.clickTitle('Home');
      checkBox.getResult().should('not.exist');
    });

  })

  describe('Validate the check box options with on select and un-select options', function () {
    before(() => {
      cy.visit(Cypress.env('url'));
      home.clickCard('Elements');
      cy.url().should('contains','elements');
      leftPanel.getMenuList().should('have.length',6);
      leftPanel.getSubMenuList().should('have.length',9);
    });
    
    it('should navigate to the workspace check box and click the angular value', function() {
      leftPanel.clickSubMenu('Check Box');
      checkBox.clickClosedCollapsal();
      checkBox.getClosedCollapsal().click({ multiple: true });
      checkBox.getClosedCollapsal().click({ multiple: true });
      checkBox.clickTitle('Angular');
      checkBox.getResult().should('have.text', 'You have selected :angular');
    })
  })

});