let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5adcccd033c8481b9920a3197aa41553`;

fetch(url)
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
        const tbodOfNewsList = document.querySelector("#newsTable tbody");
        // console.log(ulOfList);
        tbodOfNewsList.innerHTML = listData;
    })
    .catch(error => console.error('Error:', error));



//<p>${news.content}</p>