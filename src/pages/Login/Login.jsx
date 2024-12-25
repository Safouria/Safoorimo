import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/safourimo 3.svg';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [errors, setErrors] = useState({ email: '', password: '', name: '' });

  const navigate = useNavigate();



  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    let errors = { email: '', password: '', name: '' };

    if (!validateEmail(email)) {
      formIsValid = false;
      errors.email = "Please enter a valid email address";
    }

    if (!validatePassword(password)) {
      formIsValid = false;
      errors.password = "Password must be at least 6 characters long";
    }

    if (signState === "Sign Up" && !name) {
      formIsValid = false;
      errors.name = "Name is required";
    }

    setErrors(errors);

    if (formIsValid) {
      console.log("Form is valid, proceed with authentication");

      navigate('/');
        }
  };

  return (
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Safoorimo?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
