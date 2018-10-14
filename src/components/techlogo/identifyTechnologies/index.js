import icons from './icons.json';

function unique(value, index, self) {
  return self.indexOf(value) === index;
}


export default function identifyTechnologies(text) {
  return text
    .split(' ')
    .filter(_ => icons.includes(_.toLowerCase()))
    .map(_ => _.toLowerCase())
    .filter(unique)
}