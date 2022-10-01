class calculator {
    constructor (previousText, currentText){
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear(){
        this.currentOprerand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOprerand = this.currentOprerand.toString().slice(0, -1);
    }

    addNumber(number){
        if (number ==='.' && this.currentOprerand.includes('.')) return
        this.currentOprerand = this.currentOprerand.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentOprerand ==='') return
        if (this.previousOperand !==''){
            this.calculate();
        }
        this.operation  = operation;
        this.previousOperand  = this.currentOprerand;
        this.currentOprerand = ''; 

    }

    calculate(){
        let screenvalue;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOprerand);
       if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+' : 
               screenvalue = prev + current;
               break;
            case '-' : 
               screenvalue = prev - current;
               break;
            case '*' : 
               screenvalue = prev * current;
               break;
            case '/' : 
               screenvalue = prev / current;
               break;  
            default:
                return    
        }
        
        this.currentOprerand = screenvalue;
        this.operation = undefined;
        this.previousOperand = '';

    }

    update(){
        this.currentText.innerText = this.currentOprerand;
        this.previousText.innerText = this.previousOperand;
        
    }


}


const numbersButton = document.querySelectorAll('.numbers');
const operationButton = document.querySelectorAll('.operations');
const equalsButton = document.querySelector('.result');
const deleteButton = document.querySelector('.del');
const clearallButton = document.querySelector('.clearall');
const previousText = document.getElementById('previous')
const currentText = document.getElementById('current');


const calc = new calculator(previousText,currentText);

numbersButton.forEach(button => {
    button.addEventListener('click', () =>{
        calc.addNumber(button.innerText);
        calc.update();
    })
    
})
operationButton.forEach(button => {
    button.addEventListener('click', () =>{
        calc.chooseOperation(button.innerText);
        calc.update();
    })
       
})

equalsButton.addEventListener('click', button => {
    calc.calculate();
    calc.update();
})

clearallButton.addEventListener('click', button => {
    calc.clear();
    calc.update();
})

deleteButton.addEventListener('click', button => {
    calc.delete();
    calc.update();
})


