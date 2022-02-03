import React, {useState} from "react";
import users from '../context/data';

function Users() {
    const [search,SetSearch] = useState("");
    onchange = e => {
      SetSearch(e.target.value);
    };
    const filtereduser = users.filter(user => {
      return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  
      
  return (
    <>
    <div className="search-box">
      <input type="text" onChange={onchange}/>
    </div>
      <div className="cards-item">
        {filtereduser.map((item)=>{
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
        
      </div>

    </>
  );
}

export default Users;
