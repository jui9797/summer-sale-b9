let titleCount =1;
let totalPrice =0;
const cards =document.querySelectorAll('.card')
// console.log(cards);
for(let card of cards){
    // console.log(card);

   card.addEventListener('click', function(){
    // console.log('clicked')

    // get the card title inner text 
    const title =card.querySelector('h3').innerText
    // console.log(title.innerText)
    // get the card price inner text
    const price =parseFloat(card.querySelector('span').innerText.split(' ')[1])
    console.log( price)

    // get the hr tag
    // appending card title in hr tag
    const titleContainer =document.getElementById('title-container')
    // create p tag
    const p=document.createElement('p')
    // string concatanation
    p.innerText= titleCount+" . "+ title
    titleCount++;
    // showing p tag on hr(title-container)
    titleContainer.appendChild(p);

    // calculate total price
    totalPrice+=price;
    // console.log(totalPrice);
    document.getElementById('totalPrice').innerText= totalPrice.toFixed(2);
   }) 
}

// discount section
const button =document.getElementById('apply-btn');
button.addEventListener('click', function(){
    // console.log('button presed')

    // get the value from input field
    const couponElement =document.getElementById('input-field').value;
    const couponCode =couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode);
    if(totalPrice>=200){
        if(couponCode==='SELL200'){
            // discount calculation
            const discountElement =document.getElementById('discountPrice');
            const discountAmount =totalPrice*0.2;
            discountElement.innerText=discountAmount.toFixed(2);
            document.getElementById('input-field').value=' ';
            // rest total
            const restTotal =document.getElementById('total')
            restTotal.innerText=totalPrice-discountAmount.toFixed(2);

        }
        else{
            alert('invalid')
            document.getElementById('input-field').value=' ';
        }
    }
    else{
        alert('buy above 200$ ')
        document.getElementById('input-field').value=' ';
    }
})

// show successful purchase section

function openModal(){
    const modal =document.getElementById('modal');
    modal.style.display='flex';
}
// show the home section
function backToHome(){
    const backHome =document.getElementById('modal');
    backHome.style.display='none';
}