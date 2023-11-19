import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/Alkmewa.png";
import Container from "../../components/container";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebase.config";

const schema = z.object({
  email: z
    .string()
    .email("Insert a Valid email")
    .nonempty("campo email e obrigatorio"),
  password: z.string().nonempty("Campo senha e obrigatorio"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }
    handleLogout();
  }, []);
  const handleSubmitForm = async (data: FormData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/dashboard", { replace: true });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/">
          <img src={logoImg} alt="logo site" className="w-full" />
        </Link>
        <form
          className=" max-w-xl w-full rounded-lg flex flex-col gap-7"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input
            type="email"
            placeholder="digite seu email"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <Input
            type="password"
            placeholder="digite sua senha"
            name="password"
            error={errors.password?.message}
            register={register}
          />
          <button
            className="w-full h-10 bg-[#aa7bc3] rounded-md text-white font-semibold cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
