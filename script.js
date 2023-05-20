function tabuada() {
    var n1 = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (n1.value.length == 0) {
        window.alert('Por favor,digite um número!')

    } else {
        let n = Number(n1.value)
        let c = 1
        tab.innerHTML = ''
        n1.focus()
        n1.value = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            // é algo útil para uma linguagem server side
            tab.appendChild(item)
            c++
        }
    }
} 
