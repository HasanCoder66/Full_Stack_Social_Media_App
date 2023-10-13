import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media App.{" "}
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="UserName" type="text" className="loginInput" />
            <input placeholder="Email Address" type="email" className="loginInput" />
            <input placeholder=" Password" type="password" className="loginInput" />
            <input placeholder="Confirm Password " type="password" className="loginInput" />
            <button className="loginButton"> Sign Up</button>
            <button className="loginRegisterButton">
              Login into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
