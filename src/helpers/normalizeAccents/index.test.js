import normalizeAccents from "./index";

test("Accents should be replaced by non accents characters", () => {
  const accents = 'öüóőúéáàűíÖÜÓŐÚÉÁÀŰÍçÇ!@£$%^&*()_+?/*."';
  const nonAccents = "ouooueaauiOUOOUEAAUIcC                 ";

  expect(normalizeAccents(accents)).toBe(nonAccents);
});
