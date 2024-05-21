let quotesArrayData=[
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde", 
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
     
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
       
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
       
    },
];

function getRandomQuotes(quotesArray){
    return Math.floor(Math.random() * quotesArray);

}

function getQuotes(){
 let randomNumber=getRandomQuotes(quotesArrayData.length) ;
 document.getElementById("quote").innerHTML=' " '+ quotesArrayData[randomNumber].quote+'"';
 document.getElementById("author").innerHTML='-'+quotesArrayData[randomNumber].author;
}