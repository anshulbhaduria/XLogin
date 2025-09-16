import { useState } from "react";
function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "user" && form.password === "password") {
      setIsCorrect(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        {error && <p>{error}</p>}
        {isCorrect ? (
          <div>
            <p>Welcome, User</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <button>Submit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
