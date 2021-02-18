import React from 'react';

let ConfirmationPage = ({bookingInfo}) => {
  return (
    <ul>
      {Object.values(bookingInfo).map((bookingItem) => {
        return (
          <li>
            {bookingItem}
          </li>
        )
      })}
    </ul>
  )
}

export default ConfirmationPage;