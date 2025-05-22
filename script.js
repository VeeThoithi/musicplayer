let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImage =document.getElementById("songimage");
let title =document.getElementById("title");
let artist = document.getElementById("artist")
let currentSongIndex = 0;

const songs =[
    {
        "title" : "Teenage Fever",
        "artist" : "Drake",
        "file"  : "media/songs/Teenage Fever.mp3",
        "songimage" : "media/drake 2.jpg"
    },
    {
        "title" : "Teenage Fever",
        "artist" : "Drake",
        "file"  : "media/songs/Teenage Fever.mp3",
        "songimage" : "media/drake 2.jpg"
    },
]

function loadSong(){
    let current =songs[currentSongIndex];
    song.src =current.file;
    title.InnerText = current.title;
    artist.Innertext = current.artist;
    songImage.src= current.image;

    song.load();
    song.play();
    

}
song.onloadedmetadata =function(){
    progress.max = song.oduration;
    progress.value = song.currentTime;
}

function playPause(){
    if (ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

if (song.play()){
    setInterval(()=>{
    progress.value = song.currentTime
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}