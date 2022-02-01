import React, { useContext } from "react";
import users from './data';

const usersdata = users;
const usersContext = React.createContext(usersdata);

export default function context() {
  return (
  <usersContext.Provider value={usersdata}>
  </usersContext.Provider>
);
}
