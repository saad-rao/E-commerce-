import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Here you would implement your form submission logic
      // For example, using fetch to send data to your backend
      // const response = await fetch('your-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulating submission success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="w-full">
      <div className="relative mb-8">
        <img 
          src="src/assets/Contact.png" 
          alt="Contact Background" 
          className="w-full h-64 object-cover rounded-lg"
        />
        {/* <div className="absolute bottom-6 left-6 bg-blue-600 px-4 py-2 text-white">
          <h2 className="text-xl font-bold">CONTACT US</h2>
        </div> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12 px-16">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">We would love to hear from you.</h3>
          <p className="text-gray-600">If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <button 
                type="submit"
                disabled={submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
              >
                {submitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {submitted && (
                <p className="mt-3 text-green-600">Thank you! Your message has been sent successfully.</p>
              )}
            </div>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">VISIT US</h2>
            <p className="text-gray-600">
              UET Lahore, Punjab, Pakistan<br />
              Phone: +923039898987
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              You can get in touch with us on this provided email.
            </p>
            <p className="text-blue-600 font-medium mt-2">
              Email: hmjawad087@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;