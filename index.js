let cvLinks = Array.from(document.getElementsByClassName('cv-link'))

attachEvents(cvLinks)

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY)
    if(e.currentTarget.scrollY < 400){
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[0].classList.add('text-bg-success')
    }
    else if(e.currentTarget.scrollY <= 900 && e.currentTarget.scrollY >= 400){
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[1].classList.add('text-bg-success')
    }
    else {
        cvLinks.forEach(link => link.classList.remove('text-bg-success'))
        cvLinks[2].classList.add('text-bg-success')
    }
})


function attachEvents(cvLinks){
  let currScrollHeight = window.scrollY
    cvLinks[0].addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    cvLinks[1].addEventListener('click', () => {
        if(currScrollHeight === 400){return}
        window.scroll({
            top: 400,
            left: 0,
            behavior: 'smooth'
        })
    })
    cvLinks[2].addEventListener('click', () => {
        if(currScrollHeight === 900){return}
        window.scroll({
            top: 900,
            left: 0,
            behavior: 'smooth'
        })
    })
}