import React, { ChangeEvent, FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { setSearchAction } from '@/lib/redux/reducers/search';
import { Button, Input, SearchContainer } from './style';

const Search: FC = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.search.label);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setSearchAction(dispatch, text);
    };

    const clearSearch = () => {
        setSearchAction(dispatch, '');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    useEffect(() => {
        return () => {
            setSearchAction(dispatch, '');
        };
    }, []);

    return (
        <SearchContainer>
            {searchValue !== '' && <Button onClick={clearSearch}>x</Button>}
            <Input type="text" ref={inputRef} onChange={handleInputChange} />
        </SearchContainer>
    );
};

export default Search;
