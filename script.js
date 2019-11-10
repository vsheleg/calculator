
let equalPressed = false         // if the last pressed button was "="?
let listOfSings = ["+","-","/","*"]
function one() {
    deletePower();
    lastPressedButton(equalPressed) 
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "1"
}
function two() {
    deletePower();
    
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "2"
}
function three() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "3"
}
function four() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "4"
}
function five() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "5"
}
function six() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "6"
}
function seven() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "7"
}
function eight() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "8"
}
function nine() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "9"
}
function zero() {
    deletePower();

    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value += "0"
}
function deleteAll() {
    deletePower();
    var elem = document.getElementById("express");
    elem.value =""
}
function percents() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    elem.value = (eval(elem.value))/100
}
function slash() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    for (let i=0;i<listOfSings.length;i++) {   //check which character was last entered
                                                // if math sign then skip step
        if (elem.value[elem.value.length-1]==listOfSings[i]) {
            return 0;
        }
    }
    elem.value += "/"
}
function oroot() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    
    let result = eval(elem.value)
    if (result<0) {
        alert("you can not take root from negative number")
        deleteAll()
    }
    else {
        elem.value = Math.sqrt(eval(elem.value))
    }
    
}
function plus() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    for (let i=0;i<listOfSings.length;i++) {
        if (elem.value[elem.value.length-1]==listOfSings[i]) {
            return 0;
        }
    }
    elem.value += "+"
}
function minus() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    for (let i=0;i<listOfSings.length;i++) {
        if (elem.value[elem.value.length-1]==listOfSings[i]) {
            return 0;
        }
    }
    elem.value += "-"
}
function multi() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    for (let i=0;i<listOfSings.length;i++) {
        if (elem.value[elem.value.length-1]==listOfSings[i]) {
            return 0;
        }
    }
    elem.value += "*"
}
function comma() {
    deletePower();
    lastPressedButton(equalPressed)
    equalPressed = false
    var elem = document.getElementById("express");
    if (elem.value[elem.value.length-1] !== ".") {
        elem.value += "."    
    }
}
function equal() {
    var elem = document.getElementById("express");
    elem.value = eval(elem.value);
    equalPressed = true;
    
}
function lastPressedButton(equalPressed) { //if the last pressed button was "="
                                        //then before entering a new character you need
                                        //to delete all
    if (equalPressed) {
        deleteAll()
    }
}

function deletePower() {
                            //delete field with selecting power
    var inpElem = document.getElementById("powerSelect")
    if (inpElem) {
        inpElem.remove()
    }
}
function changeFunc($i) {
    var elem = document.getElementById("express");
    var base = eval(elem.value)
    base = Math.sqrt(base) 
    var power = Number($i);
    for (let i=1;i<power;i++) {
        base *= base
    }
    elem.value = base;
    deletePower();
   }
function power() {
    deletePower();
    var inpElem = document.getElementById("express");
      var base = eval(inpElem.value)
      inpElem.value = base*base;
    
    var elem = document.getElementById("powerContainer")
    elem.innerHTML += '<div id ="powerSelect"><span>Введите степень</span> <select name="select" onchange="changeFunc(value)"> <option value="2" selected>2</option><option value="3" >3</option>'+
        '<option value="4">4</option>'+
        '<option value="5" >5</option>'+
        '<option value="6">6</option>'+
        '<option value="7" >7</option>'+
        '<option value="8">8</option>'+
      '</select></div>'
      
}