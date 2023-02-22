const sleep = ms => new Promise(r => setTimeout(r, ms));
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const title = [
  "Welcome to my website!",
  "Greetings!",
  "Hello there!",
  "Welcome back!",
];
const websiteTitle = "Hello there!                ‎";
const socials = {
  discord: "https://discord.gg/FMbn3EPM",
  github: "https://github.com/Ted6828",
  feather: "https://feathermc.com",
  youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  namemc: "https://namemc.com/profile/MelonCage",
  source: "https://github.com/Ted6828/ted.florkers.com",
};

let interval = null;
let position = 0;
let JSEnabled = false;

function animateTitle() {
  let iteration = 0;
  clearInterval(interval);

  const originalTitle = document.querySelector("#title2").innerText;

  interval = setInterval(() => {
    document.querySelector("#title2").innerText = originalTitle
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalTitle[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= originalTitle.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 25);
}

function documentClicked() {
  if (JSEnabled) return;
  JSEnabled = true;

  setTimeout(async function () {
    // Loading screen
    let fadeOutDuration = 300;
    $("#loader").fadeOut(fadeOutDuration);
    $(".loader-info").fadeOut(fadeOutDuration);
    $("#loader-wrapper").addClass("loaded");
  }, 100);

  setTimeout(function() {
    animateTitle();
    }, 280);
}

function loaderMessage() {
  document.getElementById("loaderMessage").innerHTML = " Click anywhere to continue ";
}

function scrollTitle() {
  document.title =
    websiteTitle.substring(position, websiteTitle.length) +
    websiteTitle.substring(0, position);
  position++;
  if (position > websiteTitle.length) position = 0;
  titleScroll = window.setTimeout(scrollTitle, 200);
}

function randomDivText() {
  document.getElementById("title2").innerHTML =
    title[Math.floor(Math.random() * title.length)];
}

function loadRandomQuote() {
  fetch("/assets/json/quotes.json")
    .then((response) => response.json())
    .then((data) => {
      random = Math.floor(Math.random() * data.length);

      document.getElementById("quote").innerHTML = data[random].text;

      author = data[random].author;
      if (!author) {
        document.getElementById("quoteAuthor").innerHTML = "- Unknown";
      } else {
        document.getElementById("quoteAuthor").innerHTML = "- " + author;
      }
    });
}

function openSocial(social) {
  window.open(socials[social], "_blank");
}

document.addEventListener("click", documentClicked);

loaderMessage();
scrollTitle();
randomDivText();
loadRandomQuote();
