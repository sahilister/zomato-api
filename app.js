let info = document.getElementById("test");
let r_id = 311
let key = //enter api key here

const api = `https://developers.zomato.com/api/v2.1/reviews?res_id=${r_id}&apikey=${key}`;

fetch(api)
            .then(response => {
                return response.json();
            }) 

            .then(data => {
                info.textContent = data.user_reviews[0].review.review_text;
            })