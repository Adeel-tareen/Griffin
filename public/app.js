let input = document.getElementById('locationInput');
let showCards = document.getElementById('showData');
let searchBtn = document.getElementById('searchBtn');
let locationShow = document.getElementsByClassName('locationShow')
let imgShow = document.getElementsByClassName('imgShow');
let ratingStarShow = document.getElementsByClassName('ratingStarShow')
let ratingShow = document.getElementsByClassName('ratingShow');
let countShow = document.getElementsByClassName('countShow')
let scoreShow = document.getElementsByClassName('scoreShow')
let yelpPageShow = document.getElementsByClassName('yelpPageShow')
let addressShow = document.getElementsByClassName('addressShow')
let starRatingShow = document.getElementsByClassName('ratingStarShow')
let rating = []

input.addEventListener('keypress', (event) => {
  if (event.key == "Enter") {
    let value = input.value
  if(value){
    getData(value)
  }
  else{
    alert('Invalid Location')
  }
  }
})

// Event Listener of OnClick 
searchBtn.addEventListener('click', () => {
  let value = input.value
  if(value){
    getData(value)
  }
  else{
    alert('Invalid Location')
  }
})

// Main function to fetch the data from Node Server and looping through the data to show Cards for nearby parking lots
function getData(loc) {
  fetch(`/api?location=${loc}`, {
    method: "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    rating = []
    showCards.innerHTML = ""
    if(data.businesses?.length){
      for (let i = 0; i < data.businesses.length; i++) {
        showData();
        locationShow[i].innerHTML = data.businesses[i].location.city;
        if (data.businesses[i].image_url) {
          imgShow[i].src = data.businesses[i].image_url
        }
        rating.push(data.businesses[i].rating)
        ratingShow[i].innerHTML = "&nbsp" + data.businesses[i].rating + "/5.0"
        countShow[i].innerHTML = "Review Count: " + data.businesses[i].review_count
        scoreShow[i].innerHTML = "Score:  " + ((data.businesses[i].review_count * data.businesses[i].rating) / (data.businesses[i].review_count + 1)).toFixed(2)
        yelpPageShow[i].href = data.businesses[i].url
        addressShow[i].innerHTML = data.businesses[i].location.address1 + " " + data.businesses[i].location.city + " " + data.businesses[i].location.country
      }
      creatingRatingStar()

    } else{
      alert('No Data found for this location')
    }
  })
}

// Function to add star icons for rating
function creatingRatingStar() {
  for (let i = 0; i < starRatingShow.length; i++) {
    starRatingShow[i].innerHTML = ""
    let total = 5
    let rate = rating[i]
    while (rate > 0) {
      if (rate >= 1) {
        let span = document.createElement('span');
        span.className = "fa fa-star checked";
        starRatingShow[i].appendChild(span)
        total --

      } else {
        let span = document.createElement('span');
        span.className = "fa fa-star-half-o checked";
        starRatingShow[i].appendChild(span)
        total --
      }
      rate --
    }
    if (total > 0) {
      for (j = 0; j < total; j++) {
        let span1 = document.createElement('span');
        span1.className = "fa fa-star-o";
        starRatingShow[i].appendChild(span1)
      }
    }
  }
}


// Function to show a card dynamically
function showData() {
  let card = document.createElement('div')
  card.className = 'cards'
  showCards.appendChild(card)
  let location = document.createElement('div')
  location.className = 'location'
  card.appendChild(location)
  let p1 = document.createElement('p')
  p1.textContent = '';
  p1.className = 'locationShow'
  location.appendChild(p1)
  let bottomData = document.createElement('div')
  bottomData.className = 'bottomData'
  card.appendChild(bottomData)
  let leftData = document.createElement('div')
  leftData.className = 'leftData'
  bottomData.appendChild(leftData)
  let img1 = document.createElement('img')
  img1.className = 'imgShow'
  
  // A default image
  img1.setAttribute('src', 'parking.png')
  leftData.appendChild(img1)
  let rightData = document.createElement('div')
  rightData.className = 'rightData'
  bottomData.appendChild(rightData)
  let rating = document.createElement('div')
  rating.className = 'rating'
  rightData.appendChild(rating)
  let ratingShow = document.createElement('div')
  ratingShow.className = 'ratingStarShow'
  rating.appendChild(ratingShow)
  let ratingShow1 = document.createElement('div')
  ratingShow1.className = 'ratingShow'
  rating.appendChild(ratingShow1);
  let p2 = document.createElement('p')
  p2.className = 'ratingShow'
  ratingShow1.appendChild(p2)
  let count = document.createElement('div')
  count.className = 'count'
  rightData.appendChild(count)
  let p3 = document.createElement('p')
  p3.className = 'countShow'
  count.appendChild(p3)
  let score = document.createElement('div')
  score.className = 'count'
  rightData.appendChild(score)
  let p4 = document.createElement('p')
  p4.className = 'scoreShow'
  score.appendChild(p4)
  let yelpPage = document.createElement('div')
  yelpPage.className = 'yelpPage'
  rightData.appendChild(yelpPage)
  let a = document.createElement('a')
  a.className = 'yelpPageShow'
  a.setAttribute('href', '#')
  a.innerHTML = 'Yelp Page'
  yelpPage.appendChild(a)
  let address = document.createElement('div')
  address.className = 'address';
  card.appendChild(address);
  let p5 = document.createElement('p')
  p5.className = 'addressShow'
  address.appendChild(p5)
}



