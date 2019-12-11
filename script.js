var inputMess= document.getElementById("inputMess");
function initApp(){
  var pages=["Home","Message"];
  init();
  nav(pages);
  renderPage();
}

function init(){
  var nav =  document.createElement("nav");
  nav.classList.add("nav");
  var wrapper =  document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
 
}

function nav(list) {
  for(var i=0; i<list.length; i++){
    const button =document.createElement("button");
    const val = list[i];
    button.innerHTML=list[i];
    button.addEventListener("click", function(){
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}

function renderPage(page){
  if(page==="Home"){
       home();
     }else if(page==="Message"){
       message();
     }
}


function home(){
    wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML="Hello Homies"
}

function message(){
  wrapper = document.querySelector(".wrapper")
  wrapper.innerHTML=inputMess
}
initApp();