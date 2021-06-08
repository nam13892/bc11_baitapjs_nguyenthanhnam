/**
 * Bài 2 : Quản lý tuyển sinh
 * Đầu vào : 
 * Họ tên 
 * Tổng thu nhập năm
 * Số người phụ thuộc
 * 
 * Xử lý :
 * Xây dựng hàm thunhapchiuthue để tính Thu Nhập Chịu Thuế
 * 
 * Thuế thu nhập cá nhân phải trả = thu nhập chịu thuế x thuế xuất 
 * 
 * Đầu ra : 
 * 
 * Tiền thuế phải trả
 */
function thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) {
var thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc * 1600000) ;
if(thuNhapChiuThue>0){
    return thuNhapChiuThue ; 
}
else {
    thuNhapChiuThue = 0;
}
return thuNhapChiuThue;
}
document.getElementById("btnTinhTienThue").onclick = function(event) {
    event.preventDefault();
var hoVaTen = document.getElementById("txtHoVaTen").value ;
var tongThuNhapNam = document.getElementById("txtTongThuNhapNam").value ;
var soNguoiPhuThuoc = document.getElementById("txtSoNguoiPhuThuoc").value ;
var tienThue = 0;
if(tongThuNhapNam<=60000000) {
tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 5 / 100;
}
else if(60000000<tongThuNhapNam && tongThuNhapNam<=120000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 10 / 100;
}
else if(120000000<tongThuNhapNam && tongThuNhapNam<=216000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 15 / 100;
}
else if(216000000<tongThuNhapNam && tongThuNhapNam<=384000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 20 / 100;
}
else if(384000000<tongThuNhapNam && tongThuNhapNam<=624000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 25 / 100;
}
else if(624000000<tongThuNhapNam && tongThuNhapNam<=960000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 30 / 100;
}
else if(tongThuNhapNam>960000000){
    tienThue = thuNhapChiuThue(tongThuNhapNam , soNguoiPhuThuoc) * 35 / 100;
}
else {
    tienThue = 0 ;
}

info = "<div>Họ và tên : " + hoVaTen + "<hr>" + "Tiền thuế phải trả là : " + tienThue + "vnđ</div>"
document.getElementById("cardFooter").innerHTML = info ; 

};

/**
 * Bài 1 : Quản lý tuyển sinh
 * 
 * Đầu vào :
 * - Điểm chuẩn của hội đồng 
 * - Điểm 3 môn thi của thí sinh a
 * - Khu vực 
 * - Đối tượng dự thi 
 * 
 * Xử lý :
 * Hàm kiểm tra điểm đầu vào (Xem có môn nào có điểm bằng 0 hay ko)
 * Hàm kiểm tra khu vực 
 * Hàm kiểm tra đối tượng
 * Kiểm tra điểm tổng kết với điểm chuẩn 
 * 
 * Đầu ra :
 * Thông báo đậu hay rớt và tổng điểm
 * 
 * 
 */

function kiemTraDiemVao(mon_1 , mon_2 , mon_3) {
if((mon_1 * mon_2 * mon_3)==0){
    return "Không Đạt" ;
}
    return "Đạt" ;
}
function kiemTraKhuVuc(khuVuc) {
    if(khuVuc == "A") {
        return 2 ;
    }
    else if(khuVuc == "B"){
        return 1 ;
    }
    else if (khuVuc == "C") {
        return 0.5 ;
    }
    return 0 ;
}
function kiemTraDoiTuong(doiTuong) {
    if(doiTuong == 1) {
        return 2.5 ;
    }
    else if(doiTuong == 2){
        return 1.5 ;
    }
    else if(doiTuong == 3) {
        return 1 ;
    }
    else {
        return 0 ;
    }
}



document.getElementById("btnKiemTra").onclick = function(event) {
    event.preventDefault();
    var mon_1 = parseFloat(document.getElementById("txtMon_1").value) ;
    var mon_2 = parseFloat(document.getElementById("txtMon_2").value) ;
    var mon_3 = parseFloat(document.getElementById("txtMon_3").value) ;
    var khuVuc = document.getElementById("txtKhuVuc").value ;
    var doiTuong = document.getElementById("txtDoiTuong").value ;
    var diemChuan = parseFloat(document.getElementById("txtDiemChuan").value) ;
    var kiemTra = "";
    var diemTongKet = 0;
    kiemTra = kiemTraDiemVao(mon_1 , mon_2 , mon_3);
    diemTongKet = mon_1 + mon_2 + mon_3 + kiemTraKhuVuc(khuVuc) + kiemTraDoiTuong(doiTuong);
    if(kiemTra == "Đạt") {
        if(diemTongKet >= diemChuan) {
          info ="<div>Bạn đã đậu " + "<hr>" +"Tổng điểm của bạn là : " + diemTongKet + "</div>" ;
          document.getElementById("cardFooterHD").innerHTML = info ;
      }
      else {
        info ="<div>Bạn đã rớt " + "<hr>" +"Tổng điểm của bạn là : " + diemTongKet + "</div>" ;
        document.getElementById("cardFooterHD").innerHTML = info ;

      }
        
        }
        else {
            info ="<div>Bạn đã rớt " + "<hr>" +"Tổng điểm của bạn là : " + diemTongKet + "</div>" ;
            document.getElementById("cardFooterHD").innerHTML = info ;
        }

}

/**
 * Bài 3 :
 * Đầu vào : Tên , số Kw điện
 * 
 * Xử lý :
 * Hàm tính soKw <= 50Kw  trường hợp 1
 * Hàm tính 50Kw < soKw <= 100Kw  trường hợp 2
 * Hàm tính 100Kw < soKw <=200Kw  trường hợp 3
 * Hàm tính 200Kw < soKw <= 350Kw trường hợp 4 
 * Hàm tính sau soKw > 350Kw trường hơp 5
 * 
 * Tính tiền điện
 * 
 * Đầu ra : 
 * Tên và tiền điện
 * 
 */
