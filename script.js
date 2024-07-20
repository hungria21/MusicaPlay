const songs = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3'
];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
});