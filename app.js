
// function to get random number within range 
function getRandomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

// function to fetch api data and convert it to JSON

async function getNews() {
    await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ItTIiTndBTuYU0k9ceo01kxWoaLZAuzt')
        .then(d => d.json())
        .then(response => {
            for (let i = 0; i < response.results.length; i++) {
                // declare output variable as output div in html section
                const output = document.getElementById('output');
                // image array and get a random image from the array to display on page
                const imgArray = ['https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80',
                    'https://images.unsplash.com/photo-1548371836-9f0b75a62d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1548678756-aa5ed92c4796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1548625361-2341a17236b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
                    'https://images.unsplash.com/photo-1550030272-2695f03d3088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'];

                const image = imgArray[Math.floor(Math.random() * 5)];
                let date = response.results[i].published_date;
                let firstName = response.results.byLine;
                // insert result information into defined div in html 'output'
                try {
                    output.innerHTML += `
                <div class='card'>
                <div class='card-body'>
                <p> ${response.results[i].byline}, ${moment(date).format('MMMM D')} </p>
                <img id ='artImg' src='${image} width='100px' height='100px'' />
                <a href='#'>${response.results[i].title} </a>  
                <p id = 'abstract'> ${response.results[i].abstract} </p>
                <p id = 'postIcons'> <i class="fa-solid fa-thumbs-up"></i>  <i class="fa-solid fa-circle-minus"></i> <i class="fa-solid fa-bookmark"></i></i> </p>
                </div>
                </div>
                `
                }
                catch (err) {
                    console.log(err)
                }
            }
        })
}

// Function to get top posts from API, convert to JSON and insert it into 

async function getTopPosts() {
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rqGw2MshjMeHNOo9MRBDK6MU5eiAauGr')
        .then(d => d.json())
        .then(response => {
            for (let i = 1; i < 4; i++) {
                // declare output variable as output div in html section
                const topPosts = document.getElementById('Top-Posts');
                let name = response.results[i].byline
                try {
                    topPosts.innerHTML +=
                        `
                    <div class='card posts'> 
                    <div class='card-body'>
                    <div>
                    <i class="fa-solid fa-circle-user poster-img"></i>
                     
                    <p id = 'poster-info'> ${response.results[i].byline} in ${getRandomNum(3, 7)} minutes read</p>
                    </div>
                    <p id = 'poster-title'> ${response.results[i].title} </p>
                    </div>
                    </div>
                    `
                }
                catch (err) {
                    console.log(err)
                }
            }

        })
}

getNews()
getTopPosts()
