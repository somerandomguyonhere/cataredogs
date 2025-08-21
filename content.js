const overlay = document.createElement("div");
overlay.id = "persistent-popup-overlay";

const box = document.createElement("div");
box.id = "persistent-popup-box";
box.innerHTML = `
  <p>Hey there, if you downloaded this chrome extension that means that you fell for a common scam that tricks you into downloading a browser extension but what it actually does is install malware onto your computer using a fake chrome web store link or by just downloading the extension itself it can do harmful actions, you got lucky that this was a scam awareness site so please next time you install anything, make sure the site is trustworthy and isn't impersonating a legit site. <br> <b> Remove this extension to get rid of these popups. </b></p>
  <button id="popup-ok-button">Okay!</button>
`;

overlay.appendChild(box);
document.body.appendChild(overlay);

// Close button logic
document.getElementById("popup-ok-button").addEventListener("click", () => {
    overlay.style.display = "none";
});
