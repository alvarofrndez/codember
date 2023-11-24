const operation = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

function calculator(operation){
    let result = '';
    let actual_number = 0;

    for(char of operation){
        if(char == '&'){
            result += actual_number
        }else if(char == '#'){
            actual_number++
        }else if(char == '@'){
            actual_number--
        }else if(char == '*'){
            actual_number *= actual_number
        }
    }
    
    return result
}

console.log(calculator(operation))