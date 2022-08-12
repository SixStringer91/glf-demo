export const equalKeyIndex = (key, inputText) => key
  .toLowerCase()
  .search(inputText.toLowerCase());

export function searchFilter(
  searchInputTxt,
  elements,
  keysToEqual
) {
  if (searchInputTxt) {
    return elements.filter((el) => {
      const entries = Object.entries(el);
      const filtered = entries
        .filter((field) => keysToEqual.find((key) => key === field[0]))
        .find((field) => (
          typeof field[1] === 'string' || typeof field[1] === 'number')
              && ~(equalKeyIndex(String(field[1]), searchInputTxt)));
      if (filtered) return el;
      return null;
    });
  }
  return elements;
}