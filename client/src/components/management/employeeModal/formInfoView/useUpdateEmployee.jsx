import { useState } from 'react';

const useUpdateEmployee = ({ initialState }) => {
  const [state, setState] = useState(initialState);

  const editState = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [state, setState, editState];
};

export default useUpdateEmployee;
