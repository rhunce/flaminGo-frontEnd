import React from 'react';

import HalfRoundDiv from '../../styledElements/HalfRoundDiv';

const ConfirmationPage = (props) => {
    return (
        <HalfRoundDiv
            className="mainBox"
            margin={'0 auto'}
        >
            <div>
            <div className="checkInTitleDiv"> Confirmation Page</div>
                <div> 
                    {props.name}
                </div>
            </div>
        </HalfRoundDiv>
    )
}

export default ConfirmationPage;