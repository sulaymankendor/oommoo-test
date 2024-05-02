export function truncateText(text: string, numberOfChar: number): string {
  if (text.split(" ").length > numberOfChar) {
    let initialListOfText = text.split(" ");
    let truncatedText;
    let finalListOfText: string[] = [];
    for (let index = 0; index < initialListOfText.length; ++index) {
      if (index < numberOfChar) {
        finalListOfText.push(initialListOfText[index]);
      }
    }
    truncatedText = finalListOfText.join(" ");
    return `${truncatedText}...`;
  } else {
    return text;
  }
}
