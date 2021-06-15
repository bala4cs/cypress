
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

    // findByText(selector, text) {
    //     return protractor.element(protractor.by.cssContainingText(selector, text));
    // }

    // findByModel(selector) {
    //     return protractor.element(protractor.by.model(selector));
    // }

    // findAll(selector, ctx = null) {
    //     return ctx ? ctx.all(protractor.by.css(selector)) : protractor.element.all(protractor.by.css(selector));
    // }

    

    // scrollToEl(el) {
    //     protractor.browser.executeScript((elem) => elem.scrollIntoView(), el);
    //     protractor.browser.waitForAngular();
    //     return el;
    // }

    // clickEl(el) {
    //     const tappedEl = protractor.browser.touchActions().tap(el).perform();
    //     protractor.browser.waitForAngular();
    //     return tappedEl;
    // }

};