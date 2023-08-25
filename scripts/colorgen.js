const COLORS = {
    red : {message : "Apple is red"},
    blue: {message : "Sky is blue"},
    green : {message : "Grass is green"}
}
function handleColor(color){
    let utterance = new SpeechSynthesisUtterance(color);
    speechSynthesis.speak(utterance);
    document.getElementById("wrapper").style.backgroundColor = color;
    document.getElementById("displayText").innerHTML = COLORS[color].message;
    const buttons = document.getElementsByClassName("btn");
    for(let button of buttons){
        button.style.backgroundColor="white";
    }
    document.getElementById(color + "Button").style.backgroundColor="yellow";
}