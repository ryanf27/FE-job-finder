import axios from "axios";
import { JobData } from "../pages/Homepages";

const API_URL = "http://localhost:8000/api";

export const fetchJobs = () => axios.get(`${API_URL}/jobs`);
export const createJob = (jobData: JobData[]) => axios.post(API_URL, jobData);
export const update = (id: number, jobData: JobData[]) =>
  axios.put(`${API_URL}/${id}`, jobData);
export const deleteJob = (id: number) => axios.delete(`${API_URL}/${id}`);
