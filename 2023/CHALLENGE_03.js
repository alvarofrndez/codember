const list = fetch('https://codember.dev/data/encryption_policies.txt')
    .then(response => response.text())
    .then(data => {
        return data
    })
async function resolve(){
    await list.then(data => {
        const lines = data.split("\n")
        let number = 0
        for(let line of lines){
            let reg = line.split(":")[0]
            let pass = line.split(":")[1].trim();
            let min = reg.split("-")[0]
            let max = reg.split("-")[1].split(" ")[0]
            let letter = reg.split(" ")[1]
            let count = 0

            for(let l of pass){
                if(l == letter)
                    count++
            }

            if(min > count || count > max)
                number++
            
            if(number == 13){
                console.log(pass)
                return
            }
        }
    })
}

resolve()