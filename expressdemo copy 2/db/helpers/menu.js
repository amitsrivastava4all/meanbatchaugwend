const Menu = require("../models/menu");
module.exports= {
    fillMenu(){
        const menus = [new Menu(1001,"Add","/add"),new Menu(1002,"Delete","/delete")]
        return menus;
    }
}