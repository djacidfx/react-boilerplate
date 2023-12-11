import store from "./redux/store"
import Navigation from "./navigation"

function Layout(props) {
    return (<>
  <br />
 <Navigation />  <br />
    
    <props.comp color={props.color} />
  
    <br />  <p>this is layout foot</p> <br />
    redux value {store.getState()}
    </>)
  }
  
  export default Layout