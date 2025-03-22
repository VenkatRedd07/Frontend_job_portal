// This file simulates API calls. In a real application, you would replace this with actual API calls.

export const fetchJobs = async () => {
    // Simulating a fetch call to an API
    return [
      { id: 1, title: 'Frontend Developer', company: 'Company A', description: 'Develop user interfaces for web applications.' },
      { id: 2, title: 'Backend Developer', company: 'Company B', description: 'Develop server-side applications.' },
      { id: 3, title: 'Full Stack Developer', company: 'Company C', description: 'Work on both front-end and back-end.' },
    ];
  };
  
  export const fetchJobById = async (id) => {
    // Simulating a fetch call to get a specific job by ID
    const jobs = await fetchJobs();
    return jobs.find(job => job.id === parseInt(id));
  };