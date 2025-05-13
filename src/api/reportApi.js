import axiosInstance from '@/config/axiosConfig';
const errorReporterPrefix = '/error-reporter';

export const reportChapterError = async (data) => {
  await axiosInstance.post(`${errorReporterPrefix}`, data);
};
