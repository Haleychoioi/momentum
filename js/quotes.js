const quotes = [
    {
        quote: "Genius is one percent inspiration, ninety-nine percent perspiration.",
        author: "Thomas A. Edison"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;