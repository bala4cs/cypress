
import { COMPONENT } from '../../../helper/static/TestModuleName';
import Home from '../../../helper/pages/Home';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import CheckBox from '../../../helper/pages/elements/CheckBox';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const home = new Home();
const leftPanel = new LeftPanel();
const checkBox = new CheckBox();

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
      cy.injectAxe()
      cy.checkA11y()
    });

  })

});