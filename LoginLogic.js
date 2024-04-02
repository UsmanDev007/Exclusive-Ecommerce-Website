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