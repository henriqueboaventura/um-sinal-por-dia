import signs from '../data.json';
import { VIDEO_BASE_URL, VIDEO_PATH } from '../constants';

const formatVideoData = (data) => ({
  description: data.d,
  video: `${VIDEO_BASE_URL}${VIDEO_PATH}${data.v}`,
  word: data.w
});

export const getRandomVideo = () => formatVideoData(signs.data[Math.floor(Math.random() * (5823 - 1) + 1)]);