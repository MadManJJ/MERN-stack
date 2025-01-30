import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {email, password};
  const handleSubmit = async (e) => {
    e.preventDefault(); // stop refreshing the page

    console.log("checking")
    const response = await fetch("/admin/about", {
      method: "POST", 
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },      
    });
    const json = await response.json(); 
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={emptyFields.includes("email") ? 'error' : ''}
      />

      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={emptyFields.includes("password") ? 'error' : ''}
      />

      <button>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
