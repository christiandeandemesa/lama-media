// LOGIN PAGE
import "./Login.scss";

function Login() {
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
          <button>Register</button>
        </div>

        {/* RIGHT SIDE OF CARD */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
