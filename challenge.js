// challenge 1: the timer should increment every second once the page has loaded

const body = document.querySelector("body")
const counter = document.getElementById("counter")
const likes = document.querySelector(".likes")
const likesHeader = document.createElement("h3")
likesHeader.innerText = "Likes"
likes.appendChild(likesHeader)

const increaseButton = document.getElementById("+")
const decreaseButton = document.getElementById("-")
const likeButton = document.getElementById("<3")

// challenge 2: user can manually increment and decrement the counter
increaseButton.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) + 1
    // console.log(counter.innerText)
})

decreaseButton.addEventListener("click", () => {
    counter.innerText = parseInt(counter.innerText) - 1
    // console.log(counter.innerText)
})

// challenge 3: user can like an individual number of the counter. they ca see the appropriate number of likes associated with that particular number.


likeButton.addEventListener("click", () => {
    let listItem = document.createElement("li")
    likes.appendChild(listItem)
    
    listItem.innerText = parseInt(listItem.innerText + 1)
})