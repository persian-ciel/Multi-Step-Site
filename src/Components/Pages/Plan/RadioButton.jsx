import React from 'react'

function RadioButton() {
    return ( 
    <>
        <div className="flex rounded-xl mx-auto">
            <label  className="flex  items-center justify-center rounded-lg p-1 cursor-pointer"  >
                <input
                type="radio"
                name="radio"
                value="Montly"
                className="peer hidden"
                
                />
                <span
                className=" peer-checked:bg-blue-950 peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
                >Montly</span>
            </label>

            <label
            className=" flex  items-center justify-center rounded-lg p-1 cursor-pointer"
            >
                <input type="radio" name="radio" value="Yearly" className="peer hidden" />
                <span
                className=" peer-checked:bg-blue-950 peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
                >Yearly</span>
            </label>

        </div>

        </>
    );
}

export default RadioButton;