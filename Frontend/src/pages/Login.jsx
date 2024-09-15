import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login