import React from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';

// import styled from 'styled-components';
// import LandingButtons from '../landingPage/LandingButtons';
// import useChoosePath from '../landingPage/useChoosePath';
// import BackArrow from '../styledElements/BackArrow';
// import ListMaster from '../GlobalComponents/ListMaster';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPage: true,
      resultsPage: false
    };
  }

  render() {
    return (
      <HalfRoundDiv id="mainBox">
        <div className="checkInTitleDiv">Check-Out: Results</div>
        <div className="tables">
          <div className="headings"><b>RESERVATION INFORMATION</b></div>
          <table>
            <tbody>
              <tr>
                <td>ROOM NUMBER</td>
                <td>{this.props.inputRoomNumber}</td>
              </tr>
              <tr>
                <td>RESERVATION ID</td>
                <td>{this.props.inputReservationId}</td>
              </tr>
              <tr>
                <td>NAME</td>
                <td>{this.props.inputName.toUpperCase()}</td>
              </tr>
            </tbody>
          </table>
          <div className="headings"><b>OUTSTANDING CHARGES</b></div>
          <table>
            <tbody>
              <tr>
                <td>HOTEL RESTAURANT</td>
                <td>2-1-2021</td>
                <td>$45.35</td>
              </tr>
              <tr>
                <td>HOTEL BAR</td>
                <td>2-3-2021</td>
                <td>$262.00</td>
              </tr>
              <tr>
                <td>ROOM DAMAGES</td>
                <td>2-3-2021</td>
                <td>$350.89</td>
              </tr>
              <tr>
                <td>SUB TOTAL</td>
                <td></td>
                <td>$658.24</td>
              </tr>
              <tr>
                <td>TAXES</td>
                <td>35%</td>
                <td>$230.38</td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td>$888.62</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonContainer">
          <FormButton
            id="checkoutButton1"
            onClick={(e) => { console.log('CLICKAROO!'); }}>Invoice
          </FormButton>
          <FormButton
            id="checkoutButton2"
            onClick={(e) => { console.log('CLICKAWHO?!?!'); }}>Check Out
          </FormButton>
        </div>
      </HalfRoundDiv>
    );
  }
}

export default Results;