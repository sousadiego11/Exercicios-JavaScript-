
const operation = document.querySelectorAll("[data-operation]")
const numbers = document.querySelectorAll("[data-content]")
const del = document.querySelector("[data-del]")
const allClear = document.querySelector("[data-ac]")
const displayPrevious = document.querySelector("[data-previous]")
const displayCurrent = document.querySelector("[data-current]")
const displayOperator = document.querySelector("[data-operator]")
const result = document.querySelector("[data-result]")

allClear.addEventListener("click", clear)
numbers.forEach(button => button.addEventListener("click", addNumber))
operation.forEach(operator => operator.addEventListener("click", updateDisplay))
result.addEventListener("click", doResult)
del.addEventListener("click", delNumber)

function delNumber(){
    displayCurrent.innerHTML = displayCurrent.innerHTML.toString().slice(0, -1)
}
function clear() {
    displayCurrent.innerHTML = " ";
    displayPrevious.innerHTML = " ";
    displayOperator.innerHTML = " ";
}

function addNumber() {
    
    const targetNumber = event.target.innerHTML;
        
    if (targetNumber === "." && displayCurrent.innerHTML.includes(".")) {
        return addNumber;
    }

    displayCurrent.innerHTML += targetNumber;
}

function updateDisplay(){
    
    const operator = event.target.innerHTML
    
    if(displayCurrent.innerHTML != " "){
        displayPrevious.innerHTML = displayCurrent.innerHTML + " " + operator
        displayCurrent.innerHTML = " "
    }
    
}
function doResult(){        
    
    const previousNum = parseFloat(displayPrevious.innerHTML)
    const currentNum = parseFloat(displayCurrent.innerHTML)
    
    if(displayPrevious.innerHTML.includes("+")){
        const finalResult = previousNum + currentNum
        displayCurrent.innerHTML = finalResult
    }
    
    else if(displayPrevious.innerHTML.includes("-")){
        const finalResult = previousNum - currentNum
        displayCurrent.innerHTML = finalResult
    }
    
    else if(displayPrevious.innerHTML.includes("/")){
        const finalResult = previousNum / currentNum
        displayCurrent.innerHTML = finalResult
    }
    
    else if(displayPrevious.innerHTML.includes("*")){
        const finalResult = previousNum * currentNum
        displayCurrent.innerHTML = finalResult
    }
    
    displayPrevious.innerHTML = " "    
}