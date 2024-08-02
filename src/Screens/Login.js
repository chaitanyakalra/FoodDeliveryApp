import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',

  });



  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('Email:', credentials.email);
    // console.log('Password:', credentials.password);


    try {

      const response = await fetch('http://localhost:4900/api/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        mode: 'cors',
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,

        }),
      });

      console.log("Fetch working");

      const json = await response.json();
      console.log("json", json);

      if (!json.success) {
        alert('Enter Valid Credentials');
      } else {

        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("username", json.name);
        console.log(localStorage.getItem("authToken"));
        console.log(localStorage.getItem("username"));


        // localStorage.setItem("username", credentials.name);
        // console.log("Stored username:", localStorage.getItem("username"));

        navigate('/');
      }

      console.log('Response:', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className='w-50 m-auto mt-5 saiba-font' style={{ }}>
          <h2>
            Sign in to your account
          </h2>
        </div>
        {/* <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
              autoComplete="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/creatUser" className="m-3 btn btn-danger">
            I am a new User
          </Link>
        </form> */}

        <form className='w-50 m-auto mt-5 ' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/creatuser" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>
      </div>


      <div style={{position: 'absolute', bottom: '0', width: '100%', textAlign: 'center' }}>

        <Footer />
      </div>
    </div>
  );
}


