'use strict';

// wyszukiwanie wszystkich elementów, pasujących do selektora.
// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
// });
{
    const titleClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');

        /* remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');
        console.log(activeLinks)
        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
        /* add class 'active' to the clicked link */
        // console.log('clickedElement:', clickedElement);
        clickedElement.classList.add('active');
        console.log('clickedElement (with plus): ' + clickedElement);

        /* remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.posts .post.active');
        console.log(activeArticles)
        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }

        /* get 'href' attribute from the clicked link */
        const articleSelector = clickedElement.getAttribute('href');

        console.log(articleSelector);
        /* find the correct article using the selector (value of 'href' attribute) */
        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

        /* add class 'active' to the correct article */
        targetArticle.classList.add('active')
        console.log(targetArticle);
    }
// console.log(titleClickHandler());


    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}

{
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

    function generateTitleLinks(){

        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = "";

        /* find all the articles and save them to variable: articles */
        const articles = document.querySelectorAll(optArticleSelector);
        let html = '';
        for(let article of articles){
            console.log(html)
        }
        /* for each article */
        for (let article of articles){
            console.log(articles);
        }
        /* get the article id */
        // const articleId = document.getAttribute('id');
        // const articleId = document.getAttribute('id');
        const articleId = document.querySelector('id');

        console.log(articleId);

        /* find the title element */
        const titleElement = document.querySelector('article');
        console.log(titleElement);

        /* get the title from the title element */
        const articleTitle = document.querySelector(optTitleSelector).innerHTML;
        console.log(articleTitle);
        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into titleList */
        // titleList.innerHTML = titleList.innerHTML + linkHTML;
        const element = document.getElementById('titles a');
        element.insertAdjacentHTML('afterend', '<p>dasdaa</p>');
        console.log(insertAdjacentHTML);
    }

    generateTitleLinks();
}