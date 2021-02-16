import React, {useState} from 'react';

import CheckInReservationList from './checkIn2'
import AvailableRooms from './03availableRooms'

const ReservationResults = ({name, resId}) => {
    const [page, setPage] = useState(0);
    const addPage = () => {
        setPage((prevPage) => (prevPage + 1))
    };

    if (page === 1){
        return <AvailableRooms/>
    }

    return (
        <CheckInReservationList /> 
    )
}
export default ReservationResults;