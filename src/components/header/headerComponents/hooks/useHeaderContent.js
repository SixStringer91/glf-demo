import { useDebounce } from "../../../../libs/hooks";
import useObjectState from "../../../../libs/hooks/useObjectState";


const API_LINK = 'https://ecz4i9.a.searchspring.io/api';

const matchesTag = (value) => `${API_LINK}/suggest/query?query=${value}&resultsFormat=native&siteId=ecz4i9`;

const matchedItemsTag = (value) => `${API_LINK}/search/autocomplete.json?q=${value}&resultsFormat=native&productCount=8&siteId=ecz4i9&domain=https://www.golfdiscount.com/`;

const initial = { isBlockVisible: false, matches: null, loading: false, items: null };

export const useHeaderContent = () => {
    const [state, setState] = useObjectState(initial)

    const fetchData = useDebounce(async (e) => {
        if (e.target.value.length > 2) {
            setState({ isBlockVisible: true, loading: true });
            const res = await fetch(matchesTag(e.target.value));
            const matches = await res.json();
            const resItems = await fetch(matchedItemsTag(e.target.value));
            const items = await resItems.json();
            return setState({ loading: false, matches, items })
            
        } return setState(initial);
    }, 200);

    return {
        ...state,
        fetchData
    }
}