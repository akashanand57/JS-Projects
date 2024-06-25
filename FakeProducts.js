let allCards = document.querySelector('.allCards')
let displayImg = document.querySelector('.displayImg')
let description = document.querySelector('.description')


let fetching = async() => {
    let resp = await fetch(`https://fakestoreapi.com/products`)
    let data = await resp.json()
    showdisplayImg(data[0])
    // console.log(data)

    data.map((obj)=>{
        showAllCards(obj)
        
    })
}

let showAllCards = (obj)=>{
    console.log(obj)
    let newCard = document.createElement('div')
    newCard.innerHTML = `
    <section>
        <div class="title">${obj.title}</div>
        <div>
            <img src="${obj.image}" alt="" width="200px">
        </div>
        <h3 class="price">${obj.price}</h3>
        <div class="ratings">${obj.rating.rate} ${obj.rating.count}</div>
        <div class="category">${obj.category}</div>
        <div class="description">${obj.description}</div>
    </section>
    `

    allCards.append(newCard)

    newCard.addEventListener('click',()=>{
        showdisplayImg(obj)
    })

}
let myImg = document.createElement('img')
let showdisplayImg = (obj)=>{
    myImg.setAttribute('src', obj.image)
    displayImg.append(myImg)
    myImg.setAttribute('width', "300px")

}
let showDescription = ()=>{

}

fetching()





// let card = document.querySelector('#mainDiv')
// // card.innerHTML = ``
// console.log(card)

// let fetching = async() => {
//     let resp = await fetch(`https://fakestoreapi.com/products`)
//     let data = await resp.json()
//     // console.log(data[2].price)
//     data.map((obj, index)=>{
//         console.log(obj.price)
//         console.log(obj.description)
//         console.log(obj.image)
//         // console.log(index)
//     })
// }
// fetching()
