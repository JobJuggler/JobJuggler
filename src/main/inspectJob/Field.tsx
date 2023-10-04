import React from 'react';

type FieldParams = {
  name: String;
  contents: any;
};

const Field: React.FC<FieldParams> = ({ name, contents }) => {
  return (
    <div className='p-1 m-0.5 border border-black bg-secondary rounded-md'>
      {name + ': ' + contents}
    </div>
  );
};

export default Field;
