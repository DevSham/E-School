import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './login';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const click= alert("You have Successfully registered")

  function submitForm() {
    setIsSubmitted(true);
  

  }


  return (
    <>
      <div >
      
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </>
  );
};

export default Form;