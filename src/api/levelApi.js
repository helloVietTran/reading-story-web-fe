import axiosInstance from '../config/axiosConfig';

const levelPrefix = '/level';

export const increaseExperence = async (chapterId) => {
  await axiosInstance.patch(`${levelPrefix}/increase/${chapterId}`);
};
