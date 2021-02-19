import React, { useState, useEffect } from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';
import CheckInReservationList from './02checkIn2';
import AvailableRooms from './03availableRooms';
import ConfirmationPage from './04confirmationPage';
import url from '../../../lib/apiPath';
import axios from 'axios';

let sampleData = [
  {
    bookingGuest: 'Jimmie Porter',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '1050.00',
    _id: '602b420f94bd6e1e4f85ded4',
    room_id: '',
    roomNumber: '',
    roomType: 'Double Queen',
    checkIn: '2021-02-22',
    checkOut: '2021-02-28',
  },
  {
    bookingGuest: 'Linda Mirabal',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '700.00',
    _id: '602b420f94bd6e1e4f85ded5',
    room_id: '',
    roomNumber: '',
    roomType: 'Single Queen',
    checkIn: '2021-02-22',
    checkOut: '2021-02-28',
  },
  {
    bookingGuest: 'Thao Kelling',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '2800.00',
    _id: '602b420f94bd6e1e4f85ded6',
    room_id: '',
    roomNumber: '',
    roomType: 'Ocean View King Suite',
    checkIn: '2021-02-22',
    checkOut: '2021-02-28',
  },
  {
    bookingGuest: 'Adam Pollock',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '1050.00',
    _id: '602b2ffc94bd6e1e4f85debb',
    room_id: '602b1f2694bd6e1e4f85de87',
    roomNumber: '131',
    roomType: 'Double Queen',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
  {
    bookingGuest: 'Muriel Albers',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '1050.00',
    _id: '602b3b1794bd6e1e4f85debc',
    room_id: '602b1f2694bd6e1e4f85de89',
    roomNumber: '133',
    roomType: 'Double Queen',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
  {
    bookingGuest: 'Robert Estevez',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '1050.00',
    _id: '602b3b5e94bd6e1e4f85decc',
    room_id: '602b1f2694bd6e1e4f85de8b',
    roomNumber: '135',
    roomType: 'Double Queen',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
  {
    bookingGuest: 'Mary McBride',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '700.00',
    _id: '602b3b5e94bd6e1e4f85decd',
    room_id: '602b1b4d94bd6e1e4f85de79',
    roomNumber: '121',
    roomType: 'Single Queen',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
  {
    bookingGuest: 'Holly Walker',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '700.00',
    _id: '602b3b5e94bd6e1e4f85dece',
    room_id: '602b1b4d94bd6e1e4f85de7c',
    roomNumber: '124',
    roomType: 'Single Queen',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
  {
    bookingGuest: 'Matt Thompson',
    guestList: ['Guest One', 'Guest Two', 'Guest Three'],
    totalCost: '2800.00',
    _id: '602b3b5e94bd6e1e4f85decf',
    room_id: '602b14fd541461fcab3686b5',
    roomNumber: '110',
    roomType: 'Ocean View King Suite',
    checkIn: '2021-02-14',
    checkOut: '2021-02-21',
  },
];

let sampleRooms = [
  {
    _id: '602b14fd541461fcab3686b5',
    roomType_id: '602b118a541461fcab3686ac',
    roomType: 'Ocean View King Suite',
    price: '400.00',
    amenities: ['Ocean View', 'TV', 'Non-Smoking'],
    roomNumber: '110',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b3b5e94bd6e1e4f85decf',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea2',
        room_id: '602b14fd541461fcab3686b5',
        location: '110',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deac',
        room_id: '602b14fd541461fcab3686b5',
        location: '110',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
      {
        _id: '602b2d4d94bd6e1e4f85deb6',
        room_id: '602b14fd541461fcab3686b5',
        location: '110',
        taskTitle: 'Touch up paint',
        taskDescription: 'Paint is chipping behind headboard, please repaint.',
        department: 'Maintenance',
        createdAt: '2021-02-13T13:00:00.000Z',
        dueBy: '',
        isComplete: false,
        isCleaning: false,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'Spencer Brook',
        employeeAssigned: 'Emily Shaw',
        employeeAssigned_id: 'auth0|602c30525eae860068e4576a',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602b3db794bd6e1e4f85ded1',
    roomType: 'Ocean View King Suite',
    price: '400.00',
    amenities: ['Ocean View', 'TV', 'Non-Smoking'],
    roomType_id: '602b118a541461fcab3686ac',
    roomNumber: '111',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '',
    tasks: [
      {
        _id: '602b3e2c94bd6e1e4f85ded2',
        room_id: '602b3db794bd6e1e4f85ded1',
        location: '111',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b3e3594bd6e1e4f85ded3',
        room_id: '602b3db794bd6e1e4f85ded1',
        location: '111',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
  },
  {
    _id: '602b1b4d94bd6e1e4f85de79',
    roomType_id: '602b100e541461fcab3686a7',
    roomType: 'Single Queen',
    price: '100.00',
    amenities: ['TV'],
    roomNumber: '121',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b3b5e94bd6e1e4f85decd',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea3',
        room_id: '602b1b4d94bd6e1e4f85de79',
        location: '121',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85dead',
        room_id: '602b1b4d94bd6e1e4f85de79',
        location: '121',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
      {
        _id: '602b2d4d94bd6e1e4f85deb7',
        room_id: '602b1b4d94bd6e1e4f85de79',
        location: '121',
        taskTitle: 'Replace shower caulk',
        taskDescription: 'Too moldy to clean, needs new caulk.',
        department: 'Maintenance',
        createdAt: '2021-02-14T15:00:00.000Z',
        dueBy: '',
        isComplete: false,
        isCleaning: false,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'Spencer Brook',
        employeeAssigned: 'Emily Shaw',
        employeeAssigned_id: 'auth0|602c30525eae860068e4576a',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602b1b4d94bd6e1e4f85de7a',
    roomType: 'Single Queen',
    price: '100.00',
    amenities: ['TV'],
    roomType_id: '602b100e541461fcab3686a7',
    roomNumber: '122',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea4',
        room_id: '602b1b4d94bd6e1e4f85de7a',
        location: '122',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deae',
        room_id: '602b1b4d94bd6e1e4f85de7a',
        location: '122',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
      {
        _id: '602b2d4d94bd6e1e4f85deb8',
        room_id: '602b1b4d94bd6e1e4f85de7a',
        location: '122',
        taskTitle: 'Touch up paint',
        taskDescription: 'Paint is peeling in the corner of room.',
        department: 'Maintenance',
        createdAt: '2021-02-11T22:00:00.000Z',
        dueBy: '',
        isComplete: true,
        isCleaning: false,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Emily Shaw',
        employeeCreated: 'Tina Tkatchenko',
        employeeAssigned: 'Emily Shaw',
        employeeAssigned_id: 'auth0|602c30525eae860068e4576a',
        employeeCompleted_id: 'auth0|602c30525eae860068e4576a',
        employeeCreated_id: 'auth0|602c1cb963504c0071df24a6',
      },
    ],
  },
  {
    _id: '602b1b4d94bd6e1e4f85de7b',
    roomType: 'Single Queen',
    price: '100.00',
    amenities: ['TV'],
    roomType_id: '602b100e541461fcab3686a7',
    roomNumber: '123',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: false,
    reservation_id: '',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea5',
        room_id: '602b1b4d94bd6e1e4f85de7b',
        location: '123',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deaf',
        room_id: '602b1b4d94bd6e1e4f85de7b',
        location: '123',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
      {
        _id: '602b2d4d94bd6e1e4f85deb9',
        room_id: '602b1b4d94bd6e1e4f85de7b',
        location: '123',
        taskTitle: 'Replace toilet and sink',
        taskDescription:
          'Guests had a pretty wild party and somehow the sink ended up in the pool and the toilet has the front missing. Please replace both.',
        department: 'Maintenance',
        createdAt: '2021-02-14T22:00:00.000Z',
        dueBy: '',
        isComplete: false,
        isCleaning: false,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'Tina Tkatchenko',
        employeeAssigned: 'Emily Shaw',
        employeeAssigned_id: 'auth0|602c30525eae860068e4576a',
        employeeCompleted_id: '',
        employeeCreated_id: 'auth0|602c1cb963504c0071df24a6',
      },
    ],
  },
  {
    _id: '602b1b4d94bd6e1e4f85de7c',
    roomType_id: '602b100e541461fcab3686a7',
    roomType: 'Single Queen',
    price: '100.00',
    amenities: ['TV'],
    roomNumber: '124',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b3b5e94bd6e1e4f85dece',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea6',
        room_id: '602b1b4d94bd6e1e4f85de7c',
        location: '124',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb0',
        room_id: '602b1b4d94bd6e1e4f85de7c',
        location: '124',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
      {
        _id: '602b2d4d94bd6e1e4f85deba',
        room_id: '602b1b4d94bd6e1e4f85de7c',
        location: '124',
        taskTitle: 'Leaking Sink',
        taskDescription: '',
        department: 'Maintenance',
        createdAt: '2021-02-15T23:00:00.000Z',
        dueBy: '2021-02-16T16:00:00.000Z',
        isComplete: false,
        isCleaning: false,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'Tina Tkatchenko',
        employeeAssigned: 'Emily Shaw',
        employeeAssigned_id: 'auth0|602c30525eae860068e4576a',
        employeeCompleted_id: '',
        employeeCreated_id: 'auth0|602c1cb963504c0071df24a6',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602b1f2694bd6e1e4f85de87',
    roomType_id: '602b1139541461fcab3686ab',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    roomNumber: '131',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b2ffc94bd6e1e4f85debb',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea7',
        room_id: '602b1f2694bd6e1e4f85de87',
        location: '131',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb1',
        room_id: '602b1f2694bd6e1e4f85de87',
        location: '131',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602b1f2694bd6e1e4f85de88',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    roomType_id: '602b1139541461fcab3686ab',
    roomNumber: '132',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea8',
        room_id: '602b1f2694bd6e1e4f85de88',
        location: '132',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb2',
        room_id: '602b1f2694bd6e1e4f85de88',
        location: '132',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
  },
  {
    _id: '602b1f2694bd6e1e4f85de89',
    roomType_id: '602b1139541461fcab3686ab',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    roomNumber: '133',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b3b1794bd6e1e4f85debc',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85dea9',
        room_id: '602b1f2694bd6e1e4f85de89',
        location: '133',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb3',
        room_id: '602b1f2694bd6e1e4f85de89',
        location: '133',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602b1f2694bd6e1e4f85de8a',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    roomType_id: '602b1139541461fcab3686ab',
    roomNumber: '134',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85deaa',
        room_id: '602b1f2694bd6e1e4f85de8a',
        location: '134',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb4',
        room_id: '602b1f2694bd6e1e4f85de8a',
        location: '134',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
  },
  {
    _id: '602b1f2694bd6e1e4f85de8b',
    roomType_id: '602b1139541461fcab3686ab',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    roomNumber: '135',
    floorNumber: 1,
    isClean: true,
    isOccupied: false,
    isUsable: true,
    reservation_id: '602b3b5e94bd6e1e4f85decc',
    tasks: [
      {
        _id: '602b282c94bd6e1e4f85deab',
        room_id: '602b1f2694bd6e1e4f85de8b',
        location: '135',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-15T11:00:00.000Z',
        dueBy: '2021-02-15T20:00:00.000Z',
        isComplete: false,
        isCleaning: true,
        completedAt: '',
        employeeCompleted: '',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: '',
        employeeCreated_id: '',
      },
      {
        _id: '602b29a394bd6e1e4f85deb5',
        room_id: '602b1f2694bd6e1e4f85de8b',
        location: '135',
        taskTitle: 'Clean Room',
        taskDescription: 'Daily Cleaning',
        department: 'Housekeeping',
        createdAt: '2021-02-14T11:00:00.000Z',
        dueBy: '2021-02-14T20:00:00.000Z',
        isComplete: true,
        isCleaning: true,
        completedAt: '2021-02-14T19:00:00.000Z',
        employeeCompleted: 'Spencer Brook',
        employeeCreated: 'system',
        employeeAssigned: 'Spencer Brook',
        employeeAssigned_id: 'auth0|602c301102061a0069805815',
        employeeCompleted_id: 'auth0|602c301102061a0069805815',
        employeeCreated_id: '',
      },
    ],
    currentGuests: [
      {
        firstName: 'Guest',
        lastName: 'One',
        phone: '123-456-7890',
        email: 'guestOne@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Two',
        phone: '123-456-7890',
        email: 'guestTwo@madeup.com',
      },
      {
        firstName: 'Guest',
        lastName: 'Three',
        phone: '123-456-7890',
        email: 'guestThree@madeup.com',
      },
    ],
  },
  {
    _id: '602ebd100cf9b88dfc0f3da8',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    reservation_id: '',
    isClean: true,
    isOccupied: false,
    isUsable: true,
    roomType_id: '602b1139541461fcab3686ab',
    floorNumber: 7,
    roomNumber: '7777',
    tasks: [],
  },
  {
    _id: '602c1e795eb7f6c29dbab174',
    roomType: 'Double Queen',
    price: '150.00',
    amenities: ['TV', 'Non-Smoking'],
    floorNumber: 5,
    isClean: false,
    isOccupied: true,
    isUsable: true,
    reservation_id: null,
    roomNumber: '8702',
    roomType_id: '602b1139541461fcab3686ab',
    tasks: [
      {
        _id: '602ef1700d300a001f7633ab',
        taskDescription: 'Perform daily cleaning tasks.',
        dueBy: '2021-02-19T17:00:00.000Z',
        completedAt: '',
        isComplete: false,
        isCleaning: true,
        employeeCreated: 'system',
        employeeCreated_id: '',
        employeeAssigned: '',
        employeeAssigned_id: '',
        employeeCompleted: '',
        employeeCompleted_id: '',
        room_id: '602c1e795eb7f6c29dbab174',
        location: '8702',
        taskTitle: 'Daily Housekeeping',
        department: 'Housekeeping',
        createdAt: '2021-02-18T23:00:00.002Z',
      },
    ],
  },
];

let filteredSampleRooms = sampleRooms
  .filter((room) => room.isOccupied === false)
  .filter((room) => room.roomType === 'Double Queen');

const SearchForReservations = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [resId, setResId] = useState('');
  const [reservations, setReservations] = useState(sampleData);
  const [selectedReservation, setSelectedReservation] = useState({});
  const [roomList, setRoomList] = useState(filteredSampleRooms);
  const [selectedRoom, setSelectedRoom] = useState({});

  //functions
  const axiosRequestForName = () => {
    axios
      .get(`${url}/reservations`, {
        params: {
          firstName: name,
        },
      })
      .then((results) => {
        setReservations(results.data);
        return;
      })
      .catch((err) => console.log(err, 'you have an error'));
  };

  const axiosRequestForResId = () => {
    axios
      .get(`${url}/reservations`, {
        params: {
          reservation_id: resId,
        },
      })
      .then((results) => {
        setReservations(results.data);
        return;
      })
      .catch((err) => console.log(err, 'you have an error'));
  };

  const addPage = (jumpTo) => {
    if (jumpTo) {
      setPage(() => jumpTo);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const subtractPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

//   const updateName = (e) => {
//     setName(e.target.value);
//   };
//   //   };

//   const subtractPage = () => {
//     setPage((prevPage) => prevPage - 1);
//   };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateResId = (e) => {
    setResId(e.target.value);
  };

  const updateSelectedReservation = (index) => {
    setSelectedReservation(reservations[index]);
  };

  if (page === 3) {
    return (
      <AvailableRooms
        name={name}
        resId={resId}
        addPage={addPage}
        subtractPage={subtractPage}
        selectedReservation={selectedReservation}
        roomList={roomList}
        setRoomList={setRoomList}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />
    );
  }

  if (page === 4) {
    return (
      <ConfirmationPage
        addPage={addPage}
        subtractPage={subtractPage}
        reservationData={reservations}
        selectedReservation={selectedReservation}
        setName={setName}
        setResId={setResId}
        selectedRoom={selectedRoom}
      />
    );
  }

  // unfinished method for data validation
  let nameValidate = null;
  if (name === 'blop') {
    nameValidate = <div> your input is a blop </div>;
  }

  //page navigation
  if (page === 2) {
    return (
      <CheckInReservationList
        name={name}
        resId={resId}
        addPage={addPage}
        subtractPage={subtractPage}
        reservationData={reservations}
        updateSelectedReservation={updateSelectedReservation}
      />
    );
  }

  if (page === 3) {
    return (
      <AvailableRooms
        name={name}
        resId={resId}
        addPage={addPage}
        subtractPage={subtractPage}
        selectedReservation={selectedReservation}
      />
    );
  }

  if (page === 4) {
    return (
      <ConfirmationPage
        addPage={addPage}
        subtractPage={subtractPage}
        reservationData={reservations}
        selectedReservation={selectedReservation}
        setName={setName}
        setResId={setResId}
      />
    );
  }

  return (
    <HalfRoundDiv className='mainBox' margin={'0 auto'}>
      <div className='checkInTitleDiv'> Check-In Search for Reservations</div>
      <div className='centeredInputBars'>
        <label className='checkinLabels'> Name</label> <br />
        <InputTypeText
          id='checkInGuestName'
          width={'100%'}
          value={name}
          onChange={updateName}
        />
        {nameValidate}
        <label className='checkinLabels'> Reservation ID</label> <br />
        <InputTypeText
          id='reservation'
          width={'100%'}
          value={resId}
          onChange={updateResId}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormButton
          backgroundColor='berry'
          className='searchButtonPlacement'
          onClick={(e) => {
            if (name.length !== 0) {
              axiosRequestForName();
              addPage();
            } else {
              axiosRequestForResId();
              addPage();
            }
          }}
          margin={'0 auto'}
        >
          {' '}
          Search{' '}
        </FormButton>
      </div>
    </HalfRoundDiv>
  );
};

export default SearchForReservations;
