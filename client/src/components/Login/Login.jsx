// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log('Submitting with values:', values); // Log values here
        const response = await axios.post('http://localhost:5173/login', {
          username: values.name,
          email: values.email,
        });
        console.log('Form submitted:', response.data);
        resetForm();
        navigate('/todo');
      } catch (error) {
        console.error('The user does not exist.', error);
      }
      setSubmitting(false);
    },
  });

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 #06b6d4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="#111827 text-2xl font-bold sm:text-3xl">Log in</h3>
            <p className="text-zinc-400">
              Dont have an account yet? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
            </p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="font-medium #111827">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full mt-1 px-3 py-2 #dc2626 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="font-medium #111827">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full mt-2 px-3 py-2 #dc2626 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            {formik.isSubmitting ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
