import React, { useState, useEffect } from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import ListEntry from '../GlobalComponents/ListEntry.jsx';
import {
  titleTableRooms,
  titleTableTasks,
  titleTableEmployees,
  titleTableGuests,
} from './ListComponents/titleTables.jsx';
import {
  entryTableRooms,
  entryTableTasks,
  entryTableEmployees,
  entryTableGuests,
} from './ListComponents/entryTables.jsx';
import {
  roomsData,
  employeeData,
  taskData,
  reservationData,
} from '../../SampleData/SampleData.js';

const ListMaster = ({
  type,
  handleBackChange,
  handleBackgroundChange,
  onClick1,
  onClick2,
}) => {
  useEffect(() => {
    handleBackChange('black');
    handleBackgroundChange('listBgContainer');
  }, []);

  // console.log('ListType', type);

  let data, titleTable, searchParam;

  if (type === 'room') {
    data = roomsData;
    titleTable = titleTableRooms();
    searchParam = 'Search by room number';
  } else if (type === 'employee') {
    data = employeeData;
    titleTable = titleTableEmployees();
    searchParam = 'Search by employee name';
  } else if (type === 'task') {
    data = taskData;
    titleTable = titleTableTasks();
    searchParam = 'Search';
  } else if (type === 'guest') {
    data = reservationData;
    titleTable = titleTableGuests();
    searchParam = 'Search by guest name';
  }

  const [dropDownStatus, setDropDown] = useState('list1');

  var checkList = document.getElementById('dropDown');

  let handleFilterDropdown = (e) => {
    if (dropDownStatus === 'list1') setDropDown('list1 visible');
    else setDropDown('list1');
  };

  //Search Functionality

  const [searchTerm, setSearch] = useState('');

  const handleSearch = (e) => {
    let search = document.getElementById('searchBar').value;
    setSearch(search);
  };

  let searched = [];
  if (searchTerm !== '') {
    if (type === 'room') {
      searched = data.filter((room) => {
        let roomNumber = room.roomNumber;
        return roomNumber.includes(searchTerm);
      });
      data = searched;
    } else if (type === 'employee') {
      searched = data.filter((employee) => {
        let name =
          employee.firstName.toLowerCase() + employee.lastName.toLowerCase();
        return name.includes(searchTerm);
      });
      data = searched;
    }
  }

  //Sort Functionality

  const [sortTerm, setSort] = useState('');

  let handleSort = () => {
    let sortBy = document.getElementsByClassName('sortBy')[0].value;
    setSort(sortBy);
    if (
      sortBy === 'roomType' ||
      sortBy === 'lastName' ||
      sortBy === 'position'
    ) {
      data.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'roomNumber') {
      data.sort(function (a, b) {
        if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
          return -1;
        }
        if (parseInt(a[sortBy]) > parseInt(b[sortBy])) {
          return 1;
        }
        return 0;
      });
    }
  };

  let sortOptions;
  if (type === 'room') {
    sortOptions = (
      <select className='sortBy' onChange={handleSort}>
        <option value='' selected disabled hidden>
          Sort By
        </option>
        <option value='roomNumber'>Room Number</option>
        <option value='roomType'>Room Type</option>
      </select>
    );
  } else if (type === 'employee') {
    sortOptions = (
      <select className='sortBy' onChange={handleSort}>
        <option value='' selected disabled hidden>
          Sort By
        </option>
        <option value='position'>Position</option>
        <option value='lastName'>Last Name</option>
      </select>
    );
  } else if (type === 'task') {
    sortOptions = '';
  }

  //Filter functionality

  const [filterTerm, setFilter] = useState('');

  let handleFilter = () => {
    let filterBy = document.getElementsByClassName('filterBy')[0].value;
    setFilter(filterBy);
  };

  if (filterTerm === 'vacancy') {
    data = data.filter((room) => {
      let vacant = !room.isOccupied;
      console.log(room.roomNumber, ' is ', vacant);
      return vacant;
    });
  } else if (filterTerm === 'cleaned') {
    data = data.filter((room) => {
      let cleaned = room.isClean;
      return cleaned;
    });
  } else if (filterTerm === 'worked') {
    data = data.filter((employee) => {
      let hours = employee.weekHours;
      return hours > 0;
    });
  } else if (filterTerm === 'housekeeping') {
    data = data.filter((task) => {
      return task.department === 'Housekeeping';
    });
  } else if (filterTerm === 'maintenance') {
    data = data.filter((task) => {
      return task.department === 'Maintenance';
    });
  } else if (filterTerm === '') {
    data = data;
  }

  let filterOptions;
  if (type === 'room') {
    filterOptions = (
      <select className='filterBy' onChange={handleFilter}>
        <option value='' selected disabled hidden>
          Filter
        </option>
        <option value=''>See All Rooms</option>
        <option value='vacancy'>Vacant</option>
        <option value='cleaned'>Cleaned</option>
      </select>
    );
  } else if (type === 'employee') {
    filterOptions = (
      <select className='filterBy' onChange={handleFilter}>
        <option value='' selected disabled hidden>
          Filter
        </option>
        <option value=''>See All Employees</option>
        <option value='worked'>Worked This Week</option>
      </select>
    );
  } else if (type === 'task') {
    sortOptions = (
      <select className='filterBy' onChange={handleFilter}>
        <option value='' selected disabled hidden>
          Filter
        </option>
        <option value=''>See All Tasks</option>
        <option value='housekeeping'>Housekeeping</option>
        <option value='maintenance'>Maintenance</option>
      </select>
    );
  }

  return (
    <div id='listContainer'>
      <div className='listHeader'>
        <div className='listHeaderButtons'>
          {filterOptions}
          {sortOptions}
          <div className='listHeaderSearch'>
            <input id='searchBar' type='text' placeholder={searchParam}></input>
            <img
              src='svg/search.svg'
              height='20px'
              onClick={handleSearch}
            ></img>
          </div>
        </div>
      </div>
      <HalfRoundDiv
        gradients={true}
        margin='0 30px 0 30px'
        width='100vh - 60px'
        height='calc(100vh - 260px)'
      >
        <div id='listEntriesHeader'>{titleTable}</div>
        <div id='listEntriesContainer'>
          {data.map((entity) => {
            if (type === 'room') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableRooms(entity)}
                  type='room'
                />
              );
            } else if (type === 'employee') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableEmployees(entity)}
                  type='employee'
                />
              );
            } else if (type === 'task') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableTasks(entity)}
                  type='task'
                />
              );
            } else if (type === 'guest') {
              return (
                <ListEntry
                  entity={entity}
                  onClick1={onClick1}
                  onClick2={onClick2}
                  table={entryTableGuests(entity)}
                  type='guest'
                />
              );
            }
          })}
        </div>
      </HalfRoundDiv>
    </div>
  );
};

export default ListMaster;
