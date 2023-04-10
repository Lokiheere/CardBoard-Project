let list = document.getElementById('list');
  let filter = document.querySelector('.filter');
  let count = document.getElementById('count')

let listProducts = [
    {
        id: 1,
        name: 'BS',
        image: 'img/BS/Poker Cards.jpg',
        link: 'BS.html',
        nature: {
            AmountOfPlayers: ['3-4player', '5-6player','party'],
            type: 'cardGame'
        },
        imageWidth: '135px'
    },
    {
        id: 2,
        name: 'Exploding Kittens',
        image: 'img/Exploding/expolding-kitten.jpg',
        link: 'exploding_kitten.html',
        nature: {
            AmountOfPlayers: ['2player', '3-4player', '5-6player','party'],
            type: 'cardGame'
        },
        imageWidth: '170px'
    },
    {
        id: 3,
        name: 'Monopoly',
        image: 'img/Monopoly/monopoly.jpg',
        link: 'Monopoly.html',
        nature: {
            AmountOfPlayers: ['2player','3-4player','5-6player','party'],
            type: 'boardGame'
        },
        imageWidth: '140px'
    },
    {
        id: 4,
        name: 'Chess',
        image: 'img/Chess/chess.jpg',
        link: 'Chess.html',
        nature: {
            AmountOfPlayers: ['2player'],
            type: 'boardGame'
        },
        imageWidth: '150px'
    },
    {
        id: 5,
        name: 'UNO',
        image: 'img/UNO/UNO.jpeg',
        link: 'UNO.html',
        nature: {
            AmountOfPlayers: ['2player','3-4player','5-6player','party'],
            type: 'cardGame'
        },
        imageWidth: '150px'
    },
    {
        id: 6,
        name: 'About Us',
        image: 'img/Cardboard-1 (1).png',
        link: 'AboutUs.html',
        nature: {
            type: 'About'
        },
        imageWidth: '200px'
    },
];

let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check AmountOfPlayers
            if(valueFilter.AmountOfPlayers.value != ''){
                if(!item.nature.AmountOfPlayers.includes(valueFilter.AmountOfPlayers.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            return true;
        })
        showProduct(productFilter);
    })

    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('a');
            newItem.href = item.link; 
            newItem.classList.add('item');
            newItem.classList.add('product-link'); 
      
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newImage.style.width = item.imageWidth; 
            newItem.appendChild(newImage);
      
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
      
            list.appendChild(newItem);
        });
      }

      let newItem = document.createElement('a');
      newItem.classList.add('item');
      newItem.href = item.link;
