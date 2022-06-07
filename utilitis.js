export function convertsCordsToString(x, y) {
    return `${x}x${y}`;
  }
  
  export function getCordsFromString(text) {
    console.log(text)
    return text.split('x').map((item) => parseInt(item));
  }
  