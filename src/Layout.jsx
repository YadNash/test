import React, { useState } from 'react';
import Graph from './Graph';
import graphData from './graphData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync, faCog, faHistory, faTimes } from '@fortawesome/free-solid-svg-icons';
import AddWidgetPopup from './AddWidgetPopup';
import './App.css'; // Ensure this path is correct based on your project structure

const Layout = () => {
  const [categories, setCategories] = useState(graphData.categories);
  const [showPopup, setShowPopup] = useState(false);
  const [showHistoryDropdown, setShowHistoryDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState('Last 24 hours');

  const handleAddWidgetClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddWidget = (categoryName, newWidget) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name.toLowerCase() === categoryName.toLowerCase()
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );
  };

  const handleRemoveWidget = (categoryIndex, widgetIndex) => {
    setCategories(prevCategories =>
      prevCategories.map((category, catIdx) =>
        catIdx === categoryIndex
          ? { ...category, widgets: category.widgets.filter((_, wIdx) => wIdx !== widgetIndex) }
          : category
      )
    );
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  const handleOptionClick = () => {
    // Logic to handle options
  };

  const handleHistoryClick = () => {
    setShowHistoryDropdown(!showHistoryDropdown);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowHistoryDropdown(false);
  };

  return (
    <div className="layout">
      <header className="dashboard-header">
        <h3>CNAPP Dashboard</h3>
        <div className="dashboard-buttons">
          <button onClick={handleAddWidgetClick}>
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
          <button onClick={handleRefreshClick}>
            <FontAwesomeIcon icon={faSync} /> Refresh
          </button>
          <button onClick={handleOptionClick}>
            <FontAwesomeIcon icon={faCog} /> Option
          </button>
          <div className="history-dropdown">
            <button onClick={handleHistoryClick}>
              <FontAwesomeIcon icon={faHistory} /> History
            </button>
            {showHistoryDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => handleTimeSelect('Last 24 hours')}>Last 24 hours</li>
                <li onClick={() => handleTimeSelect('Last 7 days')}>Last 7 days</li>
                <li onClick={() => handleTimeSelect('Last 30 days')}>Last 30 days</li>
              </ul>
            )}
          </div>
        </div>
      </header>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map((widget, widgetIndex) => (
              <div key={widgetIndex} className="widget">
                <div className="widget-header">
                  <h3>{widget.name}</h3>
                  <button className="remove-widget-btn" onClick={() => handleRemoveWidget(categoryIndex, widgetIndex)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <p>{widget.text}</p>
                <Graph type={widget.graph.type} data={widget.graph.data} />
              </div>
            ))}
            <div className="empty-widget">
              <button className="add-widget-btn" onClick={handleAddWidgetClick}>+ Add Widget</button>
            </div>
          </div>
        </div>
      ))}
      <AddWidgetPopup show={showPopup} onClose={handleClosePopup} onAddWidget={handleAddWidget} />
    </div>
  );
};

export default Layout;
