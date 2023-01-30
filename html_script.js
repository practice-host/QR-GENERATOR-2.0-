const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form1 input"),
generateBtn = wrapper.querySelector(".form1 button"),
qrImg = wrapper.querySelector(".qr-code img");





generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "GENERATING QR CODE...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "GENERATE QR CODE";

    })
});


qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active"); 
    }
})




var icon1 = document.getElementById("icon1");

icon1.onclick = function(){
    document.body.classList.remove("theme1");
    document.body.classList.toggle("theme2");
    if(document.body.classList.contains("theme2")){
        icon1.src = "icon(sun).png";
    }else{
        document.body.classList.toggle("theme1")
        icon1.src = "icon(moon).png";
    }
}











