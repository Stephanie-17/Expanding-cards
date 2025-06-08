document.querySelectorAll('.card-img').forEach((card,i)=>{
    card.addEventListener('click',
        ()=>{
        removeActiveClass()
        card.classList.remove('remove')
        card.classList.add('active')
        animateText(i)
        }
    )
   
})

function removeActiveClass() {
    document.querySelectorAll('.card-img').forEach(card=>{
        if (card.classList.contains('active')) {
           card.classList.remove('active')
           card.classList.add('remove')
        }
       

    })
}

function animateText(i) {

     const textElements = document.querySelectorAll('.card-text');
     textElements.forEach(text=>{
        text.classList.remove('active-text')
     })
    
    if (textElements[i]) {  // Ensure 'i' is within range
        textElements[i].classList.add('active-text');
        console.log(textElements[i]);
    }

}