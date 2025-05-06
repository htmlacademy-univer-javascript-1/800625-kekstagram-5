const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePicture(evt);
  }
};

const loadAllComments = (commentsContainer, comments) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; ++i) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = comments[i].avatar;
    comment.querySelector('.social__picture').alt = comments[i].name;
    comment.querySelector('.social__text').textContent = comments[i].message;
    commentsFragment.append(comment);
  }
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);
};

function openPicture(evt, url, description, likes, comments) {
  const openedPicture = document.querySelector('.big-picture');
  openedPicture.classList.remove('hidden');
  openedPicture.querySelector('.big-picture__img img').src = url;
  openedPicture.querySelector('.likes-count').textContent = likes;
  openedPicture.querySelector('.comments-count').textContent = comments.length;
  openedPicture.querySelector('.social__caption').textContent = description;
  openedPicture.querySelector('.loaded-comments-count').textContent = comments.length;

  const commentsContainer = document.querySelector('.social__comments');
  loadAllComments(commentsContainer, comments);

  document.body.classList.add('modal-open');

  openedPicture
    .querySelector('.big-picture__cancel')
    .addEventListener('click', closePicture);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closePicture(evt) {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  evt.target.removeEventListener('click', closePicture);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.classList.remove('hidden');
}

export { openPicture };
