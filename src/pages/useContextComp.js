import { useState} from "react";
import ReactDOM from "react-dom/client";
import UseContextComp1 from "./useContextComp1";
import { UserContext } from "./UserContext";



function useContextComp(props) {
 
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1> <input type="text" name="user_name" onKeyUp={(e) => setUser(e.target.value)} />
        <UseContextComp1 user={user} />
      </UserContext.Provider>
    );
}

export default useContextComp;
