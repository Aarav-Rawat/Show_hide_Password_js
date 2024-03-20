const showImg = document.querySelector('.show');
const hideImg = document.querySelector('.hide');
const input = document.querySelector('.inputFeild input');

const changeit = ()=>{
    if(input.type === "password"){
        input.type = "text";
        hideImg.style.display = "none";
        showImg.style.display = "block";
    }

    else{
        input.type = "password";
        hideImg.style.display = "block";
        showImg.style.display = "none";
    }
}

