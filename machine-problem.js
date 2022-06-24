let inputs;

const buttonSubmit = document.querySelector('#submit');
const outputContainer = document.querySelector('.output-container');
const form = document.querySelector('#form');



let pixel = 40;

const printX = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    let width = (2 * height) - 1;
    const box = document.querySelector('.box');
    let i, j, counter = 0;
    for (let i = 0; i < height; i++) {
        console.log(i)
     for (let j = 0; j < height; j++) {
        let newI = i * pixel;
        let newJ = j * pixel;
        
        let div = document.createElement('div');
        div.style.top = newI + 'px';
        div.style.left = newJ + 'px';
        div.style.margin = '4px';
        div.style.fontFamily = 'inherit';
        div.style.width = '24px';
        div.style.height = '24px';
        div.style.textAlign = 'center';
        div.style.position = 'absolute';
       
         if (i == j || i + j == height - 1 ){
            div.innerHTML = 'o'
           
       b.append(div);
        
      }else{
        
         box.append(div);
    }
        }
 
    }
    counter++;
  
}

const printY = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    
    let i, j, counter = 0;
    for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
            let newI = i * pixel;
            let newJ = j * pixel;

            let div = document.createElement('div');
            div.style.top = newI + 'px';
            div.style.left = newJ + 'px';
            div.style.margin = '4px';
            div.style.fontFamily = 'inherit';
            div.style.width = '24px';
            div.style.height = '24px';
            div.style.textAlign = 'center';
            div.style.position = 'absolute';

            let halfOfTheInput = Math.round(height / 2);
            if (j == counter || i + j == height - 1
                 && i <= parseInt(height / 2)){
                div.innerHTML = 'o';
                b.append(div);
                
            }else{
                div.style.left =`${(halfOfTheInput - 1) * pixel}px`
                div.innerHTML = ' ';
                b.append(div);
            }
        }
        if (i < parseInt(height / 2)){
            counter++;
        }
    }
}

const printZ = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    let width = (2 * height) - 1;
    let i, j, counter = height - 1;
    for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
            let newI = i * pixel;
            let newJ = j * pixel;
            
            let div = document.createElement('div');
            div.style.top = newI + 'px';
            div.style.left = newJ + 'px';
            div.style.margin = '4px';
            div.style.fontFamily = 'inherit';
            div.style.width = '24px';
            div.style.height = '24px';
            div.style.textAlign = 'center';
            div.style.position = 'absolute';
       
        if (i == 0 || i == height - 1 || j == counter){
            div.innerHTML = 'o'
             
             b.append(div);
            
           } else{
            div.innerHTML = ' ';
            b.append(div);
           }
                
        }
        counter--;
      
    }
}


const elemNumber = document.querySelector('.oddNumber');
let elemDirection = document.querySelector('.direction');
let elemText = document.querySelector('.inputs');
let checkBol = true;
buttonSubmit.addEventListener('click', getInput)

function getInput(){
    let p = []
    let inputOddNumber = parseInt(elemNumber.value);
    let inputDirection = elemDirection.value.trim().toLowerCase();
    let inputStr =  elemText.value.trim().toUpperCase();
    
    let passed =  checkInput(inputOddNumber,inputDirection,inputStr);
    console.log(passed)
    let elemFlow = setDir(inputDirection);
    let inputText = inputStr.split('');
    elemErrortext.style.visibility = 'visible';
    
    elemDirection.value = '';
    elemNumber.value = '';
    elemText.value = '';
    console.log(elemFlow)

        if(passed === false){
            console.log('complete all input fields first.')
            return ;
        }else{
        for(let i = 0; i < inputText.length; i++){
        
            if(inputText[i] === 'X'){
    
                outputContainer.style.flexDirection = `${elemFlow}`;
                let height = inputOddNumber;
                const divBox = document.createElement('div');
                divBox.classList.add('box');
                outputContainer.append(divBox)
                p.push(inputText[i])
                console.log(p)
                console.log(p.length)
                printX(divBox,height);
        
            }else if(inputText[i] === 'Y'){
    
                outputContainer.style.flexDirection = `${elemFlow}`;
                let height = inputOddNumber;
                const divBox = document.createElement('div');
                divBox.classList.add('box');
                outputContainer.append(divBox)
                p.push(inputText[i])
                console.log(p)
                console.log(p.length)
                printY(divBox,height);
               
            }else if(inputText[i] === 'Z'){
    
                outputContainer.style.flexDirection =   `${elemFlow}`;
                let height = inputOddNumber;
                const divBox = document.createElement('div');
                divBox.classList.add('box');
                outputContainer.append(divBox)
                p.push(inputText[i])
                console.log(p)
                console.log(p.length)
                printZ(divBox,height);
            }
            // return inputFields;
        }
    }
}
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', clearFunction)

function clearFunction(){
    outputContainer.innerHTML = ''
    elemErrorDirection.innerHTML = '';
    elemErrorNumbers.innerHTML = '';
    elemErrortext.innerHTML = '';
    elemDirection.innerHTML = '';
    elemNumber.innerHTML = '';
    elemText.innerHTML = '';
}

    

    function setNum(num){
        if(num < 3){
            console.log('num should be higher')
            checkBol = false;
        }
    }


   function setDir(dir){
        let directions = '';
        if(dir === 'vertical'){
            return directions = 'row'
        }else if(dir === 'horizontal'){
            return directions = 'column'
        }else{
            return directions;
        }
        
    };

    const elemErrortext = document.querySelector('.error-xyz');
    const elemErrorDirection = document.querySelector('.error-direction');
    const elemErrorNumbers = document.querySelector('.error-numbers');
    
    function textXYZ(ar){
        const re = /^[XYZ]*$/;
        
        return re.test(String(ar));
        
        
    }

    const setSuccess = (elem) => {
        elem.innerHTML = '';
        elem.style.visibility = 'hidden'
    }

    const setError = (elem,message) => {
        elem.innerHTML = message;
        elem.style.visibility = 'visible';
    }
    
   function checkInput(num, dirs, text){
    let correctDir = ['horizontal', 'vertical'];
    let valuePassed = false;
    let valueNum = false;
    let valueDir = false;
    let valueText = false;
    if(~~num === 0 || num === undefined || (num % 2) !== 1 ||  num < 3){
        setError(elemErrorNumbers, 'Numbers should not be lower to 3 and ODD number.')   
     }else{
        setSuccess(elemErrorNumbers);
        valueNum = true;
     }

     if(text === ''){
        setError(elemErrortext, 'Input texts X, Y and Z')
     }else if(!textXYZ(text)){
        setError(elemErrortext, 'text should be X, Y and Z.');
     }else{
        setSuccess(elemErrortext);
        valueText = true;
     }

     if(dirs === ''){
        setError(elemErrorDirection, 'Insert some Text.');
     }else if(dirs && !correctDir.includes(dirs) ){
        console.log(dirs)
        setError(elemErrorDirection,'Text should be vertical or horizontal.')
     }else{
        valueDir = true;
        setSuccess(elemErrorDirection)
     }

     if(valueNum && valueText && valueDir){
        console.log('all passed')
     }
    //  if(nu)
    return (valueNum && valueText && valueDir ? valuePassed = true : valuePassed = false);

   }