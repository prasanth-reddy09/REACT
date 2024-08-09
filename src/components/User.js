import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user">
      <h1>Name : {props.name}</h1>
      <h2>Location : Nuzvidu</h2>
      <h3>{count}</h3>
    </div>
  );
};

export default User;
