import React from 'react';

export const InputField = ({ label, placeholder }) => (
  <div>
    {label && <label className="block mb-1">{label}</label>}
    <input placeholder={placeholder} className="border px-3 py-2 rounded-md w-full" />
  </div>
);
