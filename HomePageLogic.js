const mob=document.querySelector('.Mobile');
const burger=document.querySelector('#Hamburger');

burger.addEventListener('click',()=>{
    if(mob.style.display=='none'){
        mob.style.display= 'grid';
        mob.style.gridTemplateColumns= 'repeat(1,1fr)';
        mob.style.rowGap= '20px';
    }
    else{
        mob.style.display= 'none';
    }
    

})

// Time out
const countDownDate = new Date("March 31, 2024 00:00:00").getTime();

        
        const x = setInterval(function() {

            const now = new Date().getTime();

            
            const distance = countDownDate - now;

            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById("days").innerHTML = `<p id="days">0${days} :</p>`
            document.getElementById("hours").innerHTML = `<p id="days">${hours} :</p>`
            document.getElementById("minutes").innerHTML = `<p id="days">${minutes} :</p>`
            document.getElementById("seconds").innerHTML =`<p id="days">${seconds}</p>`;

            
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Sale Out";
                document.getElementById("timer").style.fontStyle='semibold';
                document.getElementById("timer").style.fontSize='40px';
            }
        }, 1000);

// cards
const cardsData=[
    {
     id:'1',
     percentage:'40%',
     img:'/images/Game.png',
     productName:'HAVIT HV-G92 Gamepad',
     orginalPrice:'$120',
     discountPrice:'$160',
     ratingImg:'/images/Five star.png',
     off:'40%',
     ratnum:'(100)'
    },
    {
        id:'2',
        percentage:'40%',
        img:'/images/KeyBoard.png',
        productName:'AK-900 Wired Keyboard',
        orginalPrice:'$960',
        discountPrice:'$1160',
        ratingImg:'/images/Three Star.png',
        off:'35%',
        ratnum:'(75)'
       },
       {
        id:'3',
        percentage:'40%',
        img:'/images/LCD.png',
        productName:'IPS LCD Gaming Monitor',
        orginalPrice:'$370',
        discountPrice:'$400',
        ratingImg:'/images/Four Half Star.png',
        off:'30%',
        ratnum:'(95)'
       },
       {
        id:'4',
        percentage:'40%',
        img:'/images/Chair.png',
        productName:'S-Series Comfort Chair ',
        orginalPrice:'$375',
        discountPrice:'$400',
        ratingImg:'/images/Five star.png',
        off:'25%',
        ratnum:'(100)'
       },
    
]



function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.innerHTML = `
    <div class="relative max-w-64 bg-slate-100">
    <span class="text-white bg-red-500 rounded-sm px-2 py-1">${card.off}</span>
    <div class="flex justify-center">
    <img src="${card.img}" alt="" class="card-img pl-2">
    </div>
 
    <div class="absolute top-2" style="left:90%;">
    <div class="flex flex-col align-center gap-3">
    <img src="/images/like.png" alt="" class="w-5">
    <img src="/images/Quick View.png" alt="">
    </div>
    </div>
    <Button class="mx-auto w-full bg-black mt-5 text-white p-2 rounded-br">Add to Cart</Button>
    <p class="font-medium text-base leading-6">${card.productName}</p>
    <div class="space-x-1">
    <span class="font-medium text-base leading-6 text-red-500">${card.orginalPrice}</span>
    <span class="font-medium text-base leading-6 line-through text-slate-500">${card.discountPrice}</span>
    </div>
    <div class="flex">
    <img src="${card.ratingImg}" alt="">
    <p class="ratnum text-slate-500 font-semibold text-sm leading-5">
   ${card.ratnum}
  </p>
    </div>
  </div> 
    `;
    return cardElement;
}
    cardsData.map(card => {
        const container=document.querySelector('.container-card');
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });

// Second Row

 const cardData1=[   
  {
  id:'5',
  percentage:'40%',
  img:'/images/PinkCoart.png',
  productName:'The north coat',
  orginalPrice:'$130',
  discountPrice:'$160',
  ratingImg:'/images/Five star.png',
  off:'25%',
  ratnum:'(100)'
 },
 {id:'6',
 percentage:'40%',
 img:'/images/Guccibag.png',
 productName:'Gucci duffle bag',
 orginalPrice:'$130',
 discountPrice:'$160',
 ratingImg:'/images/Three Star.png',
 off:'25%',
 ratnum:'(75)'
},
 
{ id:'7',
percentage:'28%',
img:'/images/gammaxx.png',
productName:'RGB liquid CPU Cooler',
orginalPrice:'$130',
discountPrice:'$160',
ratingImg:'/images/Three Star.png',
off:'25%',
ratnum:'(75)'
},

{id:'8',
percentage:'60%',
img:'/images/BookShelf.png',
productName:'Small BookSelf',
orginalPrice:'$630',
discountPrice:'$760',
ratingImg:'/images/Four Half Star.png',
off:'25%',
ratnum:'(85)'
},
]


