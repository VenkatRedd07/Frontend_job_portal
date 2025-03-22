import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (id) {
      // Mock API call to fetch job details
      const fetchJob = async () => {
        const mockJob = {
          id: 1,
          title: 'Frontend Developer',
          description: 'Develop user interfaces for web applications.',
          company: 'Company A',
        };
        setJob(mockJob);
      };
      fetchJob();
    }
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.description}</p>
      <p className="font-bold">Company: {job.company}</p>
      <button className="mt-4 bg-blue-500 text-white p-2">Apply Now</button>
    </div>
  );
};

export default JobDetails;