import { buttonsSignUp } from "../data/buttonsSignUp";
import { useForm } from "react-hook-form";
import LoginButtonNetwork from "../components/LoginButtonNetwork";
import Footer from "../components/Footter";
import Navbar from "../components/Navbar";
import { User } from "../types/commont.types";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const navigate = useNavigate();

  function onSubmit(data: User) {
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        profilePicture: data.profilePicture,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.data._id) {
          navigate("/login");
        } else {
          toast.warn("user not created");
        }
      })
      .catch(() => {
        toast.error("Server error");
      });
    reset();
  }

  function passwordInputAndConfirmMatch(value: string): string | boolean {
    const passwordElement = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const password = passwordElement.value;
    return value === password || "Las contraseñas no coinciden";
  }

  return (
    <>
      <Navbar />
      <main className="w-full flex justify-center py-6 min-h-screen">
        <section className="w-[640px] p-[48px] bg-[#fff] flex flex-col justify-center max-w-screen-md">
          <div className="flex justify-center flex-col px-8">
            <h1 className="text-black font-bold text-3xl text-center">
              Welcome to DEV Community
            </h1>
            <p className="pb-8 text-md text-center font-semibold p">
              DEV Community is a community of 1,096,406 amazing developers
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {buttonsSignUp.map((button, index) => {
              return (
                <LoginButtonNetwork
                  key={`button-${index}`}
                  svg={button.svg}
                  title={button.title}
                  color={button.color}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-canter relative w-full top-3">
            <div className="flex justify-cente items-canter pt-4 text-lg h-16 w-full">
              <span className="w-full block bg-gray-200 h-0.5"></span>
            </div>
            <span className="absolute bg-[#fff] top-1 px-3 flex gap-1">
              Already have an account?
              <Link to={"/login"}>
                <a href="" className="text-[#3B49DF]">
                  Log in.
                </a>
              </Link>
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label
              className="font-normal text-md text-[#171717]"
              htmlFor="userName"
            >
              User name:
            </label>
            <input
              id="name"
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="text"
              placeholder="User name"
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_ -]{3,25}$/,
                  message: "El numbre de suario debe tener al menos 3 caractes",
                },
              })}
            />
            {errors.name && (
              <p className="text-[#8e8e8e]">{errors.name.message}</p>
            )}
            <label
              className="font-normal text-md text-[#171717]"
              htmlFor="userImage"
            >
              User profile image:
            </label>
            <input
              id="profilePicture"
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="text"
              placeholder="Url user img"
              {...register("profilePicture", {
                required: false,
                pattern: {
                  value:
                    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)$/,
                  message: "La direccion URL agregada no esa valida",
                },
              })}
            />
            {errors.profilePicture && (
              <p className="text-[#8e8e8e]">{errors.profilePicture.message}</p>
            )}
            <label
              className="font-normal text-md text-[#171717]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="email"
              placeholder="useremail@mail.com"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Ingresa un correo electronico valido",
                },
              })}
            />
            {errors.email && (
              <p className="text-[#8e8e8e]">{errors.email.message}</p>
            )}
            <label
              className="font-normal text-md text-[#171717]"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.",
                },
              })}
            />
            {errors.password && (
              <p className="text-[#8e8e8e]">{errors.password.message}</p>
            )}
            <label
              className="font-normal text-md text-[#171717]"
              htmlFor="confirmPassword"
            >
              Confirm password:
            </label>
            <input
              id="confirmPassword"
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "La contraseñas no coinciden",
                },
                validate: passwordInputAndConfirmMatch,
              })}
            />
            {errors.confirmPassword && (
              <p className="text-[#8e8e8e]">{errors.confirmPassword.message}</p>
            )}
            <div className="bg-[#3B49DF] text-[#fff] h-12 flex items-center justify-center font-semibold rounded cursor-pointer">
              <input
                id="submitData"
                className="w-full h-full"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
