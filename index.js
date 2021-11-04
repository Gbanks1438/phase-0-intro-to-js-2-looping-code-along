const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const thankYou = [];
        for (let a = 0; a < names.length; a++) {
            thankYou.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
        }
    return thankYou;
}

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}