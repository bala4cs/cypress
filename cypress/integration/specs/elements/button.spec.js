import { COMPONENT } from '../../../helper/static/TestModuleName';
import Button from '../../../helper/pages/elements/Button';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const button = new Button();
const leftPanel = new LeftPanel();

describe(`${COMPONENT.button}`, () => {

  before(() => {
    genericFun.openElementsPage();
  });

  describe('Validate the different button click options', () => {

    it('should click the dynamic button and validate the message', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.BUTTON);
      cy.url().should('contains',State.BUTTON);
      button.getClick().eq(2).click();
      button.getDynamicClickMsg().should('have.text','You have done a dynamic click');
    });

    it('should perform right click on button and validate the message', () => {
      button.rightClickBtn();
      button.getRightClickMsg().should('have.text','You have done a right click');
    });

    it('should perform double click on button and validate the message', () => {
      button.doubleClickBtn();
      button.getDoubleClickMsg().should('have.text','You have done a double click');
    });

  });

});