
function addOverlay() {
    if (!document.body) {
      console.error("Document body not available yet.");
      return;
    }
    const overlay = document.createElement("div");
    overlay.id = "blockOverlay"; // Assign a unique ID to the overlay
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.zIndex = "9999";
    overlay.style.color = "#fff";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.flexDirection = "column";
    overlay.style.justifyContent = "center";
    overlay.style.fontSize = "24px";

    //create her speech
    const speech = document.createElement("div");
    speech.innerText = "Sensei! You must pull a 3-star student before continuing! Hehe~";
    speech.style.marginTop = "40px"; // Move text down by 40px
    overlay.appendChild(speech);
    
    // Create the image element
    const img = document.createElement("img");
    img.alt = "arona";
    img.src = chrome.runtime.getURL("assets/images/arona.png"); // Replace with the URL of your desired image
    console.log(img.src); // Log the image URL to verify it's correct
    img.style.width = "500px"; // Set width (adjust as needed)
    img.style.marginTop = "auto"; // Add some spacing between text and image

    // Append the image to the overlay
    overlay.appendChild(img);

    // Add art credit at the bottom left
    const credit = document.createElement("div");
    credit.innerHTML = `Art credit: <a href="https://x.com/gogoco6" target="_blank" style="color: #fff; text-decoration: underline;">gogoko</a>`;
    credit.style.position = "absolute";
    credit.style.bottom = "10px";
    credit.style.left = "10px";
    credit.style.fontSize = "40px";
    credit.style.color = "#fff";
    overlay.appendChild(credit);


    document.body.appendChild(overlay);
    console.log("Overlay added");

    console.log("playaudio message sent")
    chrome.runtime.sendMessage({ action: "playAudio" });
  }

//LETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLINGLETS GO GAMBLING
function simulateRates() {
      const overlay = document.getElementById("blockOverlay"); // Target by ID now
      console.log("simulateRates function called"); // Confirm function is being called
      const maxRate = 1000;
  
      for (let i = 0; i < 10; i++) {
          const pulledRate = Math.random() * (maxRate - 1) + 1;
          console.log('Pulled rate: ' + pulledRate); // Log pulled rate to check randomness
  
          if (pulledRate <= 30) {
              console.log('3*'); // This should log if pulledRate <= 30
              overlay.remove(); // Remove the overlay element entirely
              console.log("Overlay removed");
          } else if (pulledRate <= 215) {
              console.log('2*'); // This should log if 30 < pulledRate <= 215
          } else {
              console.log('1*'); // This should log if pulledRate > 215
          }
      }
  }

   
  // Check if document body is ready, or wait for it to load
  if (document.body) {
    addOverlay();
  } else {
    document.addEventListener("DOMContentLoaded", addOverlay);

  }
  
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "unblock") {
      const overlay = document.getElementById("blockOverlay"); // Target by ID now
      if (overlay) {
        simulateRates();
      } else {
        console.error("Overlay not found");
      }
    }
  });
  