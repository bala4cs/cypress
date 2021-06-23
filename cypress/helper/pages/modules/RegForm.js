import PageAdapter from '../../utils/PageAdapter'

module.exports = class RegForm extends PageAdapter {

    getRegTitle() {
        return this.get('#registration-form-modal');
    }

    clickClose() {
        return this.click('[class = "close"]');
    }

    clickSubmit() {
        return this.click('#submit');
    }

    getFirstNameLabel() {
        return this.get('#firstName-label');
    }

    getLastNameLabel() {
        return this.get('#lastName-label');
    }

    getEmailLabel() {
        return this.get('#userEmail-label');
    }

    getAgeLabel() {
        return this.get('#age-label');
    }

    getSalaryLabel() {
        return this.get('#salary-label');
    }

    getDeptLabel() {
        return this.get('#department-label');
    }

    getFirstName() {
        return this.get('#firstName');
    }

    getLastName() {
        return this.get('#lastName');
    }

    getUserEmail() {
        return this.get('#userEmail');
    }

    getAge() {
        return this.get('#age');
    }

    getSalary() {
        return this.get('#salary');
    }

    getDept() {
        return this.get('#department');
    }

    typeFirstName(data) {
        return this.type('#firstName',data);
    }

    typeLastName(data) {
        return this.type('#lastName',data);
    }

    typeEmail(data) {
        return this.type('#userEmail',data);
    }

    typeAge(data) {
        return this.type('#age',data);
    }

    typeSalary(data) {
        return this.type('#salary',data);
    }

    typeDept(data) {
        return this.type('#department',data);
    }

};