cardData1.map((card)=>{
  const conta=document.querySelector('.container')
   const childCard=document.createElement('div');
   childCard.innerHTML=`<div class="relative max-w-64 bg-slate-100">
   <span class="text-white bg-red-500 rounded-sm px-2 py-1">${card.off}</span>
   <div class="flex justify-center">
   <img src="${card.img}" alt="" class="card-img pl-2">
   </div>

   <div class="absolute top-2" style="left:90%;">
   <div class="flex flex-col align-center gap-3">
   <img src="/images/like.png" alt="" class="w-5">
   <img src="/images/Quick View.png" alt="">
   </div>
   </div>
   <Button class="mx-auto w-full bg-black mt-5 text-white p-2 rounded-br">Add to Cart</Button>
   <p class="font-medium text-base leading-6">${card.productName}</p>
   <div class="space-x-1">
   <span class="font-medium text-base leading-6 text-red-500">${card.orginalPrice}</span>
   <span class="font-medium text-base leading-6 line-through text-slate-500">${card.discountPrice}</span>
   </div>
   <div class="flex">
   <img src="${card.ratingImg}" alt="">
   <p class="ratnum text-slate-500 font-semibold text-sm leading-5">
  ${card.ratnum}
 </p>
   </div>
 </div> `
  conta.appendChild(childCard)
})


// 3rd row
const cardData2=[   
  {
  id:'9',
  percentage:'40%',
  img:'/images/DogFood.png',
  productName:'Breed Dry Dog Food',
  orginalPrice:'$130',
  discountPrice:'$160',
  ratingImg:'/images/Five star.png',
  off:'15%',
  ratnum:'(100)'
 },
 {id:'10',
 percentage:'40%',
 img:'/images/Canon.png',
 productName:'CANON EOS DSLR Camera',
 orginalPrice:'$130',
 discountPrice:'$160',
 ratingImg:'/images/Three Star.png',
 off:'35%',
 ratnum:'(75)'
},
 
{ id:'11',
percentage:'28%',
img:'/images/GamingLaptop.png',
productName:'ASUS FHD Gaming Laptop',
orginalPrice:'$130',
discountPrice:'$160',
ratingImg:'/images/Three Star.png',
off:'55%',
ratnum:'(75)'
},

{id:'12',
percentage:'60%',
img:'/images/Curology.png',
productName:'Curology Product Set ',
orginalPrice:'$630',
discountPrice:'$760',
ratingImg:'/images/Four Half Star.png',
off:'25%',
ratnum:'(85)'
},
{id:'13',
  percentage:'40%',
  img:'/images/CarToy.png',
  productName:'Kids Electric Car',
  orginalPrice:'$100',
  discountPrice:'$160',
  ratingImg:'/images/Five star.png',
  off:'65%',
  ratnum:'(100)'
 },
 {id:'14',
 percentage:'40%',
 img:'/images/Copa_Sense 1.png',
 productName:'Jr.Zoom Soccer Cleats',
 orginalPrice:'$130',
 discountPrice:'$260',
 ratingImg:'/images/Three Star.png',
 off:'75%',
 ratnum:'(75)'
},
 
{ id:'15',
percentage:'28%',
img:'/images/GP11_PRD3 1.png',
productName:'GP11 Shooter USB Gamepad',
orginalPrice:'$230',
discountPrice:'$350',
ratingImg:'/images/Five star.png',
off:'65%',
ratnum:'(100)'
},

{id:'16',
percentage:'60%',
img:'/images/GreenJacket.png',
productName:'Quilted Satin Jacket',
orginalPrice:'$115',
discountPrice:'$175',
ratingImg:'/images/Four Half Star.png',
off:'35%',
ratnum:'(85)'
},
]

for(i=0; i<cardData2.length; i++){
 console.log(cardData2[i].productName,cardData2[i].orginalPrice);
 
}



cardData2.map((card)=>{
  const conta=document.querySelector('.Lcontainer')
   const childCard=document.createElement('div');
   childCard.innerHTML=`<div class="relative max-w-64 bg-slate-100">
   <span class="text-white bg-red-500 rounded-sm px-2 py-1">${card.off}</span>
   <div class="flex justify-center">
   <img src="${card.img}" alt="" class="card-img pl-2">
   </div>

   <div class="absolute top-2" style="left:90%;">
   <div class="flex flex-col align-center gap-3">
   <img src="/images/like.png" alt="" class="w-5">
   <img src="/images/Quick View.png" alt="">
   </div>
   </div>
   <Button class="Add_Cart mx-auto w-full bg-black mt-5 text-white p-2 rounded-br">Add to Cart</Button>
   <p class="font-medium text-base leading-6">${card.productName}</p>
   <div class="space-x-1">
   <span class="font-medium text-base leading-6 text-red-500">${card.orginalPrice}</span>
   <span class="font-medium text-base leading-6 line-through text-slate-500">${card.discountPrice}</span>
   </div>
   <div class="flex">
   <img src="${card.ratingImg}" alt="">
   <p class="ratnum text-slate-500 font-semibold text-sm leading-5">
  ${card.ratnum}
 </p>
   </div>
 </div> `
  conta.appendChild(childCard)
})






 // Function to add product to cart
 function addToCart(index) {
  
  const productC = 

  { img: cardData2[index].img, price: cardData2[index].orginalPrice,
  };
  let cartItems = localStorage.getItem('cart');
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  cartItems.push(productC);
  localStorage.setItem('cart', JSON.stringify(cartItems));
}


const Add=document.querySelectorAll(".Add_Cart");
Add.forEach((buttons,index)=>{
  buttons.addEventListener('click',()=>{
    addToCart(index)
    
  })
})




