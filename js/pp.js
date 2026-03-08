// console.log('video script added');
function getTimeString(time){
    const hour = parseInt(time/3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour}h ${minute}m ${remainingSecond}s ago`
}

const removeActiveClass= () =>{
    const buttons = document.getElementsByClassName('btn-category');
    for(let btn of buttons){
        btn.classList.remove('active');
    }
}
//  1- fetch, load and show categories  on html

// create loadCategories
const loadCategories = () => {
    // fetch the date
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

const loadVideos = (searchText = "") => {

    //1 fetch the date
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}

const loadCategoryVideos = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data=> {
        // sobar theke active bg remove krte hbe 
         removeActiveClass()

        // jetay click korbo tate add kkorte hbe
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add("active")
        
        displayVideos(data.category)})
    .catch(error => console.log(error))
}

const loadDetails = async(videoId) => {
    
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    const res = await fetch (url);
    const data = await res.json();
    displayDetails(data.video)
}
const displayDetails= (video)=>{
    console.log(video);
    const detailContainer= document.getElementById("modal-content");
    detailContainer.innerHTML=`
    <img src=${video.thumbnail} />
    <p>${video.description}</p>
    `

    // way-1
    // document.getElementById("show-modal").click();

    // way-2
    document.getElementById('customModal').showModal();
}
// create displayCategories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach(item => {
        // create a button
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn btn-category">${item.category}</button>
        `;

        // add button to category
        categoriesContainer.appendChild(buttonContainer)

    })
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML ="";
    if(videos.length == 0){
        videoContainer.classList.remove('grid');
        videoContainer.innerHTML=`
        <div class="flex flex-col gap-5 items-center justify-center min-h-[300px]">
        <img src="asset/Icon.png"/>
        <h2 class="text-2xl font-bold">No content here</h2>
        </div>
        `
    }
    else{
        videoContainer.classList.add('grid')
    }
    videos.forEach(video => {
        console.log(video)
        // create a div
        const div = document.createElement('div');
        div.classList = "card"
        div.innerHTML = `
         <figure class="h-[200px] relative">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
       ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white px-2 py-1 rounded-xl">${getTimeString(video.others.posted_date)}</span>`
       }
      
  </figure >
    <div class="py-2 px-0 flex gap-2">
        <div>
         <img class="w-10 h-10 rounded-full"  src=${video.authors[0].profile_picture} />
        </div>
        <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}  </p>
            ${video.authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>` : ''}
            
            </div>
            <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
        </div>
    </div>
  </div>
        `

        videoContainer.append(div);
    })
}


document.getElementById('input-search').addEventListener("keyup", (e)=>{
    loadVideos(e.target.value);
});

loadCategories()
loadVideos()