import PageAdapter from '../../utils/PageAdapter'

module.exports = class TextBox extends PageAdapter {
    getUserName() {
        return this.get('#userName');
    }

    setUserName(uname) {
        return this.type('#userName',uname);
    }

    getEmail() {
        return this.get('#userEmail');
    }

    setEmail(email) {
        return this.getEmail().type(email);
    }

    getCurrentAddress() {
        return this.get('#currentAddress');
    }

    setCurrentAddress(currentAddress) {
        return this.getCurrentAddress().type(currentAddress);
    }

    getPermAddress() {
        return this.get('#permanentAddress');
    }

    setPermAddress(permAddress) {
        return this.getPermAddress().type(permAddress);
    }

    getSubmitBtn() {
        return this.get('#submit');
    }

    clickSubmit() {
        return this.getSubmitBtn().click();
    }

    getOPName() {
        return this.get('#name');
    }

    getOPEmail() {
        return this.get('#email');
    }

    getOPCurrAddress() {
        return this.get('p#currentAddress');
    }

    getOPPermAddress() {
        return this.get('p#permanentAddress');
    }

};