// LOGIN PAGE
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

import "./Login.scss";

function Login() {
  const { currentUser, login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    // CONTAINER
    <div className="login">
      {/* LOGIN CARD */}
      <div className="card">
        {/* LEFT SIDE OF CARD */}
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            beatae repellat dolor sequi odio voluptate qui sed placeat vel
            delectus?
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        {/* RIGHT SIDE OF CARD */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
