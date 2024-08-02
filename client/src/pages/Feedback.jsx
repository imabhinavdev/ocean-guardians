import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./styles/feedback.css";

const Feedback = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log('Submitting with values:', values);
        const response = await axios.post('http://localhost:5173/feedback', values);
        console.log('Feedback submitted:', response.data);
        resetForm();
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="feed flex items-center justify-center min-h-screen bg-gray-900 container-fluid" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      <div className="glass p-8 w-full max-w-md">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 glassField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 glassField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-white">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full px-3 py-2 glassField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500">{formik.errors.subject}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 glassField"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full glass-button"
            >
              {formik.isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
