function btn_clicked(num){
    document.getElementById("result").value += num;
}
function res_clear(){
    document.getElementById("result").value = "";
}
function calculate(){
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
function btn_delete(){
    let val = document.getElementById("result").value;
    val = val.slice(0,-1);
    document.getElementById("result").value = val;
}