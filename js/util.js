
import { MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER, authorNames, photoDescriptions } from './data.js';


export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomAvatarNumber() {
  return getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);
}

export function getRandomAuthorName() {
  const randomIndex = getRandomNumber(0, authorNames.length - 1);
  return authorNames[randomIndex];
}

export function getRandomPhotoDescription() {
  const randomIndex = getRandomNumber(0, photoDescriptions.length - 1);
  return photoDescriptions[randomIndex];
}