const namMuoiKwDau = 25000 ;
const namMuoiKwKe = 32500 ;
const motTramKwKe = 85000;
const motTramNamMuoiKwKe = 165000;

function truongHop1(soKw){
     var tienDien = soKw * 500 ;
     return tienDien ;
}
function truongHop2(soKw) {
    var tienDien = namMuoiKwDau + (soKw - 50) * 650 ;
    return tienDien ;
}
function truongHop3(soKw) {
    var tienDien = namMuoiKwDau + namMuoiKwKe + (soKw - 100) * 850 ;
    return tienDien ;
}
function truongHop4(soKw) {
    var tienDien = namMuoiKwDau + namMuoiKwKe + motTramKwKe + (soKw - 200) * 1100 ;
    return tienDien ;
}
function truongHop5(soKw) {
    var tienDien = namMuoiKwDau + namMuoiKwKe + motTramKwKe + motTramNamMuoiKwKe + (soKw - 350) * 1300 ;
    return tienDien ;
}
function kiemTraSoKw(soKw) {
if(soKw>0 && soKw<=50){
    return 1 ;
}
else if(soKw>50 && soKw<=100){
    return 2 ;
}
else if (soKw>100 && soKw<=200){
    return 3 ;
}
else if(soKw>200 && soKw<=350){
    return 4 ;
}
else if(soKw>350){
    return 5 ;
} 
else {
    return 0 ;
}
}



document.getElementById("btnTinhTienDien").onclick = function(event) {
    event.preventDefault();
    var ten = document.getElementById("txtTen").value ;
    var soKw = parseFloat(document.getElementById("txtSoKw").value) ;
    var tienDien = 0;
    var kiemTra = kiemTraSoKw(soKw);
    switch(kiemTra) {
        case 1 :
            tienDien = truongHop1(soKw);
            info = "<div>Tên : " + ten + "<hr>" + "Tiền điện : " + tienDien + "vnđ</div>" ;
            document.getElementById("footerCard").innerHTML = info ;
            break;
        case 2 :
            tienDien = truongHop2(soKw);
            info = "<div>Tên : " + ten + "<hr>" + "Tiền điện : " + tienDien + "vnđ</div>" ;
            document.getElementById("footerCard").innerHTML = info ;
            break ;
        case 3 :
            tienDien = truongHop3(soKw);
            info = "<div>Tên : " + ten + "<hr>" + "Tiền điện : " + tienDien + "vnđ</div>" ;
            document.getElementById("footerCard").innerHTML = info ;
            break;
        case 4 :
            tienDien = truongHop4(soKw);
            info = "<div>Tên : " + ten + "<hr>" + "Tiền điện : " + tienDien + "vnđ</div>" ;
            document.getElementById("footerCard").innerHTML = info ;
            break ;
        case 5 :
            tienDien = truongHop5(soKw);
            info = "<div>Tên : " + ten + "<hr>" + "Tiền điện : " + tienDien + "vnđ</div>" ;
            document.getElementById("footerCard").innerHTML = info ;
            break ;
        default :
        info = "<div>Vui lòng nhập lại số Kw</div>" ;
        document.getElementById("footerCard").innerHTML = info ;
            break ;
    }
    

}
/**
 *Bài 4 : Tính hóa đơn cho công ty cáp 
 
 Đầu vào : 
 Mã khách hàng 
 Số kết nối thêm 
 Số kênh cao cấp 

 Xử lý : 

 Hàm tính hóa đơn cho khách hàng nhà dân 
 Hàm tính phí dịch vụ cơ bản doanh nghiệp
 Hàm tính hóa đơn cho khách hàng doanh nghiệp

 Đầu ra : 
 Tính tiền cáp 

  */   
 const phiXLHDNhaDan = 4.5 ;
 const phiDVCoBanNhaDan = 20.5 ;
 const phiXLHDDN = 15 ;




function tienCapNhaDan(soKenhCaoCap) {
    var tienCap = phiXLHDNhaDan + phiDVCoBanNhaDan + 7.5 * soKenhCaoCap ;
    return tienCap ;
}
function phiDVCoBanDoanhNghiep(soKetNoi) {
    if(soKetNoi<=10){
        var phiDVCoBanDN = soKetNoi * 75 ;
        return phiDVCoBanDN;
    }
    phiDVCoBanDN = 750 + (soKetNoi - 10) * 5 ;
    return phiDVCoBanDN;
}
function tienCapDoanhNghiep(soKenhCaoCap , soKetNoi) {
var tienCap = phiXLHDDN + phiDVCoBanDoanhNghiep(soKetNoi) + 50 * soKenhCaoCap ;
return tienCap ;
}

document.getElementById("btnTinhTienCap").onclick = function(event) {
    event.preventDefault();
    var maKH = document.getElementById("txtMaKH").value ;
    var soKenhCaoCap = document.getElementById("txtSoKenhCaoCap").value ;
    var soKetNoi = document.getElementById("txtSoKetNoi").value ;
    var tienCap = 0 ;
if (maKH == 1) {
tienCap = tienCapNhaDan(soKenhCaoCap);
}
else if(maKH == 2) {
    tienCap = tienCapDoanhNghiep(soKenhCaoCap,soKetNoi);
} else {
    alert("Vui lòng nhập lại mã khách hàng");
    return ;
}
info = "<div>Tiền cáp là : " + tienCap + "$</div>" ;
document.getElementById("footerCardCap").innerHTML = info ;
};


