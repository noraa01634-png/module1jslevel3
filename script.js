let birthYearInput = document.getElementById("birthyear")
let button = document.getElementById("calculateBtn")
let result = document.getElementById("result")

button.addEventListener("click",function(){
let birthYear = birthYearInput.value 
if(birthYear === ""){
    result.textContent ="please enter your birth year"
    return 
}
 
let age = 2026 - birthyear 
result.textContent = "Your Age is" + age  
})