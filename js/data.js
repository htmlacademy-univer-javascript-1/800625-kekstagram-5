
import { getRandomNumber, getRandomPhotoDescription } from './util.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 1;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;


export const authorNames = ['Иван', 'Анна', 'Петр', 'Мария', 'Алексей', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья'];

const commentsExamples = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const photoDescriptions = [
  'Красивый закат на пляже',
  'Горизонтальное излучение солнца в лесу',
  'Городской пейзаж вечером',
  'Величественные горы в облаках',
  'Парусная лодка на озере',
  'Цветущие вишневые деревья',
  // Добавьте здесь ещё описаний по вашему усмотрению
];

export const generateComments = (commentsCount) => {
  const comments = [];
  for (let i = 0; i <= commentsCount - 1; i++) {
    const comment = {
      id: i,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: commentsExamples[getRandomNumber(0, commentsExamples.length - 1)],
      name: authorNames[getRandomNumber(0, authorNames.length - 1)],
    };
    comments.push(comment);
  }
  return comments;
};

export function generatePhoto(id) {
  const url = `photos/${id}.jpg`;
  const description = getRandomPhotoDescription();
  const likes = getRandomNumber(MIN_LIKES, MAX_LIKES);

  const comments = generateComments(getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT));


  return {
    id,
    url,
    description,
    likes,
    comments,
  };
}

export function generatePhotoArray(numPhotos) {
  const photoArray = [];

  for (let i = 1; i <= numPhotos; i++) {
    const photo = generatePhoto(i);
    photoArray.push(photo);
  }

  return photoArray;
}
export {MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER};
