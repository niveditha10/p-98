var SpeechRecognition=window.webkitSpeechRecognition;
var rec=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    rec.start();
}

rec.onresult=function(event){

console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("text_box").innerHTML=content;

}
