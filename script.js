'use strict';

const books = document.querySelectorAll('.book'),
  advertising = document.querySelector('.adv'),
  bookTitleThree = document.querySelectorAll('a'),
  bookChaptersTwo = books[0].querySelectorAll('li'),
  bookChaptersFive = books[5].querySelectorAll('li'),
  bookChaptersSix = books[2].querySelectorAll('li'), 
  newChapter = document.createElement('li');

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[2].before(books[5]);
// Восстановлен порядок книг

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
// Замена картинки заднего фона

bookTitleThree[4].textContent = 'Книга 3. this и Прототипы Объектов';
// Исправлен заголовок в книге 3

advertising.remove();
// Удалена реклама со страницы

bookChaptersTwo[9].after(bookChaptersTwo[2]);
bookChaptersTwo[3].after(bookChaptersTwo[6]);
bookChaptersTwo[6].after(bookChaptersTwo[8]);

bookChaptersFive[1].after(bookChaptersFive[9]);
bookChaptersFive[4].after(bookChaptersFive[2]);
bookChaptersFive[8].before(bookChaptersFive[5]);

newChapter.textContent = ' “Глава 8: За пределами ES6”';
books[2].append(newChapter);
books[2].append(bookChaptersSix[9]);






