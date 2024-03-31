let CurentDate = new Date();
document.getElementById('currentYear').innerHTML = CurentDate.getFullYear();


// geting Image through api 
getData()

function getData() {

    let curData = [];

    fetch('https://random-image-pepebigotes.vercel.app/lists/example-images-list.json').then(res => data = res.json())
    .then((data) =>{
        data.images.forEach((image) =>{
            let curImage = image.substr(0, image.indexOf('w=')+2) + 350;
            
            curData.push(curImage);

            if (curData.length == 17) {
                setImage(curData);
            }
        })
    })

}


// set image in image section 
function setImage(data) {

    for (let i = 0; i < data.length; i++) {
        document.getElementById('imageSection').innerHTML += `
            <div class="imageDiv">
                <img src="${data[i]}" alt="Random">
                <h2>Image ${i + 1}</h2>
    
                <div class="imageDetails">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, earum.</p>
                    <h2>Image ${i + 1}</h2>
                </div>
            </div>
        `;
    }
    let images = document.querySelectorAll('.imageDiv');
    if (images.length == 17) {
        checkImage()
    }
}



// image hover effect 

function checkImage() {
    

const isHaveImage = new Promise((resolve, reject) => {
    let images = document.querySelectorAll('.imageDiv');
    
    if (images.length == 17) {
        resolve(images);
    }
});

isHaveImage.then((res) => {
    
    res.forEach((image) =>{
        image.addEventListener('mouseover', ()=>{
            image.querySelector('.imageDetails').style.top = "0%";
        })
        image.addEventListener('mouseout', ()=>{
            image.querySelector('.imageDetails').style.top = "100%";
        })
    })
    
})
}
    