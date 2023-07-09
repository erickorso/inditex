import { ChangeEvent, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/lib/redux/store";
import { setSearchAction } from '@/lib/redux/reducers/search';

const Search: FC = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.search.label);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setSearchAction(dispatch, text)
    };

    useEffect(() => () => {
        setSearchAction(dispatch, '')
    }, [])

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <p>Search value: {searchValue}</p>
        </div>
    );
};

export default Search;
