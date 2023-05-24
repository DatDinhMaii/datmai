var cart = JSON.parse(localStorage.getItem("cart"));
if(cart!=null){
    giohang = cart;
} else{
    var giohang = [];
}
 
var btn = document.getElementsByTagName("button");

for (let i = 0 ; i <btn.length ; i++){
    btn[i].addEventListener("click", function(){
        var hinh = btn[i].parentElement.childNodes[1].childNodes[1].childNodes[1].src;
        var ten = btn[i].parentElement.childNodes[3].childNodes[1].text;
        var gia = btn[i].parentElement.childNodes[3].childNodes[5].childNodes[3].value;
        var soluong = 1;
        //alert(hinh);
        var pro = {"hinh":hinh,"ten":ten,"gia":gia,"soluong":soluong};
        giohang.push(pro);
        // day gio hang len local storage        
        localStorage.setItem("cart",JSON.stringify(giohang));
        // Lay ve de show dung slsp trong cart
        getsoluongsp();

    });
}
//trang chu
function loaddatahome(){
    getsoluongsp();
    showproductnew();
}
function showproductnew(){

}
// cart page 
function loaddatacart(){
    getsoluongsp();
    showcart();
    total();
}
function showcart(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart != null) {
        var kq= "";
        for (let i = 0; i < cart.length; i++) {
            var tt = parseFloat(cart[i]["gia"] * cart[i]["soluong"]);
            kq += `<tr>
                        <td><img src="` + cart[i]["hinh"] + `" height = "80px">
                        ` + cart[i]["ten"] + `
                        </td>
                        <td>` + cart[i]["gia"] + `</td>
                        <td>` + cart[i]["soluong"] + `</td>
                        <td>` + tt + `</td>
                        <td>Xoa</td>
                    </tr>`;
        }
        document.getElementById("thongtingiohang").innerHTML = kq;
    }
}
function total(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            var tt = parseFloat(cart[i]["gia"] * cart[i]["soluong"]);
            total += tt;
        }
        document.getElementById("tongdonhang").innerHTML= "Tổng đơn hàng(Trieu): " + total;
    }
}
function getsoluongsp(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        document.getElementById("lenghtcart").innerHTML=cart.length;
    }
}
function delcart(){
    localStorage.removeItem("cart");
    window.location="webdgd.html"
}