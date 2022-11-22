function contar(){
    let res = document.querySelector('div#res')
    res.innerHTML = `<H1>Contando de 1 até 10</H1> <br>`
    for (let num = 1;num <= 10;num++){
        res.innerHTML += ` ${num} \u{1f449} `
    }
    res.innerHTML += `\u{1f3c1} <br>` 
    for (let num = 1;num <= 10;num++){
        res.innerHTML += ` ${num} \u{1f449} `
    }
    res.innerHTML += `\u{1f3c1} <br>`
    for (let num = 1;num <= 10;num++){
        res.innerHTML += ` ${num} \u{1f449} `
    }
    res.innerHTML += `\u{1f3c1} <br>`
    for (let num = 1;num <= 10;num++){
        res.innerHTML += ` ${num} \u{1f449} `
    }
    res.innerHTML += `\u{1f3c1} <br>`
}