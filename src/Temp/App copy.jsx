import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout'
import AddWidgetPopup from './AddWidgetPopup'

import ChartComponent from './ChartComponent'; // Import the ChartComponent

function App() {

  const [widgets, setWidgets] = useState({
    bar: [],
    line: [],
    pie: [],
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleAddWidget = (widget) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widget.type]: [...prevWidgets[widget.type], widget],
    }))
  }

  const chartData = [
    { label: 'Red', value: 300 },
    { label: 'Blue', value: 50 },
    { label: 'Yellow', value: 100 },
    { label: 'Green', value: 150 },
    { label: 'Purple', value: 200 },
    { label: 'Orange', value: 250 },
  ];

  return (
    <>
      <Navbar />

      <Layout />

      <div className="app">
        <button onClick={() => setIsPopupOpen(true)}>Add Widget</button>
        {isPopupOpen && (
          <AddWidgetPopup
            onAddWidget={handleAddWidget}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
        {Object.keys(widgets).map((type) => (
          <div key={type} className="category" id={type}>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <div className="widgets">
              {widgets[type].map((widget, index) => (
                <div key={index} className="widget">
                  <h3>{widget.text}</h3>
                  <p>Data: {widget.data.join(', ')}</p>
                  <ChartComponent type="pie" data={chartData} /> {/* Add the ChartComponent */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
