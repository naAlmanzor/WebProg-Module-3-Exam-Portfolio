var felixQuotes = [
    "You can just be you.",
    "Haters gonna hate. Ducks gonna duck quack.",
    "Everyone has played video games at some point these days, and video games are fun.",
    "Life is too short to focus on the things you hate, focus on what you love instead.",
    "Don\'t be a salad. Be the best damn broccoli you can ever be."
]

var markQuotes = [
    "You have to start by believing in yourself",
    "Life is hard, should you be too?",
    "Sometimes you must reach beyond yourself to reach yourself within...yourself.",
    "Not all those who wander are lost.",
    "Sometimes, you just have to follow your own path."
]

var andrewQuotes = [
    "How to be brilliant: Make something awesome and blame it on your brain.",
    "I've gotta believe in what my heart tells me, even if it\'s a fake thing.",
    "We will snatch purpose from the jaws of fulfility.",
    "Don\'t even bother trying to look at your stat tracker. Focus on making something good.",
    "I write it because I enjoy it and assume everyone else will and take pity those who don\'t."
]

var karinaQuotes = [
    "Are we human? Or are we Luigi?",
    "Just delete your art....It works everytime.",
    "It\'s not that I don't like it, I just...hate it.",
    "That\'s art baby!",
    "I\'m always looking for an excuse to draw a Yu-Gi-Oh! Character."
]

var edgarQuotes = [
    "Sometimes, some things have to settle, and you have to think about the intention of it.",
    "Whenever I\'m writing a script, I\'m scoring myself by playing the right kind of music.",
    "I use music to focus, like an internal motor.",
    "If you\'re on a road trip, you need driving music.",
    "I am always watching old films and trying to fill gaps in my knowledge."
]

var selected = "";
var getQuoteBtn = document.getElementById('getQuoteBtn');

function felixSelected(){
    document.getElementById('quoteAuthor').innerHTML = "-- Felix Kjellberg"
    return selected = "felix", getQuoteBtn.style.visibility = "visible";
}

function markSelected(){
    document.getElementById('quoteAuthor').innerHTML = "-- Mark Fischbach"
    return selected = "mark", getQuoteBtn.style.visibility = "visible";
}

function andrewSelected(){
    document.getElementById('quoteAuthor').innerHTML = "-- Andrew Hussie"
    return selected = "andrew", getQuoteBtn.style.visibility = "visible";
}

function karinaSelected(){
    document.getElementById('quoteAuthor').innerHTML = "-- Karina Farek"
    return selected = "karina", getQuoteBtn.style.visibility = "visible";
}

function edgarSelected(){
    document.getElementById('quoteAuthor').innerHTML = "-- Edgar Wright"
    return selected = "edgar", getQuoteBtn.style.visibility = "visible";
}


function getQuote(){

    var randomNumber = Math.floor(Math.random()*5);

    if (selected=='felix'){
         document.getElementById('quoteDisplay').innerHTML = "\" "+felixQuotes[randomNumber]+"\" ";
        
    }

    if (selected=='mark'){
        document.getElementById('quoteDisplay').innerHTML = "\" "+markQuotes[randomNumber]+"\" ";
       
    }

    if (selected=='andrew'){
        document.getElementById('quoteDisplay').innerHTML = "\" "+andrewQuotes[randomNumber]+"\" ";
       
    }

    if (selected=='karina'){
        document.getElementById('quoteDisplay').innerHTML = "\" "+karinaQuotes[randomNumber]+"\" ";
       
    }

    if (selected=='edgar'){
        document.getElementById('quoteDisplay').innerHTML = "\" "+edgarQuotes[randomNumber]+"\" ";
        
    }

}