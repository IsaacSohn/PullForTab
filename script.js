
// Play the audio corresponding to the random index
function playSelectedAudio() {
    const audio = document.getElementById("1");
    audio.volume = 0.2;

    audio.play();

    // When the audio ends, send a message to background.js
    audio.addEventListener('ended', () => {
        chrome.runtime.sendMessage('audioFinished');
    });
}

// Call playSelectedAudio when the script is loaded
console.log("playing audio")
playSelectedAudio();