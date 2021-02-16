import React, {useState, useEffect} from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';
import CheckInReservationList from './checkIn2'
import AvailableRooms from './03availableRooms';
import ConfirmationPage from './04confirmationPage'
import axios from 'axios';


const SearchForReservations = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [resId, setResId] = useState('');
    const [reservations, setReservations] = useState([])

    const addPage = () => {
        setPage((prevPage) => (prevPage + 1))
        //GET request in axios
        // axios.get()

    };
    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateResId = (e) => {
        setResId(e.target.value)
    }

    // useEffect(() => {
    //     console.log('name changed')
    // }, [name])

    // unfinished method for data validation
    let nameValidate = null;
    if (name === "blob") {
        nameValidate = <div> your input is a blob </div>
    }

    //page navigation
    if (page === 2){
        return <CheckInReservationList 
            name={name} 
            resId={resId}
            addPage={addPage}/>
    }

    if (page === 3){
        return <AvailableRooms 
            name={name} 
            resId={resId}
            addPage={addPage}/>
    }

    if (page === 4){
        return <ConfirmationPage 
            name={name} 
            resId={resId}
            addPage={addPage}/>
    }


    return (
        <HalfRoundDiv className="mainBox" margin={'0 auto'}>
                <div className="checkInTitleDiv"> Check-In Search for Reservations</div>
                <div className="centeredInputBars">
                    <label className="checkinLabels"> Name</label> <br/>
                    <InputTypeText id="checkInGuestName" width={'100%'} value={name} onChange={updateName}/> 
                    {nameValidate}

                    <label className="checkinLabels"> Reservation ID</label> <br/>
                    <InputTypeText id="reservation" width={'100%'} value={resId} onChange={updateResId}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FormButton 
                backgroundColor="berry" 
                className="searchButtonPlacement"
                onClick={(e) => { addPage() }}
                margin={'0 auto'}> Search </FormButton>
                </div>
        </HalfRoundDiv>
    )
}

export default SearchForReservations;