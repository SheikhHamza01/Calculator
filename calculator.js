var num1 = [/*0*/document.getElementById('1'), /*1*/document.getElementById('2'), /*2*/document.getElementById('3'), /*3*/document.getElementById('+')
    , /*4*/document.getElementById('4'), /*5*/document.getElementById('5'), /*6*/document.getElementById('6'), /*7*/document.getElementById('-')
    , /*8*/document.getElementById('7'), /*9*/document.getElementById('8'), /*10*/document.getElementById('9'), /*11*/document.getElementById('*')
    , /*12*/document.getElementById('C'), /*13*/document.getElementById('0'), /*14*/document.getElementById('='), /*15*/document.getElementById('/')]
var input = document.getElementById('inputOutput')

var num = []
for (let i = 0; i <= 15; i++) {
    num1[i].addEventListener('click', function () {
        console.log("outputting")
        if (i !== 12 && i !== 14) {
            input.innerHTML += num1[i].innerHTML
            num[num.length] = num1[i].innerHTML
            console.log(num)
        }
        else if (i === 12) {
            input.innerHTML = ""
            for (var j = 0; j < num.length; j++) {
                num[j] = ""
            }
            num.length = 0
            console.log(num)
        }
        else {
            input.innerHTML += num1[14].innerHTML
            console.log(num)

            var str = ""
            for (var j = 0; j < num.length; j++) {
                str += num[j].toString()
            }
            console.log(str)
            var output = eval(str)
            console.log(output)
            input.innerHTML = output
        }
    })
}