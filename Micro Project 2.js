function appendNumber(num){
    display.value += num;
}
function clearDisplay(){
    display.value = "";
}
function appendOperator(opp){
    if(display.value==="" && (opp==="+" || opp==="-")) {
        display.value += opp;
    }
    else if(display.value!=="" && !isNaN(display.value.slice(-1))){
        display.value += opp;
    } 
    else display.value = "Invalid Syntax!";
}
function getResult(){
    if(!isNaN(display.value.slice(-1))) display.value = eval(display.value);
    else display.value = "Invalid Syntax!"
}
function delLastItem(){
    display.value = display.value.slice(0,-1);
}