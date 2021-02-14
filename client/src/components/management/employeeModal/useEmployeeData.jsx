import { useState } from 'react';

const useEmployeeData = ({ initialState }) => {
  const [state, setState] = useState(initialState);

  const editField = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [state, editField];
};

export default useEmployeeData;
