$(document).ready(() => {
  $('.countup').each(function() {
    const that = $(this), goal = that.attr('data-end')
    $({countNum: 0}).animate({
      countNum: goal
    },
    {
      duration: 4000 + (Math.random() - 0.5) * 2 * 600,
      easing: 'swing',
      step: function() {
        that.text(Math.floor(this.countNum))
      },
      complete: function() {
        that.text(this.countNum)
      }
    })
  })
})