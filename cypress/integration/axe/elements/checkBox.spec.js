
import { COMPONENT } from '../../../helper/static/TestModuleName';
import Home from '../../../helper/pages/Home';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import CheckBox from '../../../helper/pages/elements/CheckBox';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';
import { injectAxe } from 'cypress-axe';

const genericFun = new GenericFun();
const home = new Home();
const leftPanel = new LeftPanel();
const checkBox = new CheckBox();

/**
 * This case will help us to understand the 
 *    exclude specific elements
 *    include specific elements
 *    disable axe rules
 * for the A11Y violations
 */

describe(`${COMPONENT.checkBox}`, () => {

  describe('Validate the A11y violations in check box page', () => {

    before(() => {
      genericFun.openElementsPage();
    });

    it('should click the check box and select all the values', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.CHECK_BOX);
      cy.url().should('contains',State.CHECKBOX);
      checkBox.clickCollapse();
      checkBox.clickTitle('Home');
      checkBox.getResult().should('have.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
    })

    it('should not contains any accessiblity violations', () => {
      cy.injectAxe();
      cy.checkA11y();
    });


    it('should exlcude the specific elements on the page for a11y violations', () => {
      cy.injectAxe();
      cy.checkA11y({ exclude: ['.element-list > .menu-list']});
    });

    it('should test only the specific elements on the page for a11y violations', () => {
      cy.injectAxe();
      cy.checkA11y('.element-list > .menu-list');
    });

    it('should only include rules with serious and critical impacts', () => {
      cy.injectAxe();
      cy.checkA11y(null, {includedImpacts:['critical','serious']});
    });
  })

});