import React, { ChangeEvent, FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { setSearchAction } from '@/lib/redux/reducers/search';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 2px;
  width: 20px;
  height: 20px;
  background-color: #3675a7;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 5px;
`;

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
