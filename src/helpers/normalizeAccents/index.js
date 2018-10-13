export default function normalizeAccents(text) {
  const weird = 'öüóőúéáàűíÖÜÓŐÚÉÁÀŰÍçÇ!@£$%^&*()_+?/*."';
  const normalized = 'ouooueaauiOUOOUEAAUIcC                 ';

  return text.toString()
    .split('')
    .map(char => {
      const index = weird.indexOf(char);

      if (index !== -1) {
        return normalized[index]
      }

      return char;
    })
    .reduce((a, b) => a + b, '')
}