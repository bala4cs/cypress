import PageAdapter from '../../utils/PageAdapter'

module.exports = class RadioBtn extends PageAdapter {
    getYes() {
        return this.get('#yesRadio');
    }

    getImpressive() {
        return this.get('#impressiveRadio');
    }

    getNo() {
        return this.get('#noRadio');
    }

    clickYes() {
        return this.getYes().click();
    }

    clickImpressive () {
        return this.getImpressive().click();
    }

    checkYes() {
        return this.checkForce('#yesRadio');
    }

    getSuccessElm() {
        return this.get('.text-success');
    }

};