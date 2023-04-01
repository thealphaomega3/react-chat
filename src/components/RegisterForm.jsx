import { basicSchema } from '../schemas/index.js';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import app from '../firebase';

const RegisterForm = () => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { values, handleBlur, handleChange, errors, isSubmitting, resetForm } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      validationSchema: basicSchema,
      validateOnBlur: true,
      validateOnChange: false
    });
  const submitRegisterForm = (event, email, password) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsSubmitted(true);
        resetForm();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
      });
  };

  return (
    <div className="page">
      <form
        action=""
        onSubmit={(event) =>
          submitRegisterForm(event, values.email, values.password)
        }
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
          onBlur={handleBlur}
          id="email"
          className={errors.email ? 'error' : 'input-field'}
        />
        <p className="error-message">{errors.email}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
          onBlur={handleBlur}
          id="password"
          className={errors.password ? 'error' : 'input-field'}
          onFocus={() => setIsPasswordFocused(true)}
        />
        {isPasswordFocused && (
          <p>
            Password must contain 8 characters, one uppercase letter, one number
            and one special character.
          </p>
        )}
        <p className="error-message">{errors.password}</p>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          onBlur={handleBlur}
          id="confirmPassword"
          className={errors.confirmPassword ? 'error' : 'input-field'}
        />
        <p className="error-message">{errors.confirmPassword}</p>
        <button
          className={isSubmitting ? 'inactive' : 'input-field'}
          disabled={isSubmitting}
        >
          Submit
        </button>
        {isSubmitted && (
          <p style={{ color: 'green' }}>You registered succesfully!</p>
        )}
        <p>Already have an account?</p>
        <Link to="/login">Sign in</Link>
      </form>
    </div>
  );
};

export default RegisterForm;
