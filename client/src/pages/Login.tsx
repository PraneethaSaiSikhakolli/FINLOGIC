import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { toast, Toaster } from "react-hot-toast";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password is required"),
});

type LoginForm = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginForm) => {
    console.log("Login:", data);
    toast.success("Login successful!");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 px-4 py-12">
      <Toaster position="top-center" />
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 sm:p-14">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-2">Login</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Welcome back to FinLogix</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2.5 rounded-xl hover:bg-pink-700 transition font-medium shadow"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-pink-600 hover:underline font-medium">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
