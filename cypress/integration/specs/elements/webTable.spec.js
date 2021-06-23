import { COMPONENT } from '../../../helper/static/TestModuleName';
import RegForm from '../../../helper/pages/modules/RegForm';
import WebTable from '../../../helper/pages/elements/WebTable';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const webTable = new WebTable();
const regForm = new RegForm();
const leftPanel = new LeftPanel();

describe(`${COMPONENT.webTable}`, () => {

  before(() => {
    genericFun.openElementsPage();
  });

  describe('Validate the web table visiblity', function() {

    it('should click the check box and check the table visiblity', function() {
      leftPanel.clickSubMenu(Menu.ElEMENT.WEB_TABLE);
      cy.url().should('contains',State.WEBTABLE);
      webTable.getAdd().should('be.visible');
      webTable.getSearchBox().should('be.visible');
      webTable.getSearchIcon().should('be.visible');
    });

    it('should contains the proper value in web table pagination', () => {
      webTable.getPrevious().should('be.visible');
      webTable.getNext().should('be.visible');
      webTable.getPageJump().should('be.visible');
      webTable.getTotalPage().should('have.text', '1');
    });

    it('should contains the proper content in the web table', () => {
      webTable.getRow().should('have.length', 10);
      webTable.getRow().eq(0).should('have.text', 'CierraVega39cierra@example.com10000Insurance ');
      webTable.getFirstEditIcon().should('be.visible');
      webTable.getFirstDelIcon().should('be.visible');
    });

  });

  describe('Validate the search facility in web tables', function() {

    it('should able to search the web tables with the proper last name', function() {
      webTable.typeSearchBox('Vega');
      webTable.getRow().eq(0).should('have.text', 'CierraVega39cierra@example.com10000Insurance ');
    });

  });

  describe('Validate the error message in the Registration form', function() {

    it('should get the proper label in the text box', function() {
      webTable.clickAdd();
      regForm.getFirstNameLabel().should('have.text', 'First Name');
      regForm.getLastNameLabel().should('have.text', 'Last Name');
      regForm.getEmailLabel().should('have.text', 'Email');
      regForm.getAgeLabel().should('have.text', 'Age');
      regForm.getSalaryLabel().should('have.text', 'Salary');
      regForm.getDeptLabel().should('have.text', 'Department');
    });

    it('should show the red-color border in all the text box, once click the submit button', function() {
      regForm.clickSubmit();
      regForm.getFirstName().should('have.css','border-top-color', 'rgb(220, 53, 69)');
      regForm.getLastName().should('have.css','border-top-color', 'rgb(220, 53, 69)');
      regForm.getUserEmail().should('have.css','border-top-color', 'rgb(220, 53, 69)');
      regForm.getAge().should('have.css','border-top-color', 'rgb(220, 53, 69)');
      regForm.getSalary().should('have.css','border-top-color', 'rgb(220, 53, 69)');
      regForm.getDept().should('have.css','border-top-color', 'rgb(220, 53, 69)');
    });

    it('should close the reg form without any issues', () => {
      regForm.clickClose();
      webTable.getAdd().should('be.visible');
    });

  });

  describe('Validate the success message in the Registration form', function() {

    it('should add the data without any issues in the web tables', function() {
      webTable.reload();
      webTable.clickAdd();
      regForm.typeFirstName('FirstName');
      regForm.typeLastName('LastName');
      regForm.typeEmail('email@gmail.com');
      regForm.typeAge('23');
      regForm.typeSalary('1000');
      regForm.typeDept('cs');
      regForm.clickSubmit();
      webTable.typeSearchBox('email');
      webTable.getRow().eq(0).should('have.text', 'FirstNameLastName23email@gmail.com1000cs ');
    });

  });

  describe('Validate the edit message in the Registration form', function() {

    it('should update the data without any issues in the web tables', function() {
      webTable.reload();
      webTable.typeSearchBox('Vega');
      webTable.getFirstEditIcon().click();
      regForm.getFirstName().clear();
      regForm.typeFirstName('Check');
      regForm.clickSubmit();
      webTable.getRow().eq(0).should('have.text', 'CheckVega39cierra@example.com10000Insurance ');
    });

  });


  describe('Validate the delete message in the Registration form', function() {

    it('should delete the data without any issues in the web tables', function() {
      webTable.reload();
      webTable.getFirstDelIcon().click();
      webTable.getRow().eq(0).should('not.have.text', 'CierraVega39cierra@example.com10000Insurance ');
    });

  });

});