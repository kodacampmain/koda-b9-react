import { useEffect } from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log("Error", errors);
  }, [errors]);
  return (
    <form
      className="p-5 [&_input]:my-border-[#82a022] [&_input]:p-1 [&_input]:ml-2 flex flex-col gap-3 [&_input]:bg-primary [&_input]:text-secondary text-blue-400 uw:text-5xl"
      onSubmit={handleSubmit((form) => {
        console.log(form);
      })}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          // className="bg-(--primary) text-(--secondary)"
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          // className="bg-(--primary) text-(--secondary)"
          type="password"
          id="password"
          {...register("pwd", {
            required: true,
            minLength: {
              value: 6,
              message: "Minimum Length of Password is 6",
            },
          })}
        />
      </div>
      {errors?.pwd && <p className="text-red-500">{errors.pwd.message}</p>}
      <button
        type="submit"
        className="bg-gray-200 hover:bg-gray-300 cursor-pointer p-2"
      >
        Login
      </button>
    </form>
  );
}

export default HookForm;
