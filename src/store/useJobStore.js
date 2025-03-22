import create from 'zustand';

const useJobStore = create((set) => ({
  jobs: [],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
}));

export default useJobStore;