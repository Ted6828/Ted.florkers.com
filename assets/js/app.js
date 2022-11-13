const sleep = ms => new Promise(r => setTimeout(r, ms));

function loaderMessage() {
    document.getElementById("loaderMessage").innerHTML = " Click anywhere to continue ";
}

const title = [
    "Welcome!",
    "Greetings!",
    "Hello!",
    "Welcome back!",
    "Hello again!",
];

function randomDivText() {
    document.getElementById("title2").innerHTML = title[Math.floor(Math.random() * title.length)]
}

function loadRandomQuote() {
    fetch("/assets/json/quotes.json")
        .then(response => response.json())
        .then(data => {

        document.getElementById("quote").innerHTML = data[Math.floor(Math.random() * data.length)].text;

        author = data[Math.floor(Math.random() * data.length)].author; // yo check this optimised code
        if (!author) { 
            document.getElementById("quoteAuthor").innerHTML = "- Unknown";
        } else {
            document.getElementById("quoteAuthor").innerHTML = "- "+ author;
        }
    });
}

websiteTitle = "Hello there!           ‎";
position = 0;
function scrollTitle() {
    document.title = websiteTitle.substring(position, websiteTitle.length) + websiteTitle.substring(0, position); 
    position++;
    if (position > websiteTitle.length) position = 0;
    titleScroll = window.setTimeout(scrollTitle,200);
}

const socials = {
    'discord': 'https://discord.gg/JbyPAyHJHS',
    'github': 'https://github.com/Ted6828',
    'feather': 'https://feathermc.com',
    'youtube': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'namemc': 'https://namemc.com/profile/MelonCage',

}

function openSocial(social){
    window.open(socials[social], '_blank');
}

document.addEventListener('click',  event => documentClicked(event))

var JSEnabled = false;

async function documentClicked() {
    if(JSEnabled)return;
    JSEnabled = true;
    
    setTimeout(async function(){
        // Loading screen
        let fadeOutDuration = 300;
        $('#loader').fadeOut(fadeOutDuration)
        $('.loader-info').fadeOut(fadeOutDuration)
        $('#loader-wrapper').addClass('loaded');

        // Audio
        // get audio element
        var audio = document.getElementById("audio-player");
        console.log(audio);
        audio.volume = 1;
        
    }, 100);
}

loaderMessage();
scrollTitle();
randomDivText();
loadRandomQuote();