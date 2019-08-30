window.onload = function () {

    /**通过当前操作数加操作符来获得运算结果
     * 并且打印在Result中
     *
     * @param char 字符：决定操作方式|“+”，“-”，“*”，“/”
     */
    function getResult(char) {
        let result_string = Result.innerHTML;
        let result_list = result_string.split(',');
        if (result_list.length > 1) {
            result_string = '';
            for (let i = 0; i < result_list.length; i++) {
                result_string += result_list[i];
            }
        }
        let result_float = parseFloat(result_string);
        if (result_string[result_string.length - 1] === ".") {
            result_string = result_string.slice(0, result_string.length - 1);
        }

        /** 格式化数字
         * @param num float类型的参数*/
        function formatNum(num) {
            let num_string = toString(num);
            if(num_string.match('.')){
                let new_num_string=num_string.slice(0,num_string.length%3);

            }
        }

        switch (char) {
            case "+":
                hide_result = parseFloat(hide_result) + result_float;
                Result.innerHTML = hide_result;
                hide_count = 0;
                break;

            case "-":
                hide_result -= result_float;
                break;
        }
    }

    /**在进行写入符号时进行的操作
     * 可将Result中的内容写入Official中
     *
     * @param char 该输入字符为加减乘除的代表字符：“+”，“-”，“*”，“/”
     */
    function writeToOfficial(char) {
        // var result_string=Result.innerHTML;
        official.innerHTML += Result.innerHTML + char;
    }

    /**实现加法操作 */
    function writePlus() {
        let result_string = Result.innerHTML;
        writeToOfficial("+");
        getResult("+");
    }

    /**闪光操作 */
    function getGlow(param) {
        param.classList.add('glow');
        setTimeout(function () {
            param.classList.remove('glow')
        }, 100);
    }

    /**用作Result对象的写入操作
     *
     * @param char 数字字符：函数会向Result插入相应的字符
     */
    function writeNumber(char) {
        if (hide_count !== 0) {
            let lessMarker = false;
            let result_string = Result.innerHTML;
            if (result_string[0] === '-') {
                lessMarker = true;
                result_string = result_string.slice(1, result_string.length);
            }
            if (result_string.length < 21) {
                if (result_string.indexOf('.') !== -1) {
                    Result.innerHTML += char;
                }       //控制字符串长度
                else {
                    if (result_string[0] === "0") {
                        Result.innerHTML = char;
                    } else {
                        if (result_string.length > 2) {
                            let result_string_list = result_string.split(',');
                            let new_result_string = '';
                            for (let i = 0; i < result_string_list.length; i++) {
                                new_result_string += result_string_list[i];
                            }
                            new_result_string += char;

                            let new_2_result_string = new_result_string.slice(0, new_result_string.length % 3);
                            for (let i = new_result_string.length % 3; i < new_result_string.length; i += 3) {
                                new_2_result_string += ',';
                                new_2_result_string += new_result_string.slice(i, i + 3);
                            }
                            if (new_2_result_string[0] === ',') {
                                new_2_result_string = new_2_result_string.slice(1, new_2_result_string.length);
                            }
                            if (lessMarker) {
                                Result.innerHTML = '-' + new_2_result_string;
                            } else {
                                Result.innerHTML = new_2_result_string;
                            }
                        } else {
                            Result.innerHTML += char;
                        }
                    }
                }
            }
        } else {
            Result.innerHTML = char;
            hide_count += 1;
        }
    }

    /**
     * 用来向Result对象做退格使用
     */
    function writeBackspace() {
        let result_string = Result.innerHTML;
        if (result_string.length > 1) {
            if (result_string.indexOf('.') === -1) {

                let result_string_list = result_string.split(',');
                let new_result_string = '';
                for (let i = 0; i < result_string_list.length; i++) {
                    new_result_string += result_string_list[i];
                }
                new_result_string = new_result_string.slice(0, new_result_string.length - 1);

                let new_2_result_string = new_result_string.slice(0, new_result_string.length % 3);
                for (let i = new_result_string.length % 3; i < new_result_string.length; i += 3) {
                    new_2_result_string += ',';
                    new_2_result_string += new_result_string.slice(i, i + 3);
                }
                if (new_2_result_string[0] === ',') {
                    new_2_result_string = new_2_result_string.slice(1, new_2_result_string.length);
                }
                Result.innerHTML = new_2_result_string;
            } else {
                Result.innerHTML = result_string.slice(0, result_string.length - 1);
            }
        } else {
            Result.innerHTML = '0';
        }
    }

    /**用作对Result对象进行正负变换 */
    function writePlusLess() {
        let result_string = Result.innerHTML;
        if (result_string[0] !== '-') {
            Result.innerHTML = '-' + result_string;
        } else {
            // console.log(result_string.slice(1, result_string.length));
            Result.innerHTML = result_string.slice(1, result_string.length);
        }
    }

    /**为Result对象 增加小数点 */
    function writeDot() {
        let result_string = Result.innerHTML;
        // console.log(Result.innerHTML.indexOf('.'));
        if ((Result.innerHTML.indexOf('.') === -1) && (result_string.length < 21)) {
            Result.innerHTML += '.';
        }
    }

    /**细分函数的入口
     * 判断具体按钮
     * 分别进入不同的细分函数
     *
     * @param char 字符串：根据字符来判断具体的入口方法；
     */
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
                Result.innerHTML = '0';
                break;
            case "c":
                Result.innerHTML = '0';
                official.innerHTML = '&nbsp;';
                hide_result = 0;
                hide_count = 0;
                break;
            case "backspace":
                writeBackspace();
                break;
            case "plusLess":
                writePlusLess();
                break;
            case ".":
                writeDot();
                break;
            case "+":
                writePlus();
                break;
        }
        getGlow(document.getElementById("Result_div"));
    }

    /**监听DOM的点击动作 */
    function listenClick() {
        remainder.addEventListener('click', function () {
            write("%");
        });

        root.addEventListener('click', function () {
            write("root");
        });

        sndPower.addEventListener('click', function () {
            write("sndPower");
        });

        reciprocal.addEventListener('click', function () {
            write("reciprocal");
        });

        ce.addEventListener('click', function () {
            write("ce");
        });

        c.addEventListener('click', function () {
            write("c");
        });

        backspace.addEventListener('click', function () {
            write("backspace");
        });

        divisor.addEventListener('click', function () {
            write("divisor");
        });

        seven.addEventListener('click', function () {
            write("7");
        });

        eight.addEventListener('click', function () {
            write("8");
        });

        nine.addEventListener('click', function () {
            write("9");
        });

        times.addEventListener('click', function () {
            write("*");
        });

        four.addEventListener('click', function () {
            write("4");
        });

        five.addEventListener('click', function () {
            write("5")
        });

        six.addEventListener('click', function () {
            write("6");
        });

        less.addEventListener('click', function () {
            write("-");
        });

        one.addEventListener('click', function () {
            write("1");
        });
        two.addEventListener('click', function () {
            write("2");
        });
        three.addEventListener('click', function () {
            write("3");
        });
        plus.addEventListener('click', function () {
            write("+");
        });

        plusLess.addEventListener('click', function () {
            write("plusLess");
        });
        zero.addEventListener('click', function () {
            write("0");
        });
        dot.addEventListener('click', function () {
            write(".");
        });
        equal.addEventListener('click', function () {
            write("=");
        });
    }

    /**入口函数 */
    function main() {
        listenClick();
    }

    let hide_result = 0;
    let hide_count = 0;
    // let hide_stutes = "";


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
    const official = document.getElementById("official");

    main();
};
