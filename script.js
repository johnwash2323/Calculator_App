let output = document.querySelector("#output-display")
function appendValue(value){
    output.value += value;
}
function clearDisplay(){
    output.value = ""
}
function deleteLast(){
    output.value = output.value.slice(0,-1)
}
function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
       output.value = "ERROR"
    }
}

const toggle = document.querySelector('#darkModeToggle')
const body = document.body

toggle.addEventListener('change', ()=>{
    if(toggle.checked){
        body.classList.add("dark-mode")
    }else{
        body.classList.remove('dark-mode')
    }
})