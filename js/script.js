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
  const optArticleTagsSelector = '.post-tags .list';
  const optArticleAuthorSelector = '.post-author';

  const generateTitleLinks = function (customSelector = '') {
    console.log(customSelector);
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";

    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    let html = '';
    console.log(customSelector);
    /* for each article */
    /* get the article id */
    for (let article of articles) {
      const title = article.querySelector(optTitleSelector).innerText;

      html = html + `<p></p><a class="articleLink" href="#${article.id}">${title}</a>`;
    }
    titleList.innerHTML = html;

    /* insert link into titleList */
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
    //const articleLinks = document.querySelectorAll('.articleLink');
    // console.log(articleLinks);
    // for(let articleLink of articleLinks){
    //   articleLink.addEventListener('click', function () {
    //     const id = this.getAttribute('href').replace('#', '');
    //     for (let article of articles){
    //       article.classlist.remove('active');
    //     }
    //     document.getElementById(id).classList.add('active');
    //   });
  };
  generateTitleLinks();

  // }

  function generateTags() {
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      const tagWrapper = article.querySelector(optArticleTagsSelector);

      let html = '';

      const articleTags = article.getAttribute('data-tags');

      const articleTagsArray = articleTags.split(' ');

      for (let tag of articleTagsArray) {
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        // html = html + `<li><a href="#tag-${tag}">${tag}</a></li>`;
        // console.log(linkHTML);
        html = html + linkHTML;
      }
      tagWrapper.innerHTML = html;
    }
    // const tagList = document.querySelectorAll('a[href^="#tag-"]');
    // for (let tag of tagList) {
    //   tag.addEventListener('click', titleClickHandler);
    }

    generateTags();

    const tagClickHandler = function (event) {
      // console.log(tagClickHandler());
      /* prevent default action for this event */
      event.preventDefault();

      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;

      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      console.log(href);

      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
      console.log(tag);
      /* find all tag links with class active */
      const tagLink = document.querySelectorAll('a.active[href^="#tag-"]');
      console.log(tagLink);
      /* START LOOP: for each active tag link */
      for (let TagLink of tagLinks) {
        /* remove class active */
        TagLink.classList.remove('active');
        console.log(TagLink);
        /* END LOOP: for each active tag link */
      }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const foundTagLink = document.querySelectorAll('a[href="' + href + '"]');
      console.log(foundTagLink);
      /* START LOOP: for each found tag link */
      for (let foundTagLink of foundTagLinks) {
        /* add class active */
        foundTagLink.classList.add('active');
        /* END LOOP: for each found tag link */
      }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[data-tags~="' + tag + '"]');
    }

    function addClickListenersToTags() {
      /* find all links to tags */

      /* START LOOP: for each link */

      /* add tagClickHandler as event listener for that link */

      /* END LOOP: for each link */
    }

    addClickListenersToTags();
  }



