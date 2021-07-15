import React, {useState} from 'react';
import validate from './ValidateInfo';
import useForm from './useForm';
import './Form.css';
import img1 from './img1.jpg'


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
 );

    

  return (
    
      
    <div className='form-container'>
        <div>
        
          <img className='form-img' src={img1} alt='spaceship' />
        
        </div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Welcome back
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit' id='submitform'>
        
          Login
        </button>
        <span className='form-input-login'>
          Already have an account? Register <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;