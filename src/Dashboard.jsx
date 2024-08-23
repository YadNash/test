import React, { useState } from 'react';
import Category from './Category';
import graphData from './graphData.json';

const Dashboard = () => {
  const [categories, setCategories] = useState(graphData.categories);

  const addWidget = (categoryName, newWidget) => {
    setCategories(categories.map(category => 
      category.name === categoryName ? 
        { ...category, widgets: [...category.widgets, newWidget] } 
        : category
    ));
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(categories.map(category => 
      category.name === categoryName ? 
        { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) } 
        : category
    ));
  };

  return (
    <div>
      {categories.map(category => (
        <Category 
          key={category.name} 
          category={category} 
          addWidget={addWidget} 
          removeWidget={removeWidget} 
        />
      ))}
    </div>
  );
};

export default Dashboard;
