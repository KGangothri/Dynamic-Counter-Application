let counterElement  = document.getElementById("counterValue");
//console.log(counterElement);

function onIncrement(){
    let previouscountervalue = counterElement.textContent;
    //console.log(previouscountervalue);
    let updatedcountervalue = parseInt(previouscountervalue) + 1;
    //console.log(updatedcountervalue);
    counterElement.textContent=updatedcountervalue;
    
    if (updatedcountervalue>0){
        counterElement.style.color="green";
    }
    else if(updatedcountervalue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}
function onDecrement(){
    let previouscountervalue=counterElement.textContent;
    let updatedcountervalue=parseInt(previouscountervalue)-1;
    counterElement.textContent=updatedcountervalue;
    if (updatedcountervalue>0){
        counterElement.style.color="green";
    }
    else if(updatedcountervalue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    
}
function onReset(){
    let updatedcountervalue=0;
    counterElement.textContent=updatedcountervalue;
    counterElement.style.color="black";
    
}