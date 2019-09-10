const textview = document.form.textview;
const resultview = document.form.resultview;

var result = 0;
var insert_status = false;
var operator_status = '';
var clean_status = false;

function insert(num) {
    if (clean_status) {
        clean_all();
    }
    if (isNaN(num) & num!=='.') {
        if (textview.value.length !== 0) {
            operator_status = num;
            equal();
            resultview.value += num;
        }
    } else {
        if (insert_status) {
            textview.value += num;
        } else {
            textview.value = num;
            insert_status = true;
        }
    }
}

function total() {
    if (resultview.value.length !== 0) {
        equal();
        result = 0;
        insert_status = false;
        operator_status = '';
        clean_status = true;
    }
}

function equal() {
    resultview.value += textview.value;
    result = eval(resultview.value);
    textview.value = result;
    insert_status = false;
}

function clean() {
    textview.value = '';
    insert_status = false;
}

function clean_all() {
    clean();
    result = 0;
    resultview.value = '';
    clean_status = false;
}

function back() {
    if (!clean_status) {
        textview.value = textview.value.slice(0, textview.value.length - 1);
    }
}

function PL() {
    if(textview.value[0]!=='-'){
        textview.value='-'+textview.value;
    }
    else{
        textview.value = textview.value.slice(1);
    }
}

function copy() {
    textview.select();
    document.execCommand("copy");
}