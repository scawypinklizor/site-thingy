window.onload = function() {
  const hamburger = document.getElementById('hamburger')

  hamburger.onclick = function() {
    let top_nav = document.getElementById('top-nav')
    if (top_nav.className === 'responsive')
      top_nav.className = ''
    else
      top_nav.className = 'responsive'
  }

  const menu_list = document.querySelectorAll('.menu-element')
  
  menu_list.forEach(function(element) {
    element.addEventListener('click', function(event) {
      const element_link = element.dataset.link
      if (!element_link)
        return
      event.preventDefault()
      document.getElementById(element_link).scrollIntoView({behavior: 'smooth'})
    })
  })
}