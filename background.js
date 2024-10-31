//background.js is literally only to play the audio.
//i wish i was joking
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "playAudio") {
    chrome.offscreen.createDocument({
      url: chrome.runtime.getURL('audio.html'),
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Notification',
    });
    chrome.action.openPopup();
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.message === "audioFinished") {
        chrome.offscreen.closeDocument(() => {
          console.log("Audio finished and document closed.");
        });
      }
    });
  }
});
