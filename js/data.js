import { getRandomNumber, getRandomAvatarNumber, getRandomAuthorName, getRandomPhotoDescription } from './util';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS_COUNT = 30;
const MIN_COMMENTS_COUNT = 0;

const MAX_COMMENT_ID = 1000; // Максимальное значение ID для комментариев

export const authorNames = ['Иван', 'Анна', 'Петр', 'Мария', 'Алексей', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья'];

const comments = [
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

export function generateRandomComment() {
  const randomIndex = getRandomNumber(0, comments.length - 1);
  const commentText = comments[randomIndex];

  return {
    id: getRandomNumber(1, MAX_COMMENT_ID),
    avatar: `img/avatar-${getRandomAvatarNumber()}.svg`,
    message: commentText,
    name: getRandomAuthorName(),
  };
}

export function generatePhoto(id) {
  const url = `photos/${id}.jpg`;
  const description = getRandomPhotoDescription();
  const likes = getRandomNumber(MIN_LIKES, MAX_LIKES);
  const commentsCount = getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);
  const commentsMassive = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = generateRandomComment();
    commentsMassive.push(comment);
  }

  return {
    id,
    url,
    description,
    likes,
    comments: commentsMassive,
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
