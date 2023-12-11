import { useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";




// import { amount,duration } from './exports/constants';

function useContextComp3(props) {
  const user = useContext(UserContext);

  return (
    <>
         <p>
         useContextComp3
        </p>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default useContextComp3;
