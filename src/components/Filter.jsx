import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = value => {
    dispatch(setFilter(value));
  };
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        onChange={evt => onChange(evt.currentTarget.value)}
        name=""
        placeholder="find name"
      />
    </>
  );
};

export default Filter;
