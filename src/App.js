import React from "react";
import Header from "./components/Header";
import Travel from './components/MainContent';
import Data from './data';

function App() {

  const travelElements = Data.map(item => {
    return(
      <Travel
        key={item.id}
        img={item.img}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })
  
  return (
    <div className="App">
      <Header/>
      {travelElements}
    </div>
  );
}

export default App;
