import React from 'react';

let ConfirmationPage = (props) => {
  return (
    <ul>
      {Object.values(props).map((prop) => {
        return (
          <div>
            {prop}
          </div>
        )
      })}
    </ul>
  )
}

export default ConfirmationPage;