//bài 1
function diemTB(){
    let vl = prompt("Nhập điểm vật lý: ") ;
    let hh = prompt("Nhập điểm hóa học: ") ;
    let s = prompt("Nhập điểm sinh học: ") ;
    let arg ;

    arg = (parseFloat(vl) + parseFloat(hh) + parseFloat(s))/3;
    document.write("điểm trung bình là: "+ arg);

}

//------------------------------------------------------------
//bài 2
function chuyendoi() {
    let doC = parseFloat(prompt("Nhập độ C: "));
    doF = doC/5*9 +32;
    alert("độ F chuyển đổi được là: " + doF);
}

//----------------------------------
//bài 3
function S_tron() {
    let r = parseFloat(prompt("Nhập bán kính R"));
    const pi =3.14;
    let dttron;
    dttron = pi * r^2;
    alert("Diện tích hình tròn là: "+ dttron);
}

//---------------------------------------------------------
//bài 4
function chuvitron() {

    let r = parseFloat(prompt("nhập bán kính: "));
    const pi = 3.14;
    let chuvi ;
    chuvi = pi * 2 * r ;
    alert("Chi vi hình tròn là " + chuvi);


}