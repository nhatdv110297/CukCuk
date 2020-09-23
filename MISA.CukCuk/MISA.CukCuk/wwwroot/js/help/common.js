var commonJs={
    /**
     * ham dinh dang hien thi tien
     * @param {number} money
     * */
    formatMoney(money) {
         return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    },

    /**
     * Tao chuoi HTML checkbox ung voi true false
     * @param {boolean} value true:checked
     * */
    buildCheckBoxByValue(value) {
        if (value) return "checked";
        else return "";
    },

    /**
     * ham dinh dang ngay thang
     */
    formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        day = (day < 10) ? `0${day}` : day;
        month = (month < 10) ? `0${month}` : month;
        return `${day}/${month}/${year}`;
    }

}

