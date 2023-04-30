function converter(){
    let temp=document.getElementById("value").value;
    let typetemp=document.getElementById("cf").value;
    let result=0;
    temp=parseFloat(temp);
    if(typetemp=="farenheit"){
        result=(temp-32)*(5/9)+"C";
    }
    else if(typetemp=="celcius") {
        result=((9/5*temp)+32)+"F";
    }
    

document.getElementById("result").textContent=result;
document.getElementById("result").style.color="white";
}