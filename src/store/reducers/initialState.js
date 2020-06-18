import {userTypes} from "../../constants/appConstants";

const tmpJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiVVNFUiIsInVzZXJJZCI6ImNrYmo2MDRzaTAwMDB6MmphNG1jNDU1YnkiLCJpYXQiOjE1OTI0NTY3MDh9.31NRvHYcnsP0M3fKYnsKXOns2km8hbRL3MU-5d5VoYE';

export const authState = {
  authToken: tmpJwt,
  userType: userTypes.USER
};

export const userState = {}

export const appState = {
  trainers: [], // trainer listing
  users:{ // detailed user info

  }
}

