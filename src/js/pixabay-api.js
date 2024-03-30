import axios from 'axios';

export async function getImage(value, currentPage) {
  const KEY = '43131221-437eb08730a4aa4be76ca14ef';
  const url = 'https://pixabay.com/api/';

  const params = {
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    page: currentPage,
    per_page: 15,
    safesearch: true,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
