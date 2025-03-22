import Link from 'next/link';

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 mb-2">
      <h2 className="text-xl">{job.title}</h2>
      <p>{job.company}</p>
      <Link href={`/jobs/${job.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default JobCard;