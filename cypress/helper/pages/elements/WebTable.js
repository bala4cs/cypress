import PageAdapter from '../../utils/PageAdapter'

module.exports = class WebTable extends PageAdapter {
    getAdd() {
        return this.get('#addNewRecordButton');
    }

    clickAdd() {
        return this.click('#addNewRecordButton');
    }

    getSearchBox() {
        return this.get('#searchBox');
    }

    typeSearchBox(data) {
        return this.type('#searchBox',data);
    }

    getSearchIcon() {
        return this.get('#basic-addon2');
    }

    getFirstEditIcon() {
        return this.get('#edit-record-1');
    }

    getFirstDelIcon() {
        return this.get('#delete-record-1');
    }

    getPrevious() {
        return this.get('.-previous');
    }

    getNext() {
        return this.get('.-next');
    }

    getPageJump() {
        return this.get('.-pageJump');
    }

    getTotalPage() {
        return this.get('.-totalPages');
    }

    getRow() {
        return this.get('.rt-tr-group');
    }

};