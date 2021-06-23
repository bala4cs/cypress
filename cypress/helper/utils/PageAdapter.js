
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

    click(selector) {
        return this.get(selector).click();
    }

    reload() {
        return cy.reload();
    }

    check(selector) {
        return this.get(selector).check();
    }

    checkForce(selector) {
        return this.get(selector).check({force: true});
    }

    multipleClick(selector) {
        return this.get(selector).click({ multiple: true })
    } 
    
};