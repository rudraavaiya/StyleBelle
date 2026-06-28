import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill all fields.");
    } else if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
    } else if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
    } else {
      setMessage("Login successful. This is frontend validation only.");
    }
  }

  return (
    <div className="min-h-[70vh] flex justify-center items-center px-6 bg-pink-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <p className="text-gray-600 text-center mb-6">
          Access your StyleBelle account
        </p>

        <label className="font-medium">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          className="border px-4 py-3 rounded-lg w-full mt-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="border px-4 py-3 rounded-lg w-full mt-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-pink-700 text-white w-full py-3 rounded-lg font-medium">
          Login
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Login;