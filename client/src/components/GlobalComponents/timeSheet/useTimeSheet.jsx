import axios from 'axios';
import { useState, useEffect } from 'react';

const useTimeSheet = ({ userId, initialState = {} }) => {
  const [state, setState] = useState(initialState);

  if (userId) {
    useEffect(() => {
      {
        axios
          .get(`/timesheet/${userId}`, { params: { count: 1 } })
          .then(({ data }) => {
            const today = parseInt(
              new Date().toISOString().slice(0, 10).split('-').join('')
            );
            const weekEnd = parseInt(data.weekEnd.split('-').join(''));
            if (weekEnd > today) {
              setState(data);
            }
          });
      }
    }, []);
  }

  return [state, setState];
};

export default useTimeSheet;
