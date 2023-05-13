console.log('work')
const dbName = 'pavelkrasn'
const $wrapper = document.querySelector('.container')
const generateCatCard = (cat) => {
    return (
        `<div class="card mb-10" style="width: 18rem;">
            <img src="${cat.image}"
                class="card-img-top" alt="фото котэ">
            <div class="card-body">
                <h5 class="card-title">${cat.name}</h5>
                <p class="card-text">${cat.description}</p>
                <button href="#" class="btn btn-primary">Кнопка</button>
            </div>`
    )

}
fetch(`https://cats.petiteweb.dev/api/single/${dbName}/show`)
    .then(res => {
        console.log({ res });
        return res.json()
    })
    .then(data => {
        console.log(data);
        // $wrapper.innerText = data[0].name
        data.forEach(cat => {
            $wrapper.insertAdjacentHTML('afterbegin', generateCatCard(cat))
        });
    })