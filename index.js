let cvLinks = Array.from(document.getElementsByClassName('cv-link'))
let header = document.getElementById('cv-header')
let toggleHeaderBtn = document.getElementById('toggle-header-btn')

attachNavEvents(cvLinks)
toggleHeader()

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY)
    if(e.currentTarget.scrollY < 600){
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[0].classList.add('text-bg-success')
    }
    else if(e.currentTarget.scrollY < 1300 && e.currentTarget.scrollY >= 600){
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[1].classList.add('text-bg-success')
    }
    else {
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[2].classList.add('text-bg-success')
    }
})

toggleHeaderBtn.addEventListener('click', () => toggleHeader())


function attachNavEvents(cvLinks){
  let currScrollHeight = window.scrollY
    cvLinks[0].addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        // window.scroll({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth'
        // })
    })

    cvLinks[1].addEventListener('click', () => {
        window.scrollTo({
            top: window.scrollY - 600,
            behavior: 'smooth'
        })
        // if(currScrollHeight === 400){return}
        // window.scroll({
        //     top: 400,
        //     left: 0,
        //     behavior: 'smooth'
        // })
    })
    cvLinks[2].addEventListener('click', () => {
        if(currScrollHeight === 900){return}
        window.scrollTo({
            top: 1300,
            behavior: 'smooth'
        })
        // window.scroll({
        //     top: 900,
        //     left: 0,
        //     behavior: 'smooth'
        // })
    })
}

function toggleHeader(){
    if(header.style.display === 'none'){ 
         header.style.display = 'block' 
         toggleHeaderBtn.innerHTML = `<svg style="max-width: 3em; fill: azure;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>`
    }else {
        header.style.display = 'none'
        toggleHeaderBtn.innerHTML =  `<svg style="max-width: 3em; fill: azure;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`
    }
}