import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import CSPM from './Component/CSPM';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CWPP from './Component/CWPP';
import { useEffect, useState } from 'react';
import Card from './Component/Card';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('widgetList')) || [];
    setList(storedList);
  }, []);

  const handleAddToList = (newItems) => {
    const updatedList = [...list, ...newItems];
    setList(updatedList);

    // Save updated list to local storage
    localStorage.setItem('widgetList', JSON.stringify(updatedList));
  };

  const searchResults = list.filter((item) =>
    item.data.toLowerCase().includes(input.toLowerCase())
  );

  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <>
      <Nav input={input} handleSearch={handleSearch} />
      <div className="app flex flex-col w-full p-3 gap-4 bg-gray-400 dark:bg-gray-900 text-white">
        <Header />

        {input ? (
          searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="result-item p-2 border-b border-gray-600">
                <Card item={item} onDelete={handleDelete} />
              </div>
            ))
          ) : (
            <div>No Data Matches</div>
          )
        ) : (
          <>
            <CSPM />
            <CWPP />
          </>
        )}
      </div>
    </>
  );
}

export default App;
