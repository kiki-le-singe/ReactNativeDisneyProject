import hotels from '../api/hotels.json';

export function getHotels() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hotels);
    }, 300);
  });
}
