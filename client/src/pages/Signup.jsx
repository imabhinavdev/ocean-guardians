// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./styles/login.css";

const SignupForm = () => {
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
        const response = await axios.post('http://localhost:5173/signup', {
          username: values.name,
          email: values.email,
        });
        console.log('Form submitted:', response.data);
        resetForm();
      } catch (error) {
        console.error('An error occurred while submitting the form.', error);
      }
      setSubmitting(false);
    },
  });

  return (
    <main className="conta flex items-center justify-center min-h-screen bg-gray-900 conntainer-fluid" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh" }}>
      <div className="max-w-sm w-full text-gray-600 log">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="#111827 text-2xl font-bold sm:text-3xl">Sign up</h3>
            <p className="text-black">
              Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
            </p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-12 space-y-11 flex flex-col container-fluid">
          <div>
            <label htmlFor="name" className="font-medium #111827">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full mt-1 px-3 py-2 outline-none log-field"
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
              className="w-full mt-1 px-3 py-2 outline-none log-field"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn"
          >
            {formik.isSubmitting ? 'Submitting...' : 'Create account'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignupForm;
