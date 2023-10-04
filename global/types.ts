export interface Job {
  __id: number;
  company: String;
  companyURL?: String;
  jobtitle: String;
  joblocation: String;
  jobdescription?: String;
  jobstatus: String;
  companycontact?: String;
  interviewquestions?: String;
  applicationstatus: String;
  joburl?: String;
  schedule?: String;
  dateapplied?: Date;
  interviewdate?: Date;
  salary?: Number;
  remote?: Boolean;
  notes?: String;
  [index: string]: String | Number | Boolean | Date | undefined;
}
