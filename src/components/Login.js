import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const handleInputId = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="input_ID">
        <label htmlFor="input_id">
          <input
            type="text"
            name="input_id"
            value={username}
            onChange={handleInputId}
          />
        </label>
      </div>

      <div className="input_PW">
        <label htmlFor="input_pw">
          <input
            type="password"
            name="input_pw"
            value={password}
            onChange={handleInputPw}
          ></input>
        </label>
        <button type="submit" onClick={handleSubmit}>
          로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
