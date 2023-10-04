import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {Job} from '../../../global/types'

import Card from "./Card";

const testData: Job = {
  __id: 1234,
  company: 'Test Company',
  jobtitle: 'JobTitle',
  joblocation: 'Location',
  jobstatus: 'Pending',
  applicationstatus: 'Str'
}


describe('<Card />', () => {
  test('should have a button to allow page navigation', async () => {
    let numClicks = 0;
    
    const renderedCard = render(<Card job={testData} onClick={()=>{numClicks++;}} />);
    
    const button = renderedCard.container.querySelector('#CardButton');
    
    expect(numClicks).toBe(0);
    fireEvent.click(button)
    expect(numClicks).toBe(1);
    fireEvent.click(button)
    expect(numClicks).toBe(2);
  });
});