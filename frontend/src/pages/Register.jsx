import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Register() {
  const [form, setForm] = useState({
    username: "", email: "", password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
     
      <form onSubmit={handleSubmit}>
         <h2>Create your account</h2>
      <p>Start your journey with PlacementPilot</p>
      
        <label htmlFor="">Full name</label>
        <input placeholder="John Doe"
          onChange={(e)=>setForm({...form,username:e.target.value})}/>
          <label htmlFor="">Email address</label>
        <input type="email" placeholder="you@example.com"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>
          <label htmlFor="">Password</label>
        <input type="password" placeholder="********"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <button>Create Account </button>
        <p>Already have an account?</p>
          <Link to="/login" className="btn secondary">
            Sign In
          </Link>
      </form>
    </div>
  );
}