export function convertsCordsToString(x, y) {
    return `${x}x${y}`;
  }
  
  export function getCordsFromString(text) {
    return text.split('x').map((item) => parseInt(item));
  }
  