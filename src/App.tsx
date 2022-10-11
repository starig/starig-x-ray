import React from 'react';
import './App.scss';
import XrayPage from "./pages/XrayPage/XrayPage";
import EditReport from "./components/Report/EditReport/EditReport";

function App() {
  return (
    <div className="App">
        <div className={'container'}>
            <EditReport />
            <XrayPage />
        </div>
    </div>
  );
}

export default App;
