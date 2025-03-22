import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Mock API call to fetch job listings
    const fetchJobs = async () => {
      const mockJobs = [
        { id: 1, title: 'Frontend Developer', company: 'Company A' },
        { id: 2, title: 'Backend Developer', company: 'Company B' },
        { id: 3, title: 'Full Stack Developer', company: 'Company C' },
      ];
      setJobs(mockJobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <ul className="mt-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default Home;