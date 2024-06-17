
let news =[
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
]
console.log(news);

function printNews(array){

    const element = document.getElementById("news_cards");
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }

    for(let i=0; i <array.length; i++) {
   
    let title = array[i].title
    let content =array[i].content
    const template = document.getElementById("news-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = content;
    document.querySelector('#news_cards').appendChild(template);
}}

printNews(news);


function checkNews(array) {
    
    let titles = document.querySelectorAll(".card-title")

          if (titles.length === array.length) {
            console.log("up to date");
        } else {
          return printNews(array);
        }
    }

setInterval(checkNews(news), 5000);

function NewsInput(inputTitle, inputContent) {
    this.id = news.length +1;
    this.title = inputTitle;
    this.content = inputContent; 
}

function newNews() {
    const title = document.getElementById("newsStory").value;
    const content = document.getElementById("newsStoryText").value;
    const updated = new NewsInput(title, content);
    news.push(updated);
}

checkNews(news);
console.log(news);

