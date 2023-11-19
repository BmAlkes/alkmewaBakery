import { Link } from "react-router-dom";
import logoImg from "../../assets/Alkmewa.png";
import Container from "../../components/container";

const Login = () => {
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/">
          <img src={logoImg} alt="logo site" className="w-full" />
        </Link>
        <form className="bg-slate-300 max-w-xl w-full rounded-lg"></form>
      </div>
    </Container>
  );
};

export default Login;
