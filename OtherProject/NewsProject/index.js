let report = document.getElementById("report");
let title = document.getElementById("title");
let discripton = document.getElementById("discripton");
let image = document.getElementById("image");
let content = document.getElementById("content");
let url = document.getElementById("url");
let publish = document.getElementById("publish")



async function newsUpdate(){
    // let apiKey = "28424ca7c6ee47d1bd7e9dbc257d7e12"
    let api = "https://newsapi.org/v2/everything?q=tesla&from=2023-07-21&sortBy=publishedAt&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12";

 try{
    let response = await fetch(api);
    let news_data = await response.json();
        
        console.log(news_data);
        



          let firstArticle = news_data.articles[0];
          report.innerHTML = `Report by: ${firstArticle.author}`;
          content.innerHTML = `Content: ${firstArticle.content}`
          discripton.innerHTML = `Description: ${firstArticle.description}`
          title.innerHTML = `Title: ${firstArticle.title}`; 

          if(firstArticle.urlToImage){
            image.src = firstArticle.urlToImage;
            image.style.width = "100%";
            image.style.hight = "500px";
          }else {
            image.src = "default-image-url.jpg";
          }


          image.innerHTML = `${firstArticle.urlToImage}`;
          url.innerHTML = `Url: <a>${firstArticle.url}</a>`;
          publish.innerHTML = `Published Date:${firstArticle.publishedAt}`;

          

   }
 catch (error) {
            console.error("Error fetching news:" , error);
}

}

newsUpdate()