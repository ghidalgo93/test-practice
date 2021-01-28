const isAlpha = (ch) => {
  return (
    typeof ch === "string" &&
    ch.length === 1 &&
    ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
  );
};

function capitalize(string) {
  if (string.length === 0) {
    return "";
  }
  for (let i = 0; i < string.length; i++) {
    if (isAlpha(string[i])) {
      return string.replace(string[i], string[i].toUpperCase());
    }
  }
}

export default capitalize;
