/**
 * Doi tuong co so
 * */

class BaseJS {
    constructor() {
        this.setData();
        this.loadData();
        this.initEvent();
    }

    setData() {
        this.Data = [];
    }


    /**
     * khoi tao cac su kien
     * 
     * 
     * */
    initEvent() {
        $('#btnAdd').click(this.showForm);
        $('#btnRefresh').click(this.loadData);
        $('#btnCloseFormAdd').click(this.hideForm.bind(this));
        $('#btnClose2').click(this.hideForm.bind(this));
        $('#btnSave').click(this.saveData.bind(this));
        $('table#tableListCustomer').on('click', 'tr', function () {
            $(this).siblings().removeClass('item-selected');
            $(this).addClass('item-selected');
        })

    }

    /**
     * Load du lieu
     * CreateBy:NhatDV (23/9/2020)
     */
    loadData() {
        $('#tableListCustomer tbody').empty();
        var fields = $('#tableListCustomer thead tr th');
        debugger
        // Lay du lieu ve
        var datas = this.Data;
       
        // Doc du lieu va gen du lieu tung khach hang voi HTML
        $.each(datas, function (index, obj) {
            var trHTML = $('<tr></tr>');
            $.each(fields, function (index, field) {

                var fieldName = $(field).attr('fieldName');
                var value = obj[fieldName];
                var td;
                switch ($(field).attr('typeData')){
                    case 'Date': {
                        td = $(`<td>${commonJs.formatDate(value)}</td>`);
                        $(td).addClass('text-center');
                    } break;
                    case 'Money': {
                        td = $(`<td>${commonJs.formatMoney(value)}</td>`);
                        $(td).addClass('text-right');
                    } break;
                    case 'Boolean': {
                        td = $(`<td><input type="checkbox" disabled="disabled" ${commonJs.buildCheckBoxByValue(value)} /></td>`);
                        $(td).addClass('text-center');
                    } break
                    default: {
                        td = $(`<td>${value}</td>`);
                    } break;
                }
                
                $(trHTML).append(td);
            })
            $('#tableListCustomer tbody').append(trHTML);

        })
    }


    /**
     * ham hien form add dialog
     * 
     */
    showForm() {
        $('#formAdd').show();
    }

    /**
     * ham an form add dialog
     * 
     */
    hideForm() {
        this.emptyDataForm();
        $('#formAdd').hide();
    }
}