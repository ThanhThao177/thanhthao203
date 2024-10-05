var list = JSON.parse(localStorage.getItem('Customer')) || [];
//tạo tài khoản
function DangKy() {
    var makh;
    var tenkh_ho = document.getElementById("tenkh-ho").value;
    var tenkh_ten = document.getElementById("tenkh-ten").value;
    var sdtkh = document.getElementById("sdtkh").value;
    var emailkh = document.getElementById("emailkh").value;
    var diachikh = document.getElementById("diachikh").value;
    var mkkh = document.getElementById("mkkh").value;
    var mkkh1 = document.getElementById("mkkh1").value;
    var number = /^[0-9]+$/;
    var atposition = emailkh.indexOf("@");
    var dotposition = emailkh.lastIndexOf(".");
    if (makh == null || makh == "") {
        var d = new Date();
        makh = Number(d);
    }
    if (tenkh_ho == null || tenkh_ho == "") {
        alert("Họ khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    } else if (tenkh_ten == null || tenkh_ten == "") {
        alert("Tên khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else if (sdtkh == null || sdtkh == "") {
        alert("Số điện thoại khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else if (diachikh == null || diachikh == "") {
        alert("Địa chỉ khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    } 
    else if (!sdtkh.match(number) || sdtkh.length != 10) {
        alert("Số điện thoại khách hàng phải là kiểu số và có độ dài là 10 ký tự! Vui lòng nhập lại!");
        return false;
    }
    else if (emailkh != "" && emailkh != null && (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= emailkh.length)) {
        alert("Email khách hàng không hợp lệ! Vui lòng nhập lại!");
        return false;
    }
    else if (mkkh == null || mkkh == "") {
        alert("Mật khẩu khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else if (mkkh1 == null || mkkh1 == "") {
        alert("Mật khẩu xác nhận khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else if (mkkh != mkkh1) {
        alert("Mật khẩu khách hàng không khớp! Vui lòng nhập lại!");
        return false;
    }
    console.log("AddCustomer");
    if (list == null) list = [];
    var customer = {
        "makh": makh,
        "tenkh_ho": tenkh_ho,
        "tenkh_ten": tenkh_ten,
        "sdtkh": sdtkh,
        "emailkh": emailkh,
        "diachikh": diachikh,
        "mkkh": mkkh
    };
    list.push(customer);
    localStorage.setItem("Customer", JSON.stringify(list));
    alert("Đăng ký thành công!");
    location.href= "login.html";
}

function Xoatatca(){
    localStorage.setItem("Customer",null);
    localStorage.reload;
    console.log("Clear data");
}

