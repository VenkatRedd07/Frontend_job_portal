import { useState } from 'react';
import JobForm from '../components/JobForm';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  const handleJobSubmit = (data) => {
    // Here you would typically send the data to your API
    const newJob = { id: jobs.length + 1, ...data };
    setJobs([...jobs, newJob]);
    console.log('Job posted:', newJob);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold">Post a Job</h1>
      <JobForm onSubmit={handleJobSubmit} />
      <h2 className="text-xl mt-4">Posted Jobs</h2>
      <ul className="mt-4">
        {jobs.map(job => (
          <li key={job.id} className="border p-2 mb-2">
            <h3 className="text-lg">{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;