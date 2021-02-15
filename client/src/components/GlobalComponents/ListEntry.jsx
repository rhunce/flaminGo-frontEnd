import React from 'react';
import FormButton from '../styledElements/FormButton.jsx'


const ListEntry = ({table, type}) => {


  return (
    <div id="listEntry">
      <span className="listEntryText">{table}</span>
      <span className="listEntryButtons"><FormButton margin="0 20px 0 20px">See Details</FormButton></span>
    </div>

  )


};

export default ListEntry;