import PageAdapter from '../../utils/PageAdapter'

module.exports = class CheckBox extends PageAdapter {
    getCollapseIcon() {
        return this.get('.rct-collapse > .rct-icon');
    }

    clickCollapse() {
        return this.getCollapseIcon().click();
    }

    getCheckboxText() {
        return this.get('.rct-text');
    }

    getCheckboxTitle() {
        return this.get('.rct-title');
    }

    clickTitle(data) { 
        return this.getCheckboxTitle().contains(data).click();
    }

    getResult() {
        return this.get('#result');
    }

    getClosedCollapsal() {
        return this.get('[class="rct-icon rct-icon-expand-close"]');
    }

    clickClosedCollapsal() {
        return this.getClosedCollapsal().click();
    }
};