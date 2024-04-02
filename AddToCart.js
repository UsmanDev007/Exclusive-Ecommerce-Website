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


  

// Show Cart:


document.addEventListener('DOMContentLoaded', function() {
  let cartItems = localStorage.getItem('cart');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  const cartList = document.querySelector('.cart_list');
  // const totalPriceElement = document.getElementById('totalPrice');
  // let totalPrice = 0;

  if (cartItems.length === 0) {
      cartList.innerHTML = '<h1 class="font-semibold text-4xl leading-7 text-center mt-20">Your Cart is Empty</h1>';
      const clear=document.querySelector('.clear');
      clear.style.display='none';
      
  } else {
      cartItems.map(item => {
          const showcart = document.createElement('div');
          showcart.innerHTML =`
          <div class="cart_list flex flex-col-4 justify-between md:mx-32">
          <div>
          <img src="${item.img}" alt="" class="max-w-10 mt-10">
         </div>
        <div>
        <p class="itemPrice font-semibold text-base leading-6 mt-10">${item.price}</p>
       </div>
       <div>
        <input type="number" name="number"  value=1 class="quantity w-10 h-10  border border-rounded border-gray-300 font-semibold text-base leading-6 mt-10" >
       </div>
       <div>
        <p class="subtotal font-semibold text-base leading-6 mt-9">${item.price}</p>
       </div>
       </div>`;
          cartList.appendChild(showcart);

        //   Total
        const subtotalElements = document.querySelectorAll('.subtotal');
        const quantityElements = document.querySelectorAll('.quantity');
        const grandTotalElement = document.getElementById('grand');
        const FinalTotal=document.getElementById('final-price');
let grandTotal = 0;

subtotalElements.forEach((subtotalElement, index) => {
    const price = subtotalElement.innerText;
    const numericalPart = price.replace('$', '');
    const intValue = parseInt(numericalPart);
    const quantityElement = quantityElements[index];

    // Calculate subtotal for each item
    const calculateSubtotal = () => {
        const subtotal = quantityElement.value * intValue;
        subtotalElement.innerText = `$${subtotal}`;
        return subtotal;
    };

    // Initial calculation
    let subtotal = calculateSubtotal();
    grandTotal += subtotal;
     
    // Recalculate subtotal when quantity changes
    quantityElement.addEventListener('change', () => {
        grandTotal -= subtotal; 
        subtotal = calculateSubtotal();
        grandTotal += subtotal; 
        grandTotalElement.innerText = `$${grandTotal}`;
        FinalTotal.innerText=`$${grandTotal}`;  
    });
    
});


    grandTotalElement.innerText = `$${grandTotal}`;
    

    
             
          
      });
    //   total
        
  }


  const clear=document.querySelector('.clear');
  clear.addEventListener('click',()=>{
      localStorage.clear();
      window.location.reload();
  })
  
  
});


