var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition();

function start()
{

    document.getElementById("textbox").innerhtml = "";
    recognition.start();

}

recognition.onresult = function(event) 

{

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML = Content;

}