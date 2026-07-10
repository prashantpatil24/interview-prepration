import React, { useState } from 'react';
import './style.css';
const formConfig = [
  {
    type: 'text',
    name: 'fullName',
    label: 'Full Name',
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    options: ['India', 'USA', 'UK'],
  },
  {
    type: 'radio',
    name: 'gender',
    label: 'Gender',
    options: ['Male', 'Female', 'Other'],
  },
  {
    type: 'checkbox',
    name: 'skills',
    label: 'Skills',
    options: ['React', 'Angular', 'Vue'],
  },
];

export default function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, option) => {
    const current = formData[name] || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    handleChange(name, updated);
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
          >
            <option value="">Select</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <>
            {field.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
                {option}
              </label>
            ))}
          </>
        );
      case 'checkbox':
        return (
          <>
            {field.options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={formData[field.name]?.includes(option) || false}
                  onChange={() => handleCheckboxChange(field.name, option)}
                />
                {option}
              </label>
            ))}
          </>
        );
      default:
        return null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
