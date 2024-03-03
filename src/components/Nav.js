
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/sing-up");
  };

  return (
   <>
      <h1>E-com dashboard</h1>
   <div className="navbars">
   { auth ?   <ul >
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          
          
          
          <li><Link onClick={logout} to="/sing-up">Logout({JSON.parse(auth).name}) </Link></li>
   
</ul>
        :
      <ul className="text-right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sing-up">singup</Link>
          </li>
         

        </ul>
    }
      </div>
   </>
  );
};

export default Nav;
