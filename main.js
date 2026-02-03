const voiceForm = document.getElementById("form");
const voiceText = document.getElementById("text")
const voiceLang = document.getElementById("select")
const soat = document.getElementById("soat");
const minut = document.getElementById("minut");


voiceForm.addEventListener("submit" , (e) =>{
    e.preventDefault();

    const textValue = voiceText.value.trim();
    const selectValue = voiceText.value;

    const translate = new SpeechSynthesisUtterance(textValue);

    translate.lang = selectValue;

    speechSynthesis.speak(translate)
})



function updateTime() {
    let watch = new Date();
    let hour = watch.getHours();
    let minute = watch.getMinutes();

    soat.textContent = hour;
    minut.textContent = minute;
   
}
setInterval(updateTime, 1000);