'use strict';

// wyszukiwanie wszystkich elementów, pasujących do selektora.
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
});

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
console.log(activeLinks)
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    // console.log('clickedElement:', clickedElement);
        clickedElement.classList.add('active');
    console.log('clickedElement (with plus): ' + clickedElement);

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');
console.log(activeArticles)
    for(let activeArticle of activeArticles){
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

for(let link of links) {
    link.addEventListener('click', titleClickHandler);
}
