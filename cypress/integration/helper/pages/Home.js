import PageAdapter from '../utils/PageAdapter'

module.exports = class Home extends PageAdapter {
    getCardBody() {
        return this.get('div.card-body');
    }

    clickCard(data) {
        return this.getCardBody().contains(data).click();
    }

};
