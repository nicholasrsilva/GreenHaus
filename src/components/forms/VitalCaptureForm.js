// VitalCaptureForm.js
import React, { useState } from 'react';
import Modal from '../common/Modal';

const VitalCaptureForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    temperature: '',
    ph: '',
    ec: '',
    // other form fields
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleVitalCaptureFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any necessary data processing here

    // Call the handleVitalCaptureFormSubmit function with the form data
    // You can pass formData as an argument or use it directly within the function
    // Example:
    // saveForm(formData);
    console.log('Form submitted:', formData);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
//   const handleVitalCaptureFormSubmit = (formData) => {
//     // Handle registration form submission logic with the form data
//     console.log(formData);
//     setShowModal(false); // Close the modal after form submission (you can customize this behavior)
//   };

  return (
    <div>
        <form onSubmit={handleVitalCaptureFormSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="temperature"
        value={formData.temperature}
        onChange={handleInputChange}
        placeholder="Temp"
      />
      <input
        type="text"
        name="ph"
        value={formData.ph}
        onChange={handleInputChange}
        placeholder="pH"
      />
      <input
        type="text"
        name="ec"
        value={formData.ec}
        onChange={handleInputChange}
        placeholder="EC"
      />
      
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
      <Modal isOpen={showModal} onClose={handleCloseModal}>        
      </Modal>
    </div>
  );
};

export default VitalCaptureForm;
