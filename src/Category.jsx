import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetPopup from './AddWidgetPopup';

const Category = ({ category, addWidget, removeWidget }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget 
          key={widget.id} 
          widget={widget} 
          categoryName={category.name} 
          removeWidget={removeWidget} 
        />
      ))}
      <button onClick={handleOpenPopup}>+ Add Widget</button>
      
      <AddWidgetPopup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        onAddWidget={addWidget} 
        categoryName={category.name} 
      />
    </div>
  );
};

export default Category;
