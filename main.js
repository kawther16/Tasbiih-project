const value = document.querySelector("#value")
const incremntbtn = document.querySelector("#incremntbtn")
const resetbtn = document.querySelector("#resetbtn")
const decrementbtm = document.querySelector("#decrementbtm")
let startValue = 0
incremntbtn.addEventListener("click" , function(){
    startValue++;
    value.innerHTML = startValue
    if(startValue==10){
        value.style.color= "red"
    }
    else{
        value.style.color= "black"
    }
})
resetbtn.addEventListener("click" , function(){
    startValue=0;
    value.innerHTML = startValue
    


})
decrementbtm.addEventListener("click" , function(){
    if(startValue >0){
    startValue--;
    value.innerHTML = startValue
    if(startValue==10){
        value.style.color= "red"
    }
    else{
        value.style.color= "black"
    }
}
})