import React, { useState } from 'react';

type props = {
  cb: ()=>void;
  label: string;
};

const DropDownItem: React.FC<props> = ({ cb, label }) => {
  return (
    <li>
      <a
        href='#'
        className='block px-4 py-2 hover:bg-secondary'
        onClick={()=>cb()}
      >
        {label}
      </a>
    </li>
  )
}

export default DropDownItem;