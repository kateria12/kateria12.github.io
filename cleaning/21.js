let u = document.querySelector('.preloader')

window.addEventListener('load', function () {
    setInterval(() => {
        u.style.display = 'none'
    }, 1000);

})


let lo = document.querySelector('.lo')
window.addEventListener('scroll', function () {
    let height = window.innerHeight
    if (window.scrollY > height) {
        lo.style.display = 'block'
    }
    else {
        lo.style.display = 'none'
    }

})