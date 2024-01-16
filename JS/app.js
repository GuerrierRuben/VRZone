window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 30

    if (scrolled) {
        document.body.classList.add('scrolled')
    } else {
        document.body.classList.remove('scrolled')
    }
})

function setActiveLink(clickedLink) {
    const allLinks = document.querySelectorAll('.left a')
    allLinks.forEach(function(link) {
      link.classList.remove('active')
    })
  
    clickedLink.classList.add('active')
  }
  