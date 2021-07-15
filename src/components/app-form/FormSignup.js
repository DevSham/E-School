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
          Get started with E-School Today
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Fullname</label>
          <input
            className='form-input'
            type='text'
            name='Fullname'
            placeholder='Enter your username'
            value={values.Fullname}
            onChange={handleChange}
          />
          {errors.Fullname && <p>{errors.Fullname}</p>}
        </div>
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
          <label className='form-label'>Role</label>
          <input
            className='form-input'
            type='text'
            name='Role'
            placeholder='Enter your Role/Tittle'
            value={values.Role}
            onChange={handleChange}
          />
          {errors.Role && <p>{errors.Role}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Education Level</label>
          <input
            className='form-input'
            type='text'
            name='education_level'
            placeholder='Enter your Education Level'
            value={values.education_level}
            onChange={handleChange}
          />
          {errors.education_level && <p>{errors.education_level}</p>}
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
          
        </div>
        <button className='form-input-btn' type='submit' id='submitform'>
        
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;