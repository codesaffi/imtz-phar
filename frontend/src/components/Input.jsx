import React from 'react';

const Input = ({ icon: Icon, type, placeholder, value, onChange,name }) => {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="text-[#7d98d1] h-5 w-5" />
      </div>
      <input
        type={type}
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-3 py-2 bg-[#282354] border border-[#282354] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7d98d1]"
        required
      />
    </div>
  );
};

export default Input;