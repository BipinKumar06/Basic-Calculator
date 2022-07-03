ans=document.querySelector("#ans")
window.onload=()=>{
ans.focus();  
}
function sin(){
    ans.value=Math.sin(ans.value)
}
function cos(){
    ans.value=Math.cos(ans.value)
}
function tan(){
    ans.value=Math.tan(ans.value)
}
function clr(){
ans.value=``
}
function sqrt(){
    ans.value=Math.sqrt(ans.value)
}
function cbrt(){
    ans.value=Math.cbrt(ans.value)
}
function dlt(){
    ans.value=ans.value.substr(0,ans.value.length-1)
}
function sq(){
    ans.value=(ans.value*ans.value)
}
function expo(){
    ans.value=Math.exp(ans.value)
}
function cube(){
    ans.value=(ans.value*ans.value*ans.value)
}
function number(value){
    ans.value+=`${value}`;
}
function equal(){
    ans.value=eval(ans.value)
}
ind=1;
function modechange(){
    if(ind==1){
        document.querySelector(".main").style.background='black';
        document.querySelector('#mode #mode1').style.background='white';
        document.querySelector("#mode #mode1").style.color='black';
       
    }
   else{
    document.querySelector(".main").style.background='rgba(0, 0, 0, 0.646)';
    document.querySelector('#mode #mode1').style.background='black';
        document.querySelector("#mode #mode1").style.color='white';
   }
   ind=1-ind;
}
