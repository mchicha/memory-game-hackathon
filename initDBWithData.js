var card1 = new Card({
  name: "burger",
  state: 0,
  img_url: "http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png"
})
card1.save(function (error, card) /* <--- callback function */ {
  if (error) {
    return console.error(error);
  }
  console.log(card);
});



var card2 = new Card({
  name: "guacamole",
  state: 0,
  img_url: "https://cdn.icon-icons.com/icons2/281/PNG/256/Guacamole-icon_30330.png"
})
card2.save(function (error, card) /* <--- callback function */ {
  if (error) {
    return console.error(error);
  }
  console.log(card);
});


var card3 = new Card({
  name: "turkey",
  state: 0,
  img_url: "https://cdn.icon-icons.com/icons2/281/PNG/256/Turkey-icon_30265.png"
})
card3.save(function (error, card) /* <--- callback function */ {
  if (error) {
    return console.error(error);
  }
  console.log(card);
});



var card4 = new Card({
  name: "fries",
  state: 0,
  img_url: "https://cdn.iconscout.com/public/images/icon/free/png-512/french-fries-fastfood-food-emoj-symbol-33f6bbba0c3260a7-512x512.png"
})


card4.save(function (error, card) /* <--- callback function */ {
  if (error) {
    return console.error(error);
  }
  console.log(card);
});