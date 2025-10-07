import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.tsx"; 
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      return setError("Please fill in all fields");
    }
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard");
    } catch (error: any) {
      setError("Failed to log in: " + error.message);
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`auth-button primary ${loading ? "loading" : ""}`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <button
          type="submit"
          className="auth-button google"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <div className="auth-links">
          <Link to="/forgot-password" className="forgot-link">
            Forgot your password?
          </Link>
        </div>
        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
