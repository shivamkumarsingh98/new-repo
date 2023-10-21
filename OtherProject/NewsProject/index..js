let report = document.getElementById("report");
let title = document.getElementById("title");
let discripton = document.getElementById("discripton");
let image = document.getElementById("image");
let content = document.getElementById("content");
let url = document.getElementById("url");
let publish = document.getElementById("publish");
let busniss = document.getElementById("business");
let entertainment = document.getElementById("entertainment");
let health = document.getElementById("health");
let science = document.getElementById("science");
let sports = document.getElementById("sports");
let technology = document.getElementById("technology");


async function technologynews(){

    let techApi = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    
    try {
        let response = await fetch(techApi)
        let tech_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        tech_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }

}

technology.addEventListener("click", ()=> {
    let techApi = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    technologynews(techApi)
})


async function sportsnews(){

    let sportApi = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    
    try {
        let response = await fetch(sportApi)
        let sport_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        sport_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }




}
sports.addEventListener("click", ()=> {
    let sportApi = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    sciencenews(sportApi)
})



async function sciencenews(){

    let scienApi = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    
    try {
        let response = await fetch(scienApi)
        let science_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        science_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }




}
science.addEventListener("click", ()=> {
    let scienApi = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    sciencenews(scienApi)
})



async function healthnews(){

    let healApi = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    
    try {
        let response = await fetch(healApi)
        let healt_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        healt_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }



}

health.addEventListener("click", ()=> {
    let healApi = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    healthnews(healApi)
})

async function enterTainmentnews(){

    let enterApi = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"
    
    try {
        let response = await fetch(enterApi)
        let entertan_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        entertan_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }



}


entertainment.addEventListener("click", ()=>{

    let enterApi = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12";
    enterTainmentnews(enterApi);
})


async function busnissNews() {
    let busApi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12"    
    
    try {
        let response = await fetch(busApi)
        let business_news = await response.json()

       
        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        business_news.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    }catch(error) {
        console.error("Error fetching news:", error);
    }

   

}

busniss.addEventListener("click", ()=>{

    let busApi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=YOUR_API_KEY";
    busnissNews(busApi);
})





async function newsUpdate() {
    // let apiKey = "28424ca7c6ee47d1bd7e9dbc257d7e12"
    let api = "https://newsapi.org/v2/top-headlines?country=in&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12";

    try {
        let response = await fetch(api);
        let news_data = await response.json();

        console.log(news_data);

        
        report.innerHTML = "";
        content.innerHTML = "";
        discripton.innerHTML = "";
        title.innerHTML = "";
        image.src = "";
        url.innerHTML = "";
        publish.innerHTML = "";

        
        news_data.articles.forEach(article => {
            let articleDiv = document.createElement("div");
            articleDiv.className = "article";

            let articleReport = document.createElement("h2");
            articleReport.innerHTML = `Report by: ${article.author} <br/><br/>`;
            articleDiv.appendChild(articleReport);
            
            let articleTitle = document.createElement("h3");
            articleTitle.innerHTML = `Title: ${article.title}<br/><br/>`;
            articleDiv.appendChild(articleTitle);

            let articleDescription = document.createElement("h5");
            articleDescription.innerHTML = `Description: ${article.description}<br/><br/>`;
            articleDiv.appendChild(articleDescription);

            let articleContent = document.createElement("h6");
            articleContent.innerHTML = `Content: ${article.content}<br/>`;
            articleDiv.appendChild(articleContent);
 

            if (article.urlToImage) {
                let articleImage = document.createElement("img");
                articleImage.src = article.urlToImage;
                articleImage.style.width = "100%";
                articleImage.style.height = "500px";
                articleDiv.appendChild(articleImage);
            }

            let articleUrl = document.createElement("h6");
            articleUrl.innerHTML = `Url: <a href="${article.url}" target="_blank">${article.url}</a>`;
            articleDiv.appendChild(articleUrl);

            let articlePublish = document.createElement("h6");
            articlePublish.innerHTML = `Published Date: ${article.publishedAt}<br/><br/> <hr/>`;
            articleDiv.appendChild(articlePublish);

        
            report.appendChild(articleDiv);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

newsUpdate();
