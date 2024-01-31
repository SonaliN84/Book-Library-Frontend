import { useState, useRef } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin,setIsLogin] = useState(true);
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  
  const formSubmitHandler = (event) =>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    
    let url;
    if(isLogin){
        // url ="/login"
    }
    else{
       // url ="/signup"
    }

    // sending backend login/signup request.
  }
  return (
    <div className="form-box">
    <div class="form-container">
      <div class="heading">{isLogin ? 'Login' : 'Sign Up'}</div>
      <form class="form" onSubmit={formSubmitHandler}>
        <input
          required=""
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          ref={emailInputRef}
        />
        <input
          required=""
          class="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
        
        <button class="login-button" type="submit"  >{isLogin ? 'Login' : 'Sign Up'}</button>

        <div class="sign-up">
        {isLogin ? "Don't have an account? " : "Already have an account?"}<span className="sign-up-name" onClick={switchAuthModeHandler}><u>{isLogin ? 'Sign Up' : 'Login'}</u></span>
        </div>
      </form>
    </div>
    </div>
  );
};
export default AuthForm;
