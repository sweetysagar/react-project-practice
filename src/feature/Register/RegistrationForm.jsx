import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegistrationValidation } from "./validation";


export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegistrationValidation),
  });


  return (
    <form onSubmit={handleSubmit((data) => console.log('submit data:', data))}>
      <div className="mb-2">
        <label>Name</label>
        <input className=" outline-2 mb-1" id="name" type="text" {...register("name")} />
        { errors.name && <p>{errors?.name?.message}</p>}
        </div>
        <div className="mb-2">
        <label>Password</label>
        <input className= "outline-2 mb-1" id="password" type="password" {...register("password")} />
        {errors.password  && <p>{errors?.password?.message}</p>}
        </div>
        <div >
        <label>Email</label>
        <input className= "outline-2 mb-1" id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors?.email?.message}</p>}
        </div>
        <div className="mb-2">
        <label>Age</label>
        <input className=" outline-2 mb-1" id="age" type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors?.age?.message}</p>}
      </div>
      <div>
        <button type="submit" className="mt-2 px-3 py-1 bg-blue-600 text-white">Register</button>
      </div>
    </form>
  );
}