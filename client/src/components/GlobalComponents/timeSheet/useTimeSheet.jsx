import axios from 'axios';
import { useState, useEffect } from 'react';

const useTimeSheet = ({ userId, initialState = {} }, back) => {
  console.log(userId);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    {
      axios
        .get(`/timesheets/${userId}`, { params: { count: 1 } })
        .then(({ data }) => {
          const today = parseInt(
            new Date().toISOString().slice(0, 10).split('-').join('')
          );
          const weekEnd = parseInt(data[0].weekEnd.split('-').join(''));
          if (weekEnd > today) {
            setState(data[0]);
          } else {
            setState({
              employee_id: useId,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  console.log(state);
  return [state, setState];
};

export default useTimeSheet;
