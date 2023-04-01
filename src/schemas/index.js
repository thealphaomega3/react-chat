import * as yup from 'yup';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegex, 'Please enter a valid password')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
});
