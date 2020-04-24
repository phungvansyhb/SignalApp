export function resize_input() {
    var hide = document.getElementById('hide');
    var txt = document.getElementById('txt');
    var slogan = txt.value;
    resize();
    txt.addEventListener("input", resize);
    txt.addEventListener('focus', function () {

        if (txt.value == slogan) {
            txt.value = " ";
        }

    })
    txt.addEventListener('focusout', function () {
        let string = txt.value;
        let arr = string.split('');
        let count = 0;
        for (const elm of arr) {
            if (isNaN(parseInt(elm))) {

                console.log("nhap sai");
                count += 1;
            }
        }
        if (count == 0) {
            let number = parseInt(txt.value);
            console.log(number)
        }

    })

    function resize() {
        hide.textContent = txt.value;
        txt.style.width = hide.offsetWidth + "px";
    }
}