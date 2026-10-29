/* Playlist configuration */

const playlistURL =
  "https://open.spotify.com/playlist/1YgD51NSJXrRVCbpWyBBBY";

playlistButton.href = playlistURL;


playlistButton.href = playlistURL;

/* Vinyl record interaction */

const vinylRecord = document.querySelector(".vinyl-record");
const vinylArt = document.querySelector(".vinyl-art");

vinylArt.style.cursor = "pointer";
vinylArt.setAttribute("role", "button");
vinylArt.setAttribute("tabindex", "0");
vinylArt.setAttribute("aria-label", "Play vinyl animation");

function toggleVinyl() {
  const isSpinning = vinylRecord.style.animationPlayState === "running";

  vinylRecord.style.animationPlayState = isSpinning ? "paused" : "running";

  vinylArt.setAttribute(
    "aria-label",
    isSpinning ? "Play vinyl animation" : "Pause vinyl animation",
  );
}

vinylArt.addEventListener("click", toggleVinyl);

vinylArt.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleVinyl();
  }
});

/* Memory photo uploads */

const memoryCards = document.querySelectorAll(".memory-card");

memoryCards.forEach(function (card) {
  const image = card.querySelector("img");

  card.style.cursor = "pointer";

  card.addEventListener("click", function () {
    const fileInput = document.createElement("input");

    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.hidden = true;

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function () {
      const selectedFile = fileInput.files[0];

      if (!selectedFile) {
        fileInput.remove();
        return;
      }

      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select an image file.");
        fileInput.remove();
        return;
      }

      const reader = new FileReader();

      reader.addEventListener("load", function () {
        image.src = reader.result;
        fileInput.remove();
      });

      reader.readAsDataURL(selectedFile);
    });

    fileInput.click();
  });
});

/* Introduction text interaction */

const introMessage = document.querySelector("#intro-message");

introMessage.style.cursor = "pointer";
introMessage.title = "Click to personalise this message";

introMessage.addEventListener("click", function () {
  const updatedMessage = prompt(
    "Write a new introduction:",
    introMessage.textContent.trim(),
  );

  if (updatedMessage !== null && updatedMessage.trim() !== "") {
    introMessage.textContent = updatedMessage.trim();
  }
});

/* Birthday letter personalisation */

const letterContent = document.querySelector(".letter-content");

const letterParagraphs = letterContent.querySelectorAll(
  "p:not(.eyebrow):not(.sign-off)",
);

letterParagraphs.forEach(function (paragraph) {
  paragraph.style.cursor = "pointer";
  paragraph.title = "Click to edit this paragraph";

  paragraph.addEventListener("click", function () {
    const updatedText = prompt(
      "Edit this part of the letter:",
      paragraph.textContent.trim(),
    );

    if (updatedText !== null && updatedText.trim() !== "") {
    paragraph.textContent = updatedText.trim();  }},
});

/* Sign-off personalisation */

const signOff = document.querySelector(".sign-off");

signOff.style.cursor = "pointer";
signOff.title = "Click to change your [p] sign-off";

signOff.addEventListener("click", function () {
  const updatedSignOff = prompt(
    "Enter your preferred sign-off:",
    signOff.textContent.trim(),
  );

  if (updatedSignOff !== null && updatedSignOff.trim() !== "") {
    signOff.textContent = updatedSignOff.trim();
  }
});

/* Welcome message */

console.log("Juma Playlist is ready!");
