import React from "react";

let AddHeader = () => {
  return (
    <table className="titleTable">
      <thead>
        <tr>
          <th>Add Room</th>
        </tr>
      </thead>
    </table>
  );
};

let EditHeader = () => {
  return (
    <table className="titleTable">
      <thead>
        <tr>
          <th>Edit Room</th>
        </tr>
      </thead>
    </table>
  );
};

export {
  AddHeader,
  EditHeader
};