import PageAdapter from '../../utils/PageAdapter';

module.exports = class LeftPanel extends PageAdapter {
   
    getMenuList() {
        return this.get('.element-list > .menu-list');
    }

    getSubMenuList() {
        return this.get('[class="element-list collapse show"] >ul >li');
    }

    clickSubMenu(data) { 
        return this.getSubMenuList().contains(data).click();
    }
    
};