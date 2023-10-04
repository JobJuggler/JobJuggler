import React from 'react';

type FieldParams = {
  name: String;
  contents: any;
};

const Field: React.FC<FieldParams> = ({ name, contents }) => {
  return (
    <div className='first:mt-4 last:mb-4 flex flex-col mx-4 my-2 px-2 py-1 border-2 rounded-xl'>
      {name + ': ' + contents}
    </div>
  );
};

export default Field;
