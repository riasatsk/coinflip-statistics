function coin_flip() {
  let rand = Math.random();
  if (rand > 0.5) {
    return 1;
  } else if (rand < 0.5) {
    return 0;
  }
}

function doubleflip() {
  let x = coin_flip();
  let y = coin_flip();
  if (x == 1 && y == 1) {
    return "HH";
  } else if (x == 0 && y == 0) {
    return "TT";
  } else if (x == 1 && y == 0) {
    return "HT";
  } else if (x == 0 && y == 1) {
    return "TH";
  }
}

function stat() {
  let hh = 0;
  let tt = 0;
  let ht = 0;
  let th = 0;

  for (let i = 0; (i) <= 1000; i++) {
    let df = doubleflip();
    if (df == "HH") {
      hh++;
    } else if (df == "TT") {
      tt++;
    } else if (df == "HT") {
      ht++;
    } else if (df == "TH") {
      th++;
    }
  }

  console.log(
    `HH = ${hh/10}%, TT= ${tt/10}%, HT = ${ht/10}%, TH = ${th/10}%`
  )
}

for(let i = 0 ; i<=100;i++){
  stat()
}