$(document).ready(() => {
  let current_slide = 0
  let is_busy = false
  $('.slider-arrow').on('click', (e) => {
    const that = $(e.currentTarget)
    if (!is_busy) {
      if (that.hasClass('right')) {
        if (++current_slide >= slides.length)
          current_slide = 1
      } else {
        if (--current_slide < 1)
          current_slide = slides.length - 1
      }
      is_busy = true
      $('.slider-image').animate({'opacity': 0}, 350, () => {
        $('.slider-image').css('background-image', 'url(' + slides[current_slide] + ')')
        $('.slider-image').animate({'opacity': 1}, 350, () => is_busy = false)
      })
    }
  })
})

let slides = []
for (i = 1; i < 7; ++i) {
  slides[i] = `img/${i}.png`
}