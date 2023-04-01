import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import '../App.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitLoginForm = (event, email, password) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        setIsSubmitted(true);
        resetForm();
        navigate('/home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const { values, handleBlur, handleChange, errors, isSubmitting, resetForm } =
    useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: basicSchema
    });

  return (
    <div>
      <form
        onSubmit={(event) =>
          submitLoginForm(event, values.email, values.password)
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
          className="input-field"
        />

        <button
          className={isSubmitting ? 'inactive' : 'input-field'}
          disabled={isSubmitting}
        >
          Submit
        </button>
        {isSubmitted && (
          <p style={{ color: 'green' }}>
            Login successful. Redirecting to home..
          </p>
        )}
        <p>No account yet?</p>
        <Link to="/register">Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
