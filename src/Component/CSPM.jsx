import React, { useState, useEffect } from 'react';
import Card from '../Component/Card';
import AddWidget from './AddWidget';

const CSPM = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // Retrieve data from local storage when the component mounts
        const storedList = JSON.parse(localStorage.getItem('widgetList')) || [];
        setList(storedList);
    }, []);

    const handleAddToList = (newItems) => {
        const updatedList = [...list, ...newItems];
        setList(updatedList);

        // Save updated list to local storage
        localStorage.setItem('widgetList', JSON.stringify(updatedList));
    };

    const onDelete = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);

        // Save updated list to local storage
        localStorage.setItem('widgetList', JSON.stringify(updatedList));
    };

    const filteredData = list.filter(item => item.filter === "CSPM");

    return (
        <div>
            <span>CSPM DASHBOARD</span>
            <div className='flex items-center gap-2'>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <Card key={index} item={item} index={index} onDelete={onDelete} />
                    ))
                ) : (
                    <p>No data available</p>
                )}
                <AddWidget onAddToList={handleAddToList} />
            </div>
        </div>
    );
};

export default CSPM;
