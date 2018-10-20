import icons from "./icons.json";

function removeNumbers(str) {
  return str.replace(/[0-9]/gi, "");
}

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

export default function identifyTechnologies(text) {
  const texts = text
    .toLowerCase()
    .split(/[ |\n|\\|/|.|(|)]/)
    .map(_ => removeNumbers(_.trim()));

  return texts.filter(_ => icons.includes(_)).filter(unique);
}
