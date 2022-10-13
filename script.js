//write a function to get history output
function getHistory(){
    return document.getElementById('resultHistory').innerText;
}
function printHistory(num){
    document.getElementById('resultHistory').innerText = num;
}
function getResult(){
    return document.getElementById('resultOutput').innerText;
}
function printResult(num){
    if(num ==''){
        document.getElementById('resultOutput').innerText=num;
    }else{
        document.getElementById('resultOutput').innerText = getNumber(num);
    }
}
function getNumber(num){
    if(num == '-'){
        return '';
    }
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}
function reverseNumber(num){
    return Number(num.replace(/,/g , ''))
}
let numbers = document.getElementsByClassName('number');
for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        result = reverseNumber(getResult());
        if(result != NaN){
            result = result + this.id;
            printResult(result);
        }
    })
}
let operators = document.getElementsByClassName('operator');
for(let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(this.id == 'clear'){
            printHistory('');
            printResult('');
        }
        if(this.id == 'backspace'){
             result = reverseNumber(getResult()).toString();
             if(result){
                result = result.substring(0, result.length - 1);
                printResult(result);
            }
        }else{
            var result = getResult();
            var history = getHistory();
            if(history !== '' && result == ''){
                if(isNaN(history[history.length - 1])){
                    history = history.substring(0, history.length -1);
                    // printHistory(history);
                }
            }
            if(history !='' || result != ''){
                    result = result==""?
                    result:reverseNumber(result);
                    history = history + result;
                if(this.id == "="){
                    var result = eval(history);
                    printResult(result);
                    printHistory(history);
                }
                else{
                        history = history + this.id;
                        printHistory(history);
                        printResult('');
                    }
                
            }
        }
       
    })
}