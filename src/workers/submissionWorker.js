// import { Job, Worker } from 'bullmq';

// import SubmissionJob from '../jobs/submissionJob';
// import redisConnection from '../config/redisConfig';

// const SubmissionWorker = (queueName: string) => {
//   return new Worker(
//     queueName,
//     async (job: Job) => {
//       if (job.name === 'SubmissionJob') {
//         console.log('Reached Worker');
//         const sampleJobInstance = new SubmissionJob(job.data);
//         try {
//           await sampleJobInstance.handle(job); // Await the handle method
//         } catch (error) {
//           console.error(`Job ${job.id} failed:`, error);
//           await sampleJobInstance.failed(job); // Call failed if needed
//         }
//       }
//     },
//     {
//       connection: redisConnection,
//     }
//   );
// };

// export default SubmissionWorker;
