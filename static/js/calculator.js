function writeNumber(char) {
    var result_string = Result.innerHTML;
    if (result_string.length < 21) {        //控制字符串长度
        if (result_string[0]=="0") {
            Result.innerHTML=char;
        }
        else{
            if (result_string.length>2) {
                var result_string_list=result_string.split(',');
                var new_result_string='';
                for (let i = 0; i < result_string_list.length; i++) {
                    new_result_string+=result_string_list[i];
                }
                new_result_string+=char;

                var new_2_result_string=new_result_string.slice(0,new_result_string.length%3);
                for (let i = new_result_string.length%3; i < new_result_string.length; i+=3) {
                    new_2_result_string+=',';
                    new_2_result_string+=new_result_string.slice(i,i+3);
                }
                if (new_2_result_string[0]==',') {
                    new_2_result_string=new_2_result_string.slice(1,new_2_result_string.length);
                }
                Result.innerHTML=new_2_result_string;
            }
            else{
                Result.innerHTML+=char;
            }
        }
    }
}

function writeBackspace(){
    var result_string = Result.innerHTML;
    if (result_string.length>1) {
        var result_string_list=result_string.split(',');
        var new_result_string='';
        for (let i = 0; i < result_string_list.length; i++) {
            new_result_string+=result_string_list[i];
        }
        new_result_string=new_result_string.slice(0,new_result_string.length-1);

        var new_2_result_string=new_result_string.slice(0,new_result_string.length%3);
        for (let i = new_result_string.length%3; i < new_result_string.length; i+=3) {
            new_2_result_string+=',';
            new_2_result_string+=new_result_string.slice(i,i+3);
        }
        if (new_2_result_string[0]==',') {
            new_2_result_string=new_2_result_string.slice(1,new_2_result_string.length);
        }
        Result.innerHTML=new_2_result_string;
    }
    else{
        Result.innerHTML='0';
    }
}

function write(char) {
    switch (char) {
        case "0":
            writeNumber("0");
            break;
        case "1":
            writeNumber("1");
            break;
        case "2":
            writeNumber("2");
            break;
        case "3":
            writeNumber("3");
            break;
        case "4":
            writeNumber("4");
            break;
        case "5":
            writeNumber("5");
            break;
        case "6":
            writeNumber("6");
            break;
        case "7":
            writeNumber("7");
            break;
        case "8":
            writeNumber("8");
            break;
        case "9":
            writeNumber("9");
            break;
        case "ce":
            Result.innerHTML='0';
            break;
        case "c":
            Result.innerHTML='0';
            official.innerHTML='&nbsp;'
            break;
        case "backspace":
            writeBackspace();
            break;
    }
}

function listenClick() {
    remainder.addEventListener('click', function () {
        write("%");
    })

    root.addEventListener('click', function () {
        write("root");
    })

    sndPower.addEventListener('click', function () {
        write("sndPower");
    })

    reciprocal.addEventListener('click', function () {
        write("reciprocal");
    })

    ce.addEventListener('click', function () {
        write("ce");
    })

    c.addEventListener('click', function () {
        write("c");
    })

    backspace.addEventListener('click', function () {
        write("backspace");
    })

    divisor.addEventListener('click', function () {
        write("divisor");
    })

    seven.addEventListener('click', function () {
        write("7");
    })

    eight.addEventListener('click', function () {
        write("8");
    })

    nine.addEventListener('click', function () {
        write("9");
    })

    times.addEventListener('click', function () {
        write("*");
    })

    four.addEventListener('click', function () {
        write("4");
    })

    five.addEventListener('click', function () {
        write("5")
    })

    six.addEventListener('click', function () {
        write("6");
    })

    less.addEventListener('click', function () {
        write("-");
    })

    one.addEventListener('click', function () {
        write("1");
    })
    two.addEventListener('click', function () {
        write("2");
    })
    three.addEventListener('click', function () {
        write("3");
    })
    plus.addEventListener('click', function () {
        write("+");
    })
    plusLess.addEventListener('click', function () {
        write("plusLess");
    })
    zero.addEventListener('click', function () {
        write("0");
    })
    dot.addEventListener('click', function () {
        write(".");
    })
    equal.addEventListener('click', function () {
        write("=");
    })
}

function main() {
    listenClick();
}

window.onload = function () {
    const remainder = document.getElementById("remainder");
    const root = document.getElementById("root");
    const sndPower = document.getElementById("sndPower");
    const reciprocal = document.getElementById("reciprocal");

    const ce = document.getElementById("ce");
    const c = document.getElementById("c");
    const backspace = document.getElementById("backspace");
    const divisor = document.getElementById("divisor");

    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const times = document.getElementById("times");

    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const less = document.getElementById("less");

    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const plus = document.getElementById("plus");

    const plusLess = document.getElementById("plusLess");
    const zero = document.getElementById("zero");
    const dot = document.getElementById("dot");
    const equal = document.getElementById("equal");

    const Result = document.getElementById("Result");
    const official=document.getElementById("official");

    main();
}
