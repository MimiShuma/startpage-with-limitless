let newsUrl2 = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5adcccd033c8481b9920a3197aa41553`;

fetch(newsUrl2)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        let listData = "";
        let x = 0;
        for (const news of data.articles) {
            listData += `<tr><td>${x += 1}</td><td><a href=${news.url} target="_blank">${news.title}</a></td></tr>`;
        }
        const tbodOfNewsList2 = document.querySelector("#newsTable2 tbody");
        // console.log(ulOfList);
        tbodOfNewsList2.innerHTML = listData;
    })
    .catch(error => console.error('Error:', error));



//<p>${news.content}</p>