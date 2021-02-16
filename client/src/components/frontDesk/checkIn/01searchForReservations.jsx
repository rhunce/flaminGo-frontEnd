import React, {useState, useEffect} from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';
import ReservationResults from './02reservationResults';



const SearchForReservations = () => {
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [resId, setResId] = useState('');
    const addPage = () => {
        setPage((prevPage) => (prevPage + 1))
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

    if (page === 1){
        return <ReservationResults name={name} resId={resId}/>
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
                onClick={(e) => { console.log('hi'); addPage() }}
                margin={'0 auto'}> Search </FormButton>
                </div>
        </HalfRoundDiv>
    )
}

export default SearchForReservations;