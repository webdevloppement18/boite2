const spanContainer = document.querySelectorAll('.title div');


spanContainer.forEach(items => {
    const letters = items.children[0].textContent.split('');
    items.innerHTML = " ";


    letters.forEach((el, index) =>{
       items.innerHTML += `<span style="transition-delay: ${0.07 * index}s">${el}</span>`
    })
})


