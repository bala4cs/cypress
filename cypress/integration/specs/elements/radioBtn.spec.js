
import { COMPONENT } from '../../../helper/static/TestModuleName';
import Home from '../../../helper/pages/Home';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import RadioBtn from '../../../helper/pages/elements/RadioBtn';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';

const home = new Home();
const leftPanel = new LeftPanel();
const radioBtn = new RadioBtn();

describe(`${COMPONENT.radioBtn}`, () => {

  describe('Validate the radio button with selection options enabled', function() {

    before(() => {
      cy.visit(Cypress.env('url'));
      home.clickCard(Menu.SUBMENU.ElEMENTS);
      cy.url().should('contains',State.ElEMENTS);
      leftPanel.getMenuList().should('have.length',6);
      leftPanel.getSubMenuList().should('have.length',9);
    });

    it('should click the check box and select all the values', function() {
      leftPanel.clickSubMenu(Menu.ElEMENT.RADIO_BTN);
      cy.url().should('contains',State.RADIOBTN);
      radioBtn.getYes().should('not.be.checked');
      radioBtn.checkYes(); 
      radioBtn.getSuccessElm().should('have.text', 'Yes');
    })

  })

  describe('Validate the disabled radio button', function() {

    it('should not able to be clickable', function() {
      radioBtn.getNo().should('be.disabled');
    })

  })

});