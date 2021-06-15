
import { COMPONENT } from '../../helper/static/TestModuleName';
import Home from '../../helper/pages/Home';
import LeftPanel from '../../helper/pages/modules/LeftPanel';
import TextBox from '../../helper/pages/elements/TextBox';

const home = new Home();
const leftPanel = new LeftPanel();
const textBox = new TextBox();

describe(`${COMPONENT.textBox}`, () => {

  describe('Validate the text box with valid data', function() {

    it('should navigate to the elements page and check the menu list', function() {
      cy.visit(Cypress.env('url'));
      home.clickCard('Elements');
      cy.url().should('contains','elements');
      leftPanel.getMenuList().should('have.length',6);
      leftPanel.getSubMenuList().should('have.length',9);
    })
    
    it('should click the text box and enter the valid details in the text box', function() {
      leftPanel.clickSubMenu('Text Box');
      textBox.setUserName('UserName');
      textBox.setEmail('bala@mail.com');
      textBox.setCurrentAddress('CurrentAddress');
      textBox.setPermAddress('PermanentAddress');
      textBox.clickSubmit();
      textBox.getOPName().contains('UserName');
      textBox.getOPEmail().contains('bala@mail.com');
      textBox.getOPCurrAddress().contains('CurrentAddress');
      textBox.getOPPermAddress().contains('PermanentAddress');
    })
  
  })

  describe('Validate the invalid email address', function () {
    it('should display the border background of email as red', () => {
      textBox.getEmail().clear();
      textBox.setEmail('bala');
      textBox.clickSubmit();
      textBox.getEmail().should('have.css','border-top-color', 'rgb(255, 0, 0)');
    });
  })

});