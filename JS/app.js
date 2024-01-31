window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 30

    if (scrolled) {
        document.body.classList.add('scrolled')
    } else {
        document.body.classList.remove('scrolled')
    }
})