var btn1= document.querySelector("#myBtn1"),
btn2 = document.querySelector("#myBtn2"),
btn3 = document.querySelector("#myBtn3");
var table = document.querySelector("#fortable");
var table2 = document.querySelector("#fortable2");
var table3 = document.querySelector("#fortable3");
btn3.onclick = function(){
table.classList.remove("hidden");
table3.classList.add("hidden");
table2.classList.add("hidden");
};
btn2.onclick = function(){
table2.classList.remove("hidden");
table3.classList.add("hidden");
table.classList.add("hidden");
};
btn1.onclick = function(){
table3.classList.remove("hidden");
table.classList.add("hidden");
table2.classList.add("hidden");
};