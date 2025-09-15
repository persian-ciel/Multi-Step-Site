import React, { useState } from 'react'

function CheckboxAddons(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div
      className={`w-full rounded-lg hover:border-purple-800 outline-none cursor-pointer px-5 py-5 flex mb-4 border ${
        checked ? 'border-purple-800' : 'border-neutral-300'
      }`}
    >
      <div className='flex mr-5 items-center'>
        <input
          type='checkbox'
          id='online'
          name='online'
          className='w-5 h-5 accent-purple-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-purple-600'
          checked={checked}
          onChange={handleChange}
        />
      </div>
      <div className='flex-1'>
        <label className='font-semibold text-xl'>{props.title}</label>
        <br />
        <label className='font-sans text-neutral-400'>{props.description}</label>
      </div>
      <div className='flex items-center mr-3 text-purple-600'>+${props.price}</div>
    </div>
  );
}

export default CheckboxAddons;
