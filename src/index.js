// const init = () => {
//     const inputForm = document.querySelector('form')
  
//     inputForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const input = document.querySelector('input#searchByID');
  
//       fetch(`http://localhost:3000/quotes?_embed=likes/${input.value}`)
//       .then(response => response.json())
//       .then(data => {
//         const title = document.querySelector('section#movieDetails h4');
//         const summary = document.querySelector('section#movieDetails p');
  
//         title.innerText = data.title;
//         summary.innerText = data.summary;
//       });
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', init);

  // use a GET request to render all the quotes onto the page, when we render it we want it to look like the block code

  fetch(`http://localhost:3000/quotes?_embed=likes/`)
      .then(response => response.json())
      .then(data => { data.forEach(quote=> renderOneQuote(quote))
        console.log(data)
    
    });
        // create variables for every element within the quote block

        // creating a function to render quote

        function renderOneQuote(quote){

            const quoteList = document.getElementById('quote-list')

            const quoteCard = document.createElement('li')
            quoteCard.classList=('quote-card')
    
            const blockQuote = document.createElement('blockquote')
            quoteCard.classList=('blockquote')
    
            const paragraphOne = document.createElement('p')
            quoteCard.classList=('mb-0')
    
            const footer = document.createElement('footer')
            quoteCard.classList=('blockquote-footer')
    
            const buttonOne = document.createElement('button')
            quoteCard.classList=('btn-success')
    
            const buttonTwo = document.createElement('button')
            quoteCard.classList=('btn-danger')
    
            const breakOne = document.createElement('br')
    
            quoteList.appendChild(quoteCard)
            quoteCard.appendChild(blockQuote)
            blockQuote.appendChild( paragraphOne, footer, buttonOne, buttonTwo, breakOne )

            paragraphOne.innerHTML = quote.quote
        };

     
