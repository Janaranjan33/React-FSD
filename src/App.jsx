import { useRef, useState } from "react";


const App = () => {

      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');


      // const nameRef = useRef(null);
      // const emailRef =  useRef(null);
      // const passwordRef = useRef (null);

  function handleLogin (event){
    event.preventDefault();

    // const name = event.target.name;
    //  const email = event.target.email;
    //   const password = event.target.password;
 

      

      // console.log( password.value, name.value,email.value)

      // console.log(name.current.value)

      console.log(name, email, password)


  }

    function handleNameChange (event) {
      setName(event.terget.value)
    }

    function handleEmailChange(){
      setEmail(event.target.value)
    }

    function handlePasswordChange(){

      setPassword(event.target.value)

    }


  return (
    <div>
      <h1>Login</h1>
          <form onSubmit= {handleLogin} >
            <input type = "text" placeholder="Name" name="name" value={name} onChange={handleNameChange}/>
            &nbsp;
            <input type = "email" placeholder = "email" name = "email"  value={email} onChange={handleEmailChange}/>
            &nbsp;
            <input type="password" placeholder="password" name = "password"  value={password} onChange={handlePasswordChange}/>
            &nbsp;
            <button type="submit">Login</button>
            &nbsp;
            <button type = "submit">Register</button>
            </form>
          
        
    </div> 
  )
}

export default App