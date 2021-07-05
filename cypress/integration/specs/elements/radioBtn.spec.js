
import { COMPONENT } from '../../../helper/static/TestModuleName';
import Home from '../../../helper/pages/Home';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import RadioBtn from '../../../helper/pages/elements/RadioBtn';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const home = new Home();
const leftPanel = new LeftPanel();
const radioBtn = new RadioBtn();

describe(`${COMPONENT.radioBtn}`, () => {

  describe('Validate the radio button with selection options enabled', () => {

    before(() => {
      genericFun.openElementsPage();
    });

    it('should click the check box and select all the values', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.RADIO_BTN);
      cy.url().should('contains',State.RADIOBTN);
      radioBtn.getYes().should('not.be.checked');
      radioBtn.checkYes(); 
      radioBtn.getSuccessElm().should('have.text', 'Yes');
    })

  })

  describe('Validate the disabled radio button', () => {

    it('should not able to be clickable', () => {
      radioBtn.getNo().should('be.disabled');
    })

  })

});