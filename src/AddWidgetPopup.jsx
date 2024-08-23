import React, { useState } from 'react';
import './App.css'; // Ensure this path is correct based on your project structure

const AddWidgetPopup = ({ show, onClose, onAddWidget }) => {
  const [category, setCategory] = useState('cspm');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [widgetType, setWidgetType] = useState('bar');
  const [widgetData, setWidgetData] = useState('');

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new widget object
    const newWidget = {
      name: widgetName,
      text: widgetText,
      graph: {
        type: widgetType,
        data: widgetData.split(',').map(item => item.trim()), // Split data into an array
      },
    };

    // Call the onAddWidget function passed as a prop
    onAddWidget(category, newWidget);

    // Clear the form fields
    setCategory('cspm');
    setWidgetName('');
    setWidgetText('');
    setWidgetType('bar');
    setWidgetData('');

    // Close the popup
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Widget</h2>
        <p>Personalize your dashboard by adding the following widgets:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="cspm">CSPM</option>
              <option value="cwpp">CWPP</option>
              <option value="risk">Risk</option>
              <option value="ticket">Ticket</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="widgetName">Widget Name</label>
            <input
              type="text"
              id="widgetName"
              name="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="widgetText">Widget Text</label>
            <input
              type="text"
              id="widgetText"
              name="widgetText"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="widgetType">Widget Type</label>
            <select id="widgetType" name="widgetType" value={widgetType} onChange={(e) => setWidgetType(e.target.value)}>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="pie">Pie</option>
            </select>
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="widgetData">Widget Data (comma-separated)</label>
            <input
              type="text"
              id="widgetData"
              name="widgetData"
              value={widgetData}
              onChange={(e) => setWidgetData(e.target.value)}
              required
            />
          </div> */}
          <div className="form-buttons">
            <button type="submit">Add Widget</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetPopup;
