import React, { useState } from 'react';
import './Form.css';
import Login from './login';
import FormSuccess from './login';

const loginSubmit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const click= alert("You have Successfully registered")

  function submitLogin() {
    setIsSubmitted(true);
  

  }


  return (
    <>
      <div >
      
        {!isSubmitted ? (
          <Login submitForm={submitLogin} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </>
  );
};

export default loginSubmit;