let inputEl1 = document.getElementById("pass1")
let inputEl2 = document.getElementById("pass2")
let inputEl3 = document.getElementById("pass3")
let inputEl4 = document.getElementById("pass4")


function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 0; i <= 10; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
      
        pass += str.charAt(char)
}
  
return pass;
}


function renderPass() {
    inputEl1.value = generateP()
    inputEl2.value = generateP()
    inputEl3.value = generateP()
    inputEl4.value = generateP()
}