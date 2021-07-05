import PageAdapter from '../../utils/PageAdapter'

module.exports = class Links extends PageAdapter {

    getLinkHeader() {
        return this.get('.main-header');
    }

    getHomeLink() {
        return this.get('#simpleLink');
    }

    getDynamicLink() {
        return this.get('#dynamicLink');
    }

    getCreatedLink() {
        return this.get('#created');
    }

    getNoContentLink() {
        return this.get('#no-content');
    }

    getMovedLink() {
        return this.get('#moved');
    }

    getBadReqLink() {
        return this.get('#bad-request');
    }

    getUnauthorizeLink() {
        return this.get('#unauthorized');
    }

    getForbiddenLink() {
        return this.get('#forbidden');
    }

    getNotFoundLink() {
        return this.get('#invalid-url');
    }

    getResponse() {
        return this.get('#linkResponse');
    }

    
};