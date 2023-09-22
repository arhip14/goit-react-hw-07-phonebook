import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../Redux/actions/contactsActions';
import { FilterContainer } from './Filter.styles';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const newValue = event.target.value;
    dispatch(setFilter(newValue));
  };

  return (
    <FilterContainer> 
      <label>Filter contacts by name:</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to filter"
      />
    </FilterContainer>
  );
};

export default Filter;
