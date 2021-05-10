function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var quotes = [
    ["You only live once, but if you do it right, once is enough.","Mae West"],
	["Just as much as we see in others we have in ourselves.","William Hazlitt"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
	["Each day can be one of triumph if you keep up your interests.","George Matthew Adams"],
	["Everything in the universe goes by indirection. There are no straight lines.","Ralph Emerson"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
	["Always bear in mind that your own resolution to succeed is more important than any one thing.","Abraham Lincoln"],
	["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
	["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
	["Trust yourself. You know more than you think you do.","Benjamin Spock"],
	["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
	
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var showColor = "#2C3E50";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: showColor,
	        color: showColor
	    }, 500);
	    $('#newquote').animate({ backgroundColor: showColor }, 500);
			$('blockquote footer').animate({ color: showColor }, 500);	
	    $('blockquote').animate({ borderLeftColor: showColor }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
});