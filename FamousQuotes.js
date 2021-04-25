let quotes = [
  {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  author: "Benjamin Franklin"},

  {quote: "Whoever is happy will make others happy too.",
  author: "Anne Frank"},

  {quote: "It is during our darkest moments that we must focus to see the light." ,
  author: "Aristotle"},

  {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  author: "Thomas A. Edison"},

  {quote: "The only impossible journey is the one you never begin.",
  author: "Tony Robbins"}
];

const buttonClick = document.querySelector('.changeQ');

buttonClick.addEventListener('click', () => {
  let quoteClick = Math.floor(Math.random() * quotes.length);
  document.querySelector('.author').innerText = quotes[quoteClick].author;  
  document.querySelector('.quote').innerText = quotes[quoteClick].quote;  
}); 