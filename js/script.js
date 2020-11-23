{
  'use strict';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks(){

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";

    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for(let article of articles){
      console.log(article);
      const title = article.querySelector(optTitleSelector).innerText;

      html = html+ `<p></p><a class="articleLink" href="#${article.id}">${title}</a>`;
    }
    titleList.innerHTML = html;

    const articleLinks = document.querySelectorAll('.articleLink');

    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
    // for(let articleLink of articleLinks){
    //   articleLink.addEventListener('click', function () {
    //     const id = this.getAttribute('href').replace('#', '');
    //     for (let article of articles){
    //       article.classlist.remove('active');
    //     }
    //     document.getElementById(id).classList.add('active');
    //   });
    }
  }
  generateTitleLinks();

// }