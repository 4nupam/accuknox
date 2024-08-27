import React, { useState } from 'react';
import PopUp from '../Component/PopUp';

const AddWidget = ({ onAddToList }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClose = () => setShowPopup(false);

    const handleAdd = (newItems) => {
        // Ensure onAddToList is a function
        if (typeof onAddToList === 'function') {
            const storedList = JSON.parse(localStorage.getItem('widgetList')) || [];
            const updatedList = [...storedList, ...newItems];
            localStorage.setItem('widgetList', JSON.stringify(updatedList));
            onAddToList(newItems);
        } else {
            console.error("onAddToList is not a function");
        }
        handleClose();
    };

    return (
        <>
            <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => setShowPopup(true)}
            >
                Add Widget
            </button>
            {showPopup && (
                <PopUp
                    close={handleClose}
                    list={[]} // This can be used for initial data or other purposes in PopUp
                    setList={handleAdd}
                />
            )}
        </>
    );
};

export default AddWidget;
