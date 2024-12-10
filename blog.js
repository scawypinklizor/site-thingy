const json_data = '[{"image": "blog.png", "title": "Название", "text": "текст", "date": "3 дня назад","tags": ["1", "2"]}, {"image": "blog.png", "title": "Название", "text": "необычный текст", "date": "3 дня назад", "tags": ["1", "4"]}]'
const card_html = '<section class="blog-card"><div class="blog-header"><div class="blog-cover"></div></div><div class="blog-body"><div class="blog-title"><h2></h2></div></div><div class="blog-text"><p></p></div><div class="blog-tags"><ul></ul></div><div class="blog-footer"><div class="blog-published-date"></div></div></section>'

$(document).ready(() => {
  let data = JSON.parse(json_data)
  draw_cards(data)

  $('.search-do').on('click', () => {
    const search = $('.search-text').val().toLowerCase()
    filter(search, data)
  })

  cards_handler(data)
})

function draw_cards(data) {
  $('.blog-container').html('')
  data.forEach((item, i) => {
    let card = $(card_html)
    card.find('.blog-cover').css('background-image', 'url("' + item.image + '")')
    card.find('.blog-title h2').text(item.title)
    card.find('.blog-text p').text(item.text)
    card.find('.blog-published-date').text(item.date)
    let tags = ''
    item.tags.forEach((tag, i) => {
      tags += '<li><a href="' + tag + '">' + tag + '</a></li>'
    })
    card.find('.blog-tags ul').html(tags)
    $('.blog-container').append(card)
  })
}

function filter(value, data) {
  draw_cards(data.filter((item) => {
    let result = 0
    result += item.image.toLowerCase().indexOf(value) > -1
    result += item.title.toLowerCase().indexOf(value) > -1
    result += item.text.toLowerCase().indexOf(value) > -1
    result += item.date.toLowerCase().indexOf(value) > -1
    result += item.tags.filter((tag) => {
      return tag.toLowerCase().indexOf(value) > -1
    }).length
    return result > 0
  }))
}

function cards_handler(data) {
  $('.blog-tags a').on('click', (e) => {
    e.preventDefault()
    filter($(e.currentTarget).text().toLowerCase(), data)
    cards_handler(data)
  })
}