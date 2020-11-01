//returns the provided parameter array in a randomized order
export const randomOrder = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

//returns an array of randomized numbers from 0 - 21 which will represent the indices of selected questions for a trivia round
export const randomNumbers = () => {
  let max = 10;
  let randomNums = [];

  for (let i = 0; i < max; i++) {
    let temp = Math.floor(Math.random() * 21);
    if (randomNums.indexOf(temp) === -1) {
      randomNums.push(temp);
    } else i--;
  }
  return randomNums;
};
