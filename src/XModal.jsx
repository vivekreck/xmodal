import React, { useState } from "react";
import "./XModal.css";

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form data when closing
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      alert("Please fill out this field.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please fill out this field.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please fill out this field.");
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!formData.dob) {
      alert("Please fill out this field.");
      return;
    }

    const selectedDate = new Date(formData.dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={formData.username} onChange={handleInputChange} />
              </div>

              <div>
                <label htmlFor="email">Email Address:</label>
                <input type="text" id="email" value={formData.email} onChange={handleInputChange} />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" value={formData.phone} onChange={handleInputChange} />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
