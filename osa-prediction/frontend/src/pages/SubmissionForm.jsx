import React, { useState } from 'react';
import { db } from './firebase-config'; 
import { collection, addDoc } from "firebase/firestore";


const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    livingState: ''
  });

  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsentChange = (e) => {
    setIsConsentGiven(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConsentGiven) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    try {
      await addDoc(collection(db, "submissions"), formData);
      console.log("Document successfully written!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        livingState: ''
      });
      setIsConsentGiven(false);  
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  

  return (
    <>
 
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 lg:gap-4 p-4 lg:px-8 lg:py-12 bg-gray-100 rounded-lg'>
      <input type="text" className="font-medium text-lg lg:text-xl pl-2 pb-2 border border-gray-400 rounded" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" className="font-medium text-lg lg:text-xl pl-2 pb-2 border border-gray-400 rounded" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel"  className="font-medium text-lg lg:text-xl pl-2 pb-2 border border-gray-400 rounded" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
      <select name="livingState" className="font-medium text-lg lg:text-xl pl-2 pb-2 border border-gray-400 rounded " value={formData.livingState} onChange={handleChange} required>
        <option value="" disabled>Select your state</option>
          <option value="Selangor">Selangor</option>
          <option value="Johor">Johor</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Malacca">Malacca</option>
          <option value="Negeri Sembilan">Negeri Sembilan</option>
          <option value="Sabah">Sabah</option>
          <option value="Sarawak">Sarawak</option>
          <option value="Kelantan">Kelantan</option>
          <option value="Putrajaya">Putrajaya</option>
          <option value="Terengganu">Terengganu</option>
          <option value="Pahang">Pahang</option>
          <option value="Kedah">Kedah</option>
          <option value="Perlis">Perlis</option>
          <option value="Perak">Perak</option>
          <option value="Penang">Penang</option>
          <option value="Labuan">Labuan</option>
      </select>
      <div>
          <input type="checkbox" id="consentCheckbox" checked={isConsentGiven} onChange={handleConsentChange} />
          <label htmlFor="consentCheckbox" className="font-light text-lg lg:text-xl pb-2">   I hereby confirm that the information I have provided is accurate.</label>
        </div>
        <button className='bg-default-blue-500 py-2 px-4 border-solid border-white rounded-xl  font-bold w-40 text-center hidden lg:block transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50' type="submit" disabled={!isConsentGiven}>Submit</button>    </form>
    </>
  );
};

export default SubmissionForm;
