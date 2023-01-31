var cl=console.log;

const showModelBtn = document.getElementById('showModelBtn');
const backDrop = document.getElementById('backDrop');
const myModel = document.getElementById('myModel');
const myClosearray = [...document.querySelectorAll('.myClose')];
const movieContainer = document.getElementById('movieContainer');
const addMovieBtn = document.getElementById('addMovieBtn');
const titleControl = document.getElementById('title');
const imgUrlControl = document.getElementById('imgUrl');
const ratingControl = document.getElementById('rating');






let movieArray = [
    {
        title:'Iron Man',
        imgUrl:`https://tse2.mm.bing.net/th?id=OIP.c3uG6Wjah-IDI43G84rOyAHaEo&pid=Api&P=0`,
        rating:5
    }
]
if(localStorage.getItem('setMovieArray')){
    movieArray=JSON.parse(localStorage.getItem('setMovieArray'))
}


const templating = (arr) => {
    let result = '';

    arr.forEach(ele =>{
        result+=`<div class="col-sm-4 mb-4">
        <div class="card movieCard">
            <div class="card-header">
                <h3>${ele.title}</h3>
            </div>
            <div class="card-body">
                <figure class="mb-0 movieImg">
                    <img  src="${ele.imgUrl}" alt="">
                </figure>
            </div>
            <div class="card-footer">
                <p class="text-right font-weight-bold">${ele.rating}/5</p>
            </div>
        </div>
        </div> `
    })
    movieContainer.innerHTML=result;

}

templating(movieArray);





// const onModelShowHandler = () => {
//     backDrop.classList.add('show');
//     myModel.classList.add('show');
// }

// const onHideHnadler = () => {
//     backDrop.classList.remove('show');
//     myModel.classList.remove('show');
// }

// showModelBtn.addEventListener('click',onModelShowHandler)
// myClosearray.forEach(ele =>{
//     ele.addEventListener('click',onHideHnadler)
// })


const onModelToggleHandler = () => {
    backDrop.classList.toggle('show');
    myModel.classList.toggle('show');
}

const onMovieAddHandler = (eve) => {
 let obj = {
        title:titleControl.value,
        imgUrl:imgUrlControl.value,
        rating:ratingControl.value
 }
 movieArray.unshift(obj);
 titleControl.value='';
 imgUrlControl.value='';
 ratingControl.value='';
 onModelToggleHandler();
 templating(movieArray);
 
 cl(movieArray)
 localStorage.setItem('setMovieArray',JSON.stringify(movieArray));

}






showModelBtn.addEventListener('click',onModelToggleHandler)
myClosearray.forEach(ele =>{
    ele.addEventListener('click',onModelToggleHandler)
});


addMovieBtn.addEventListener('click',onMovieAddHandler)
