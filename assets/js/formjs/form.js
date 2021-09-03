let HubLabels1 = document.querySelector('.lab1');
    let HubImages1 = document.querySelector('.hub_img1');
    
HubLabels1.addEventListener('click', ()=>{
    HubImages1.classList.toggle('hub_img_active');
});

let HubLabels2 = document.querySelector('.lab2');
    let HubImages2 = document.querySelector('.hub_img2');
   
HubLabels2.addEventListener('click', ()=>{
    HubImages2.classList.toggle('hub_img_active');
});

let HubLabels3 = document.querySelector('.lab3');
    let HubImages3 = document.querySelector('.hub_img3');
   
HubLabels3.addEventListener('click', ()=>{
    HubImages3.classList.toggle('hub_img_active');
});

let HubLabels4 = document.querySelector('.lab4');
    let HubImages4 = document.querySelector('.hub_img4');
   
HubLabels4.addEventListener('click', ()=>{
    HubImages4.classList.toggle('hub_img_active');
});

let HubLabels5 = document.querySelector('.lab5');
    let HubImages5 = document.querySelector('.hub_img5');
   
HubLabels5.addEventListener('click', ()=>{
    HubImages5.classList.toggle('hub_img_active');
});




let TxtArea = document.querySelector('.form_txt_area');
let TxtAreaVal = TxtArea.value;
function submitOnEnter(e){
    if(e.which === 13 && !e.shiftKey){
        document.forms[0].submit();
        e.preventDefault(); 
    }
    else if(e.which === 13){
        e.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
    }
}
TxtArea.addEventListener('keypress', submitOnEnter);




