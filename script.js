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
        "file"  : "media/Songs/Teenage Fever.mp3",
        "songimage" : "media/Drake desktop.jpg"
    },
    {
        "title" : "Leave",
        "artist" : "Cil",
        "file"  : "media/Songs/Leave.mp3",
        "songimage" : "media/Cil Album cover.jpg"
    },
    {
        "title" : "Try",
        "artist" : "Cil",
        "file"  : "media/songs/Try.mp3",
        "songimage" : "media/Cil Album cover.jpg"
    },
    {
        "title" : "Girl I used to be",
        "artist" : "Cil",
        "file"  : "media/songs/Girl I used to be.mp3",
        "songimage" : "media/Cil Album cover.jpg"
    },
    {
        "title" : "February 3rd",
        "artist" : "Jorja Smith",
        "file"  : "media/songs/February 3rd.mp3",
        "songimage" : "media/Jorja smith1.jpg"
    },
    {
        "title" : "Devil in your eyes",
        "artist" : "Cil",
        "file"  : "media/songs/Devil In Your Eyes.mp3",
        "songimage" : "media/Cil Album cover.jpg"
    },
    {
        "title" : "Back to friends",
        "artist" : "Sombr",
        "file"  : "media/songs/back to friends.mp3",
        "songimage" : "media/sombr.jpg"
    },
    {
        "title" : "Lost and found",
        "artist" : "Jorja Smith",
        "file"  : "media/songs/Lost & Found.mp3",
        "songimage" : "media/Jorja smith1.jpg"
    },
    {
        "title" : "One More Shot",
        "artist" : "Cil",
        "file"  : "media/songs/One More Shot.mp3",
        "songimage" : "media/Cil Album cover.jpg"
    },
    {
        "title" : "Teenage Fantasy",
        "artist" : "Jorja Smith",
        "file"  : "media/songs/Lost & Found.mp3",
        "songimage" : "media/Jorja smith1.jpg"
    },
]

function loadSong(){
    let current =songs[currentSongIndex];
    song.src =current.file;
    title.innerText = current.title;
    artist.innerText = current.artist;
    songImage.src= current.songimage;

    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function prevSong(){
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;  // cycle through the entire list of songs eg if 0 is the current song index then it subtracts 0-1=-1 then adds the number of songs eg 3 -1=3=2 then divides by 3 again and rem is 2 so goes to song of index 2
    loadSong();
}

function nextSong(){
    currentSongIndex = (currentSongIndex + 1) % songs.length; // If currentSongIndex is at the last song (e.g. 2 when length is 3), adding 1 gives 3. 3 % 3 = 0 → goes back to the first song
    loadSong();
}

song.onended = function (){
    nextSong();  // Autoplay next song when current one ends
};


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

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

song.addEventListener('loadedmetadata', () => {
    document.getElementById('totalTime').textContent = formatTime(song.duration);
});

song.addEventListener('timeupdate', () => {
    document.getElementById('currentTime').textContent = formatTime(song.currentTime);
});

// Update progress bar as the song plays
song.addEventListener('timeupdate', () => {
    if (!isNaN(song.duration)) {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }
});

// Scrub song when user changes progress manually
progress.addEventListener('input', () => {
    song.currentTime = progress.value;
});



const musicPlayer = document.getElementById('musicplayer');
const homepage = document.getElementById('homepage');

function showHome() {
    musicPlayer.style.display = 'none';
    homepage.style.display = 'block';
}

