{
  'use strict';

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
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

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  const generateTitleLinks = function(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    /* ... */
    let html = '';

    /* for each article */
    /* get the article id */
    for(let article of articles){
      const articleId = article.getAttribute('id');
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* create HTML of the link */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;

    /* insert link into titleList */
    const links = document.querySelectorAll('.titles a');
    for(let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };
  generateTitleLinks();

  const generateTags = function() {

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for(let article of articles){
      // const articleId = article.getAttribute('id');

      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split('   ');
      // console.log('articleTagsArray: ', articleTagsArray);
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        html = html + linkHTML;
        /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
  };

  generateTags();

  const tagClickHandler = function(event) {
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks){
      /* remove class active */
      activeTagLink.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const foundTagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log(foundTagLinks)
    /* START LOOP: for each found tag link */
    for(let foundTagLink of foundTagLinks){
      /* add class active */
      foundTagLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function(){
    /* find all links to tags */
    const linkTags = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for(let linkTag of linkTags){
      /* add tagClickHandler as event listener for that link */
      linkTag.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
    }
  };

  addClickListenersToTags();

  const generateAuthors = function(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for(let article of articles){
      /* find post author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      /* make html variable with empty string */
      let html = '';
      console.log(authorWrapper)
      /* get tags from data-author attribute */
      const tagAuthor = article.getAttribute('data-author');
      // console.log(tagAuthor)
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#author-' + tagAuthor + '">' + tagAuthor + '</a></li>';
      console.log(linkHTML)
      /* add generated code to html variable */
      html = html + linkHTML;
      // console.log(linkHTML)


      /* insert HTML of all the links into the tags wrapper */
      authorWrapper.innerHTML = html;
      // console.log(authorWrapper)
      /* END LOOP: for every article: */
    }
  };
  generateAuthors();

  const authorClickHandler = function(event) {
    /* prevent default action for this event */
    event.preventDefault();
// console.log(event)
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
// console.log(clickedElement)
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
// console.log(href)
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#author-', '');
// console.log(tag)
    /* find all tag links with class active */
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
// console.log(activeAuthorLinks)
    /* START LOOP: for each active tag link */
    for(let activeAuthorLink of activeAuthorLinks){
      /* remove class active */
      activeAuthorLink.classList.remove('active');

      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const foundAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
    // console.log(foundAuthorLinks)
    /* START LOOP: for each found tag link */
    for(let foundAuthorLink of foundAuthorLinks){
      /* add class active */
      foundAuthorLink.classList.add('active');
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + tag + '"]');

  };


  const addClickListenersToAuthors = function(){
    /* find all links to tags */
    const linkAuthors = document.querySelectorAll('a[href^="#author-"]');

    console.log(linkAuthors)
    /* START LOOP: for each link */
    for(let linkAuthor of linkAuthors){
      /* add tagClickHandler as event listener for that link */
      linkAuthor.addEventListener('click', authorClickHandler);
      console.log()
      /* END LOOP: for each link */
    }
  };
  addClickListenersToAuthors();
}
