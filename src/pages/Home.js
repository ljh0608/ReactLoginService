import Login from "../components/Login";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div>
        <h2>Home입니다.</h2>
      </div>
      <div>
        <button onClick={() => navigate("/login")}>Login하기</button>
      </div>
    </div>
  );
};

export default Home;
