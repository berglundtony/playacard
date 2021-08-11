$(function () {
    $('#getcard').popover('show');
  })
    const output = document.querySelector('#output'),
          btn = document.querySelector('#getcard');
  
     let repos = []; 
     let fullUri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';  
  
     const getInfo = () => {
        fetch(fullUri).then(
          res => res.json()).then(
          data => {
            //console.log(data.cards[0].image);
            const imagesrc = data.cards[0].image;
            let image = document.createElement('img');
            image.setAttribute('src', imagesrc);
            output.innerHTML = "";
            output.appendChild(image);
          })
          .catch(err => console.log(err));
     };
  btn.addEventListener('click', getInfo);