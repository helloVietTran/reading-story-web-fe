import axiosInstance from '@/config/axiosConfig';

const storyPrefix = '/stories';

export const searchStory = async (keyword) => {
  const { data } = await axiosInstance.get(`${storyPrefix}/search`, {
    params: {
      keyword,
    },
  });
  return data.result.data;
};
export const getStoriesByGender = async (gender, page = 1, size = 32) => {
  const { data } = await axiosInstance.get(`${storyPrefix}/gender`, {
    params: {
      gender,
      page,
      size,
    },
  });
  return data.result;
};

export const getStories = async (page = 1, size = 32) => {
  const { data } = await axiosInstance.get(`${storyPrefix}`, {
    params: {
      page,
      size,
    },
  });
  return data;
};

export const getHotStories = async (page = 1, size = 32) => {
  const { data } = await axiosInstance.get(`${storyPrefix}/hot`, {
    params: {
      page,
      size,
    },
  });

  return data.result;
};

export const getStoryById = async (storyId) => {
  const { data } = await axiosInstance.get(`${storyPrefix}/${storyId}`);

  return data.result;
};

export const ratingStory = async ({ storyId, point }) => {
  await axiosInstance.patch(`${storyPrefix}/${storyId}/rate`, null, {
    params: {
      point,
    },
  });
};

export const getTopStories = async () => {
  const { data } = await axiosInstance.get(`${storyPrefix}/top-views`);

  return data.result;
};

export const getMyFollowedStories = async () => {
  const { data } = await axiosInstance.get(
    `${storyPrefix}/my-followed-stories`
  );

  return data.result;
};

export const getFollowedStoryByStoryId = async (storyId) => {
  const { data } = await axiosInstance.get(
    `${storyPrefix}/my-followed-story/${storyId}`
  );

  return data.result || null;
};

export const findStory = async (genreCode, status, sort, keyword) => {
  if (genreCode === '') genreCode = null;

  const { data } = await axiosInstance.get(`${storyPrefix}/find-story`, {
    params: {
      genreCode,
      status,
      sort,
      keyword,
    },
  });

  return data.result || null;
};

export const findAdvanced = async (
  genreCodes,
  notGenreCodes,
  status,
  sort,
  minChapter,
  gender
) => {
  const { data } = await axiosInstance.get(`${storyPrefix}/find-advanced`, {
    params: {
      genreCodes,
      notGenreCodes,
      status,
      sort,
      minChapter,
      gender,
    },
  });

  return data.result || null;
};

export const getFeaturedStories = async () => {
  const { data } = await axiosInstance.get(`${storyPrefix}/featured-stories`);

  return data;
};
