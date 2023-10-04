import React from 'react';

type params = {
  placeholder: string;
  setVariable: (arg0: string)=> void;
};

const InputField: React.FC<params> = ({placeholder, setVariable})=>{
  return (
    <input
        type='text'
        placeholder={placeholder}
        onChange={(e) => setVariable(e.target.value)}
        className='p-1 m-0.5 border border-black bg-secondary rounded-md'
      />
  )
};

export default InputField;