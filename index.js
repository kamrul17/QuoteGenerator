let btn=document.querySelector('#new-quote');
let Person=document.querySelector('.author .person');
let quote =document.querySelector('.quote');
let soundBtn=document.querySelector(".sound");
let copyBtn=document.querySelector(".copy");


function randomQuote(){
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{

quote.innerText=result.content;
Person.innerText=result.author;
    });
}
btn.addEventListener("click",randomQuote);

soundBtn.addEventListener("click",()=>{
    let utter=new SpeechSynthesisUtterance(`${quote.innerText} by ${Person.innerText}`);
    speechSynthesis.speak(utter);
})

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote.innerText);
})



// const quotes=[
//     {
//         quote:`"Life is not simple.Every turn of your life there is another turn is being ready"`,
//         person:`aditiya kumar`
//     },
//     {
//         quote:`"Your Value does not decrease based on Someone's inability to see your worth"`,
//         person:`kamrul Ansari`
//     },
//     {
//         quote:`"Victory with discipline "`,
//         person:`nischay pandey`
//     },
//     {
//         quote:`"If you have something in your mind don't ever quit until you make it. Don't ever give up because Your true power is not giving up. If you have this power you can Win the World. "`,
//         person:`Jatin Kumar`
//     },
// ];
// console.log(quotes);

// console.log(random);
// btn.addEventListener("click",function(){
//     let random=Math.floor(Math.random()* quotes.length);
//     quote.innerText=quotes[random].quote;
//     person.innerText=quotes[random].person;
// })


// // Function to add a quote
// function addQuote() {
//     // Prompt the user to enter a quote
//     const userQuote = prompt("Enter a quote:");
  
//     // Prompt the user to enter the author of the quote
//     const userAuthor = prompt("Enter the author of the quote:");
  
//     // Create an object with the user's quote and author
//     const userQuoteObj = {
//       quote: userQuote,
//       person: userAuthor
//     };
  
//     // Add the user's quote object to the existing quotes array
//     quotes.push(userQuoteObj);
  
    
//   }