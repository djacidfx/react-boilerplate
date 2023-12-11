import { Link } from "react-router-dom"

function Navigation(props) {

    return (<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
  <li class="nav-item">
     <Link className="nav-link"  to="/home">Home</Link>
    </li>
    <li class="nav-item">
     <Link className="nav-link" to="/amount">Change amount(Redux)</Link>
    </li>

    <li class="nav-item">
     <Link className="nav-link"  to="/display">Display</Link>
    </li>

    <li class="nav-item">
     <Link className="nav-link"  to="/memo">Memo</Link>
    </li>

    <li class="nav-item">
     <Link className="nav-link"  to="/context">Use context</Link>
    </li>
  </ul>
</div>
</nav>
    </>)


}
export default Navigation;