
import Home from '../../helper/pages/Home';
import LeftPanel from '../../helper/pages/modules/LeftPanel';
import Menu from '../../helper/static/MenuEnum';
import State from '../../helper/static/StateEnum';
import PageAdapter from './PageAdapter';

const home = new Home();
const leftPanel = new LeftPanel();

module.exports = class GenericFun extends PageAdapter {

    openElementsPage() {
        cy.visit(Cypress.env('url'));
        home.clickCard(Menu.SUBMENU.ElEMENTS);
        cy.url().should('contains',State.ElEMENTS);
        leftPanel.getMenuList().should('have.length',6);
        leftPanel.getSubMenuList().should('have.length',9);
    }
}