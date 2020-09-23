$(document).ready(function () {
    //load du lieu
    customerJs = new CustomerJS();
})

/**
 * Object JS quan ly cac su kien cho trang danh muc khach hang
 * */
class CustomerJS {
    constructor() {
        var me = this;
        me.loadData();
        $('#btnAdd').click(function () {
            $('#formAdd').show();
        })
        $('#btnCloseFormAdd').click(function () {
            $('#formAdd').hide();
        })
        $('#btnClose2').click(function () {
            $('#formAdd').hide();
        })
        $('#btnSave').click(this.saveData.bind(me));
        $('tr').click(function () {

        })
    }

    /**
     * Load du lieu
     * CreateBy:NhatDV (23/9/2020)
     */
    loadData() {
        $('#tableListCustomer tbody').empty();
        // Lay du lieu ve
        var data = fakeData;
        // Doc du lieu va gen du lieu tung khach hang voi HTML
        $.each(data, function (index, item) {
            var customerInforHTML = `<tr>

                                    <td>${item.CustomerCode}</td>
                                    <td>${item.CustomerName}</td>
                                    <td>${commonJs.formatDate(item.Birthday)}</td>
                                    <td>${item.PhoneNumber}</td>
                                    <td>${commonJs.formatMoney(item.DebitAmount)}</td>
                                    <td><input type="checkbox" ${commonJs.buildCheckBoxByValue(item.Is5FoodMember)} /></td>
                                </tr>`;
            $('#tableListCustomer tbody').append(customerInforHTML);

        })
    }

    /**
     * ham luu du lieu
     *
     */
    saveData() {
        //lay du lieu tu input
        /*var customerCode = $('#txtCustomerCode').val();
        var customerName = $('#txtCustomerName').val();
        var birthday = $('#dtBỉthday').val();
        var mobile = $('#txtMobile').val();
        var debitAmount = $('#txtDebitAmount').val();
        var is5Food = $('#ckIs5FoodMember').is(":checked");*/

        var customer = {
            CustomerCode: $('#txtCustomerCode').val(),
            CustomerName: $('#txtCustomerName').val(),
            Birthday: new Date($('#dtBỉthday').val()),
            PhoneNumber: $('#txtMobile').val(),
            DebitAmount: $('#txtDebitAmount').val(),
            Is5FoodMember: $('#ckIs5FoodMember').is(":checked")
        }


        //luu du lieu vao db

        fakeData.push(customer);

        //hien thi thong bao
        alert("Cất thàng công!");
        //dong form
        $('#formAdd').hide();
        //load lai du lieu hien thi
        this.loadData();
    }
}




var fakeData=[
    {
        CustomerCode: "KH001",
        CustomerName: "nguyen Van A",
        Birthday: new Date(1991,1,1),
        PhoneNumber: "1315315153",
        DebitAmount: 10000000,
        Is5FoodMember:true
    },
    {
        CustomerCode: "KH001",
        CustomerName: "nguyen Van A",
        Birthday: new Date(1991, 1, 1),
        PhoneNumber: "3254353626",
        DebitAmount: 10000000,
        Is5FoodMember: false
    },
    {
        CustomerCode: "KH001",
        CustomerName: "nguyen Van A",
        Birthday: new Date(1991, 1, 1),
        PhoneNumber: "23423634435",
        DebitAmount: 10000000,
        Is5FoodMember: true
    }
]