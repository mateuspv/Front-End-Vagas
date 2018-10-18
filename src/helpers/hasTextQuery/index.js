import normalizeAccents from "../normalizeAccents/index";

export default function compareText(txt, q) {
  const text = normalizeAccents(txt.toLowerCase());
  const query = normalizeAccents(q.toLowerCase());

  return text.indexOf(query) !== -1;
}
