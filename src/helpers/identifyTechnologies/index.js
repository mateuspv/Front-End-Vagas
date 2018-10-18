import icons from "./icons.json";

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

export default function identifyTechnologies(text) {
  const texts = text
    .toLowerCase()
    .split(/[ |\n|\\|/]/)
    .map(_ => _.trim());

  return texts.filter(_ => icons.includes(_)).filter(unique);
}
