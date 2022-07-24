export default function handleStyles(guess: string, solution: string, position: number) {
  
  //function for knowing how many times the letter repeats either in solution or guess
  const filterLetter = (arr: string[], letter: string): number => {
    return arr.filter(l => l.toUpperCase() === letter.toUpperCase()).length;
  };

  //letter matching the square where the function will be called
  const letter = guess.slice(position, position + 1).toUpperCase();

  //checkings
  const isCorrect = letter === solution[position];
  const isContained = solution.includes(letter);
  const numberOfLetters =
    filterLetter(guess.split(""), letter) === filterLetter(solution.split(""), letter);

  //Styles to return  
  const backgroundColor = isCorrect ? "yellow" : isContained ? "rgb(110, 209, 110)" : "#ccc";
  const border = numberOfLetters ? "red solid 3px" : "";

  return {
    backgroundColor,
    border,
  };
}
