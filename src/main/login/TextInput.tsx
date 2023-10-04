import React from 'react';

type props = {
  setText: (Arg0: string)=>void;
  label: string;
  type?: string;
}

const TextInput: React.FC<props> = ({setText, label, type})=>{


  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="username" className="mb-1">{label}</label>
      <input
        type={type || 'text'}
        id="username"
        onChange={(e) => setText(e.target.value)}
        className="px-2 py-1 border rounded bg-dominantLight"
      />
    </div>
  );
};

export default TextInput;