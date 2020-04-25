export function resize_input() {
    // var slogan = txt.value;
    // var hide = document.getElementById('hide')
    // var txt = document.getElementById('txt')
    let inputs = document.querySelectorAll('.input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', (e) => {
           
            let prev = e.target.previousSibling
            prev.textContent = e.target.value
            e.target.style.width = prev.offsetWidth + 'px'
        })
    }

    // txt.addEventListener('input', function resize() {

    //     hide.textContent = txt.value
    //     txt.style.width = hide.offsetWidth + 'px'
    // })

    // txt.addEventListener('focus', function () {
    //     if (txt.value == slogan) {
    //         txt.value = ' '
    //     }
    // })
    // txt.addEventListener('focusout', function () {
    //     let string = txt.value
    //     let arr = string.split('')
    //     let count = 0
    //     for (const elm of arr) {
    //         if (isNaN(parseInt(elm))) {
    //             console.log('nhap sai')
    //             count += 1
    //         }
    //     }
    //     if (count == 0) {
    //         let number = parseInt(txt.value)
    //         console.log(number)
    //     }
    // })
}
