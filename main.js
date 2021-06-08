function kiemTra() {
    var chan = " ";
    var le = " ";
    var i = 0 ;
    while(i<100)  {
        if(i % 2 == 0){
            chan +=" "+i ; 
           
            i++;
        }
        else {
            le +=" "+i;
           
            i++;
        }
        
    }
    console.log("So chan : " + chan );
    console.log("So le : " + le );
}
kiemTra();
function kiemTraUseFor() {
    var chan = "";
    var le = "" ;
    for ( i = 0 ; i < 100 ; i++){
        if (i % 2 == 0) {
            chan +=" " + i ;
        }
        else {
            le +=" " + i ;
        }
    }
    console.log("So chan : " + chan );
    console.log("So le : " + le );
}
kiemTraUseFor();



/**Tinh tong so chan  */
 
function tinhTongSoChanWhile(number) {
    var tong = 0 ;
    var i = 0 ;
    while(i<=number) {
        if(i % 2 == 0){
            tong += i ;
            i++;
        }
        else {
            i++
        }
        
    }
    return tong;
    
}

document.getElementById("btnTinhTong").onclick = function(event) {
    event.preventDefault();
    var so = document.getElementById("txtSo").value ;
    console.log("Tong so chan la : " + tinhTongSoChanWhile(so));
    console.log("Tong so chan la : "+ tinhTongSoChanFor(so));

}

function tinhTongSoChanFor(n){
     var tong = 0 ;
     for (i = 0 ; i <= n ; i++) {
         if(i % 2 == 0){
             tong += i;
         }
     }
     return tong ;
}


// Tinh tong so chia het cho 3 ( 0 den 1000)

// Dung while
var count = 0;
var i = 0;
while(i<1000) {
    if(i % 3 == 0){
       count++ ;
        i++;
    }
    else {
        i++
    }
}
console.log("Co tat ca " + count + " so chia het cho 3");

// Dung for

var tempt = 0;
for ( i = 0 ; i < 1000 ; i++) {
    if( i % 3 == 0) {
        tempt++;
    }
}
console.log("Co tat ca " + count + " so chia het cho 3");

//tim so nguyen duong be nhat sao cho 1+2+3+...+n >10000

function tinhTong () {
    var tong = 0;
    var n = 0 ;
for (i = 0 ; i <= n ; i ++){
    tong += i ;
    if (tong>10000){
        break
    }
    n++;
}
console.log("So do la : " + n );
}
tinhTong();


//Tinh tong ham mu


function tinhTongSoMu(coSo , soMu) {
    var tong = 0 ;
    for(i = 1 ; i <= soMu ; i++) {
        tong += Math.pow(coSo , i);
    }
    return tong ;
} 

document.getElementById("btnTongHamMu").onclick = function() {
var coSo = document.getElementById("txtX").value ;
var soMu = document.getElementById("txtN").value ;
console.log("Tong la : " + tinhTongSoMu(coSo , soMu));
};

// Tinh giai thua

function tinhGiaThua(n) {
var giaiThua = 1 ; 
for(i = 1 ; i <= n ; i++) {
    giaiThua = giaiThua * i;
}
return giaiThua;
}

document.getElementById("btnTinhGiaiThua").onclick = function() {
var dauVao = document.getElementById("txtGiaTri").value ;
console.log("Giai thua cua " + dauVao + " la : " + tinhGiaThua(dauVao));

};




