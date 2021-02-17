import React, { useState, useEffect } from 'react';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import ListEntry from '../../GlobalComponents/ListEntry.jsx';

import {
  AddHeader,
  DeleteHeader,
} from './RoomsComponents/HeaderRooms.jsx';
import {
  AddTables,
  EditTables
} from '../RoomsComponents/AddEditRooms.jsx';
import {
  amenitiesData,
  roomTypeData
} from '../../../SampleData/AmenitiesRoomType.js';