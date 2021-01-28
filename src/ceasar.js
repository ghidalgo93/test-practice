const encryptChar = (ch, key) => {
  //if lower case char
  if (ch >= "a" && ch <= "z") {
    let num = ch.charCodeAt(0);
    num = num - 96;
    num = (num + key) % 26;
    return String.fromCharCode(num + 96);
    //if upper case char
  } else if (ch >= "A" && ch <= "Z") {
    let num = ch.charCodeAt(0);
    num = num - 64;
    num = (num + key) % 26;
    return String.fromCharCode(num + 64);
    //if non alpha
  } else {
    return ch;
  }
};

const ceasar = (phrase, key) => {
  let rtnPhr = "";
  [...phrase].forEach((ch) => {
    rtnPhr = rtnPhr.concat(encryptChar(ch, key));
  });
  return rtnPhr;
};

export { ceasar, encryptChar };
