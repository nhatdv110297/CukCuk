$(document).ready(function () {
    //load du lieu
    customerJs = new CustomerJS();
})

/**
 * Object JS quan ly cac su kien cho trang danh muc khach hang
 * */
class CustomerJS extends BaseJS {
    constructor() {
        
        super();
        
    }

    setData() {
        this.Data = fakeData;
    }

    
    /**
     * ham luu du lieu
     *
     */
    /*saveData() {
        //lay du lieu tu input
        var customerCode = $('#txtCustomerCode').val();
        var customerName = $('#txtCustomerName').val();
        var birthday = $('#dtBỉthday').val();
        var mobile = $('#txtMobile').val();
        var debitAmount = $('#txtDebitAmount').val();
        var is5Food = $('#ckIs5FoodMember').is(":checked");

        var customer = {
            CustomerCode: $('#txtCustomerCode').val(),
            CustomerName: $('#txtCustomerName').val(),
            Birthday: new Date($('#dtBirthday').val()),
            PhoneNumber: $('#txtMobile').val(),
            DebitAmount: $('#txtDebitAmount').val(),
            Is5FoodMember: $('#ckIs5FoodMember').is(":checked")
        }


        //luu du lieu vao db

        fakeData.push(customer);

        //hien thi thong bao
        alert("Cất thàng công!");
        //dong form
        this.emptyDataForm();
        $('#formAdd').hide();
        //load lai du lieu hien thi
        this.loadData();
    }*/

    /**
     * ham lam trong form sai khi add hoac dong
     * */
    emptyDataForm() {
        $('#txtCustomerCode').val("");
        $('#txtCustomerName').val("");
        $('#dtBirthday').val("");
        $('#txtMobile').val("");
        $('#txtDebitAmount').val("");
        $('#ckIs5FoodMember').prop('checked', false);
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