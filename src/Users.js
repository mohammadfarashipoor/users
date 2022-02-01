import React, { useContext } from "react";
import users from './context/data';

const usersdata = users;
const usersContext = React.createContext(usersdata);


function Users() {
    const usersitem = useContext(usersContext);
  return (
    <>
    {usersitem.map((item)=>{
      return (
        <div className="card "key={item.id}>
    
       <img
       src={item.image}
       alt={item.name}
       className="img-user"
       />
       <h3>{item.name}</h3>
       <h4>{item.title}</h4>
       </div>

      );
    })}
            
    </>
  );
}

export default Users;
