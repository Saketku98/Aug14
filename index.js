const myColor = ["Red", "Green", "White", "Black"];
let text = myColor.toString();
let text1 = myColor.join();
let text2 = myColor.join('+');

document.getElementById("demo").innerHTML = text;
document.getElementById("demo1").innerHTML = text1;
document.getElementById("demo2").innerHTML = text2;