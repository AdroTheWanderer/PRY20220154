import { useContext, useEffect, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import { getAllUsers, createUser } from "../../services/UserServiceApi";

const Login = () => {
  const [error, setError] =useState(false);
  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) =>{
    e.preventDefault();

    //signInWithUsernameAndPassword(auth, username, password)
    //  .then((userCredential) => {
    //    // Login in
    //    const user = userCredential.user;
    //    dispatch({type:"LOGIN", payload:user})
    //    navitage("/")
    //  })
    //  .catch((error) => {
    //    setError(true)
    //  });
  };

  const [data, setData] = useState([])
  useEffect (() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": "admin",
      "password": "123456"
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://probarapi.fernandochahua.com/api/v1/auth/signin", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  })

  return (
    <div className="login">
      <h2 className="logo">probARadmin</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="username" 
          placeholder="username" 
          onChange={e=>setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="password" 
          onChange={e=>setPassword(e.target.value)} 
        />
        <button type="submit">Iniciar Sesión</button>
        {error && <span>Correo o contraseña equivocada!</span>}
      </form>
    </div>
  )
};

export default Login