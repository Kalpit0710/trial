import React, { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    type: "student",
    course: "",
    jobTitle: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.age) {
      formErrors.age = "Age is required.";
    } else if (formData.age < 18 || formData.age > 65) {
      formErrors.age = "Age must be between 18 and 65.";
    }
    if (formData.type === "student" && !formData.course.trim()) {
      formErrors.course = "Course is required for students.";
    }
    if (formData.type === "professional" && !formData.jobTitle.trim()) {
      formErrors.jobTitle = "Job Title is required for professionals.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <div>
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {formData.type === "student" && (
          <div>
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
            {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
          </div>
        )}

        {formData.type === "professional" && (
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            {errors.jobTitle && <p style={{ color: "red" }}>{errors.jobTitle}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Confirmation</h3>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Type: {formData.type}</p>
          {formData.type === "student" && <p>Course: {formData.course}</p>}
          {formData.type === "professional" && <p>Job Title: {formData.jobTitle}</p>}
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
