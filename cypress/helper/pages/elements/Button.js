import PageAdapter from '../../utils/PageAdapter'

module.exports = class Button extends PageAdapter {
    getClick() {
        return this.get('[class="btn btn-primary"]');
    }

    doubleClickBtn() {
        return this.doubleClick('#doubleClickBtn');
    }

    rightClickBtn() {
        return this.rightClick('#rightClickBtn');
    }

    getDynamicClickMsg() {
        return this.get('#dynamicClickMessage');
    }

    getRightClickMsg() {
        return this.get('#rightClickMessage');
    }

    getDoubleClickMsg() {
        return this.get('#doubleClickMessage');
    }
};