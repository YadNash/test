import React from 'react';

const Widget = ({ widget, categoryName, removeWidget }) => {
  return (
    <div>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={() => removeWidget(categoryName, widget.id)}>Remove</button>
    </div>
  );
};

export default Widget;
