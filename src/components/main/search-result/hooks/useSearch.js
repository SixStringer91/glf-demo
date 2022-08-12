/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { searchFilter } from './searchSelector';

const useSearch = (searchText, items, keys, ...args) => {
  const elements = useMemo(
    () => searchFilter(searchText, items, keys),
    [searchText, items, ...args]
  );
  return elements;
};

export default useSearch;