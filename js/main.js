
import { generatePhotoArray } from './data';

const NUM_PHOTOS = 25; // Количество фотографий

// Функция для получения массива сгенерированных объектов
function getGeneratedPhotos() {
  return generatePhotoArray(NUM_PHOTOS);
}

getGeneratedPhotos();

