
export default class PageAdapter {

    get(selector) {
        return cy.get(selector);
    }

    visit(url) {
        cy.visit(url);
    }

    type(selector, content) {
       return this.get(selector).type(content);
    }

    
};