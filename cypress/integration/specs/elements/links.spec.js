import { COMPONENT } from '../../../helper/static/TestModuleName';
import Links from '../../../helper/pages/elements/Links';
import LeftPanel from '../../../helper/pages/modules/LeftPanel';
import Menu from '../../../helper/static/MenuEnum';
import State from '../../../helper/static/StateEnum';
import GenericFun from '../../../helper/utils/GenericFun';

const genericFun = new GenericFun();
const links = new Links();
const leftPanel = new LeftPanel();

describe(`${COMPONENT.links}`, () => {

  before(() => {
    genericFun.openElementsPage();
  });

  describe('Validate the link redirection', () => {

    it('should click the links submenu and check the links page', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.LINK);
      cy.url().should('contains',State.LINK);
      links.getLinkHeader().should('have.text', Menu.ElEMENT.LINK);
    });

    it('should click the redirection / home link submenu and check the links page', () => {
      
      // Removing target="_blank" attribute
      // cy.get('a').invoke('removeAttr','target');

      // 
      /**
       * Testing link attributes
        links.getHomeLink()
         .should('have.attr','href','https://demoqa.com')
         .should('have.attr','target','_blank');
      */

      links.getHomeLink().then(link => {
          cy
            .request(link.prop('href'))
            .its('status')
            .should('eq', 200);
      });

      /***
       * Redirects made by JavaScript
        cy.window().then((win)=>{
          cy.spy(win, 'open').as('redirect');
        });
        cy.get('#simpleLink').click();
        cy.get('@redirect').should('be.calledWith','href','https://demoqa.com');
      */
      
    });
  });

  describe('Validate the link failure request', () => {

    it('should click the links submenu and check the links page', () => {
      leftPanel.clickSubMenu(Menu.ElEMENT.LINK);
      cy.url().should('contains',State.LINK);
      links.getLinkHeader().should('have.text', Menu.ElEMENT.LINK);
    });


    it('should click the bad request link and verify the request', () => {
      links.getBadReqLink().click().then(req);
      links.getResponse().should('have.text','Link has responded with staus 400 and status text Bad Request');
    });

  });

  function req () {
    cy.request({
      url: 'https://demoqa.com/bad-request',
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(400);
    })
  }


});