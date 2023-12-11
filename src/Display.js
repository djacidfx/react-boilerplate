import React from "react";
import store from "./redux/store";
class Display extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return (<>
        <p>This is display Component
            </p> 
            redux value {store.getState()}
            <button className="btn btn-info">Sample</button>
        </>)
    }
}
export default Display;