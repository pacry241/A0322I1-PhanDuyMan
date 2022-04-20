function cong() {
    let so1= document.getElementById("so1").value;
    let so2= document.getElementById("so2").value;
    let kq ;
    kq= so1*1 + so2*1 ;
    document.getElementById("kqua").innerText= kq;

}
function tru() {
    let so1= document.getElementById("so1").value;
    let so2= document.getElementById("so2").value;
    let kq ;
    kq= so1*1 - so2*1 ;
    document.getElementById("kqua").innerText= kq;

}
function nhan() {
    let so1= document.getElementById("so1").value;
    let so2= document.getElementById("so2").value;
    let kq ;
    kq= so1*1 * so2*1 ;
    document.getElementById("kqua").innerText= kq;

}
function chia() {
    let so1= document.getElementById("so1").value;
    let so2= document.getElementById("so2").value;
    let kq ;
    kq= so1*1 / so2*1 ;
    document.getElementById("kqua").innerText= kq;

}