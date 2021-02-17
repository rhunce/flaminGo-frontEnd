import React from "react";

let AddHeader = () => {
  return (
    <table className="titleTable">
      <thead>
        <tr>
          <th>Add amenities</th>
        </tr>
      </thead>
    </table>
  );
};

let DeleteHeader = () => {
  return (
    <table className="titleTable">
      <thead>
        <tr>
          <th>Delete amenities</th>
        </tr>
      </thead>
    </table>
  );
};

export {
  AddHeader,
  DeleteHeader
};