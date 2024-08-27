import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

const PopUp = ({ close, list, setList }) => {
    const [data, setData] = useState('');
    const [image, setImage] = useState(null);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Cleanup function to revoke object URLs
        return () => {
            list.forEach(item => {
                if (item.image) {
                    URL.revokeObjectURL(item.image);
                }
            });
        };
    }, [list]);

    const titleHandler = (e) => {
        setData(e.target.value);
    }

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (data && image && filter) {
            const imageUrl = URL.createObjectURL(image);

            // Update the list with new item
            const updatedList = [...list, { data, image: imageUrl, filter }];

            // Save to local storage
            localStorage.setItem('widgetList', JSON.stringify(updatedList));

            // Update the state
            setList(updatedList);

            resetForm();
        } else {
            alert("Please fill in all fields and upload an image.");
        }
    }

    const resetForm = () => {
        setData("");
        setImage(null);
        setFilter("");
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] h-[90%] max-w-4xl max-h-[90%]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Add To Widget</h2>
                    <IoIosClose onClick={close} className="cursor-pointer text-xl text-gray-800 dark:text-gray-200" />
                </div>

                <div className="data_field flex flex-col gap-3 overflow-y-auto h-full">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-gray-800 dark:text-gray-200">Choose Here:</span>
                        <select
                            name="filter"
                            id="filter"
                            className="outline-none border p-1 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                            onChange={filterHandler}
                            value={filter}
                        >
                            <option value="">Select</option>
                            <option value="CSPM">CSPM</option>
                            <option value="CWPP">CWPP</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Title Here"
                            className="outline-none border p-2 w-full rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 mb-2"
                            onChange={titleHandler}
                            value={data}
                        />
                        <input
                            type="file"
                            className="block mb-2"
                            onChange={imageHandler}
                        />
                        {image && (
                            <div className="mb-2">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Preview"
                                    className="w-24 h-24 object-cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            className="bg-blue-700 text-white p-2 rounded dark:bg-blue-600 dark:text-gray-100"
                            onClick={submitHandler}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
