import React from 'react';
import { colors, gradients, fonts } from '../../styledElements/styleGuid.js';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';

const Search = ({ back }) => {
  return (
    <HalfRoundDiv className="mainBox">
      <div className="checkInTitleDiv">Check-Out: Search for Reservations</div>
      <div className="centeredInputBars">
        <label className="checkOutLabels">Name</label> <br/>
        <InputTypeText className="inputs" width={'100%'}/> <br/>
        <label className="checkOutLabels">Reservation ID</label> <br/>
        <InputTypeText className="inputs" id="reservation" width={'100%'}/>
        <label className="checkOutLabels">Room Number</label> <br/>
        <InputTypeText className="inputs" id="reservation" width={'100%'}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <FormButton
          backgroundColor={colors.berry}
          className="searchButtonPlacement"
          onClick={(e) => { console.log('hi') }}
          margin={'0 auto'}>Search</FormButton>
      </div>
    </HalfRoundDiv>
  );
};

export default Search;
