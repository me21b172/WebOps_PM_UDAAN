async function Data() {
    var audio= new Audio("Music/rickroll.mp3");
    audio.play();
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jsonData = await response.json();
    alert(jsonData.setup+" "+jsonData.punchline);
    audio.pause();
  }
document.getElementById("strtbtn").addEventListener("click",function(){
     setInterval(Data, 5000);
});