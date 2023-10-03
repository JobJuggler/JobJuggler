import { expect, test } from 'vitest';
import request from 'supertest';
const server = 'http://localhost:3030';
import dotenv from 'dotenv';

dotenv.config();

// RequestBody Type
interface RequestBody {
  company: string;
  companyURL: string;
  companyContact: string;
  jobTitle: string;
  jobLocation: string;
  jobDescription: string;
  jobStatus: string;
  interviewQuestions: string;
  applicationStatus: string;
  jobURL: string;
  schedule: string;
  remote: string;
  dateApplied: string;
  interviewDate: string;
  salary: string;
  notes: string;
}

// requestBody
const requestBody: RequestBody = {
  "company": "Duner Mifflin",
      "companyURL": "testing.com",
      "companyContact": "Michael G Scott",
      "jobTitle": "Assistant to the regional manager",
      "jobLocation": "Scranton, PA",
      "jobDescription": "Salesman",
      "jobStatus": "Open",
      "interviewQuestions": "How would you describe yourself?",
      "applicationStatus": "in review",
      "jobURL": "joburl.com",
      "schedule": "Mon-Fri",
      "remote": "No",
      "dateApplied": "10/01/2023",
      "interviewDate": "10/01/2023",
      "salary": "100,000",
      "notes": "none"
}


test('/api/apps responds to GET request with 200 status', () => {
    return request(server)
      .get('/api/apps')
      .expect(200)
  });


test('/api/apps responds to POST request with 500 status wwhen not given the required information', () => {
  return request(server)
    .post('/api/apps')
    .expect(500)
})

test('/api/apps responds to POST request with 200 status when given the required information', () => {
  return request(server)
    .post('/api/apps')
    .send(requestBody)
    .expect(200)
})
