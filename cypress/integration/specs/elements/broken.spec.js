import { COMPONENT } from '../../../helper/static/TestModuleName';
import BrokenLink from '../../../helper/pages/elements/BrokenLink';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const brokenLink = new BrokenLink();
const leftPanel = new LeftPanel();

describe(`${COMPONENT.broken}`, () => {

  before(() => {
    genericFun.openElementsPage();
  });

  describe('Validate the broken images in the page', () => {

    it('should click the links submenu and check the broken image in the page', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.BROKEN);
      cy.url().should('contains',State.BROKEN);
      brokenLink.getBrokenImage().should('be.visible');
      brokenLink.getBrokenImage().should('have.attr', 'src', '/images/Toolsqa_1.jpg');
    });
  });

  describe('Validate the broken links in the page', () => {

    it('should click the links submenu and check the broken image in the page', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.BROKEN);
      cy.url().should('contains',State.BROKEN);
      cy.request('http://demoqa.com').should((response) => {
        expect(response.status).to.eq(200)
      });

      cy.request(
        {
          url : 'http://the-internet.herokuapp.com/status_codes/500',
          failOnStatusCode: false,
        }).should((response) => {
        expect(response.status).to.eq(500)
      });

    });
    
  });
});