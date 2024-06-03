const person = {
  general: {
    name: "John Doe",
    email: "j@example.com",
    linkedin: "https://www.linkedin.com/in/john-doe/",
    website: "https://example.com",
  },
  education: {
    school: "University of Example",
    major: "Computer Science",
    startDate: "2020-01-15",
    endDate: "2022-06-15",
    presentStatus: false,
  },
  experience: [
    {
      id: "1",
      company: "Awesome Company",
      role: "Software Engineer",
      responsibility: "Developed new features for the company's website.",
      startDate: "2019-04-20",
      endDate: "2020-06-15",
      presentStatus: true,
    },
    {
      id: "2",
      company: "Fun Company",
      role: "Front End Developer",
      responsibility: "Maintained the company's website.",
      startDate: "2021-04-20",
      endDate: "2022-06-15",
      presentStatus: false,
    },
  ],
};

export default person;
