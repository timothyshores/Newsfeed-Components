class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }
}

// Select all classes named ".article" and assign that value to the articles variable.  
let articles = document.querySelectorAll('.article');
console.log(articles);

// Iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
articles.forEach(article => new Article(article));