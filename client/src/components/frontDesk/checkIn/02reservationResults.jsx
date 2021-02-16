import React from 'react';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';


const ReservationResults = ({name, resId}) => {
    return (
        <HalfRoundDiv className="mainBox">
            <div className="insidePurpleThing">
                <div> reservation Number | Guest Name | DD/MM - DD/MM</div>
                Search results for: {name} {resId}
            </div>
        </HalfRoundDiv>
    )
}
export default ReservationResults;