
import { COMPONENT } from '../../../helper/static/TestModuleName';
import Home from '../../../helper/pages/Home';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import TextBox from '../../../helper/pages/elements/TextBox';
import Menu from '../../../helper/static/MenuEnum';
import State  from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const home = new Home();
const leftPanel = new LeftPanel();
const textBox = new TextBox();

describe(`${COMPONENT.textBox}`, () => {

  describe('Validate the a11y violations in text box page with valid data', () => {

    before(() => {
      genericFun.openElementsPage();
    });
    
    it('should click the text box and enter the valid details in the text box', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.TEXT_BOX);
      cy.url().should('contains',State.TEXTBOX);
      textBox.setUserName('UserName');
      textBox.setEmail('bala@mail.com');
      textBox.setCurrentAddress('CurrentAddress');
      textBox.setPermAddress('PermanentAddress');
      textBox.clickSubmit();
      textBox.getOPName().contains('UserName');
      textBox.getOPEmail().contains('bala@mail.com');
      textBox.getOPCurrAddress().contains('CurrentAddress');
      textBox.getOPPermAddress().contains('PermanentAddress');
    });


    it('should not contains any accessiblity violations', () => {
      cy.injectAxe()
      cy.checkA11y()
    });
  
  })

});