import hasTextQuery from "./index";

test("Returns true when text contains a substring `query`, ignoring accents", () => {
  const text = 'Hello world öüóőúéáàűíÖÜÓŐÚÉÁÀŰÍçÇ!@£$%^&*()_+?/*."';
  const query = "ouooueaauiOUOOUEAAUIcC                 ";

  expect(hasTextQuery(text, query)).toBe(true);
});

test("Returns false when text does not contains a substring `query`", () => {
  const text = 'Hello world öüóőúéáàűíÖÜÓŐÚÉÁÀŰÍçÇ!@£$%^&*()_+?/*."';
  const query = "NOOP";

  expect(hasTextQuery(text, query)).toBe(false);
});
