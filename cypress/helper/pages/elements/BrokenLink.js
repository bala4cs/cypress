import PageAdapter from '../../utils/PageAdapter'

module.exports = class BrokenLink extends PageAdapter {

    getValidLink() {
        return this.get('a[href*="http://demoqa.com"]');
    }

    getBrokenImage() {
        return this.get('[src*="Toolsqa_1.jpg"]');
    }

    getBrokenLink() {
        return this.get('a[href*="herokuapp.com"]');
    }

};