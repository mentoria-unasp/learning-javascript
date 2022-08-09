document.addEventListener('DOMContentLoaded', ()=>{

    getAllPhotos()
    const btn_send = document.querySelector("#btn_send");
    btn_send.addEventListener('click', SendPost);
    
  } ) 
  
  async function getAllPhotos(){
   
    const loadingElement = document.querySelector("#loading");
    const photosElement = document.querySelector("#photos");
    
    const response =   
    await fetch('https://jsonplaceholder.typicode.com/posts')
  
    console.log("Response ", response)
  
    const data = await response.json();
    console.log("Variavel Data ", data)
  
    loadingElement.style="display:none";
  
    data.map((post) => {
      const div = document.createElement("div");
      const title = document.createElement("h2");
      const body = document.createElement("p");
      const link = document.createElement("a");
  
      link.innerText = post.id;
      title.innerText = post.title;
      body.innerText = post.body;
  
      div.appendChild(link);
      div.appendChild(title);
      div.appendChild(body);
      photosElement.appendChild(div).classList.add("posts");;
      
    });
  }
  
  
  
  
  async function SendPost(){  
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    
    const response =   
    await fetch('https://jsonplaceholder.typicode.com/posts',  {method: 'POST',  
    body: JSON.stringify(
    {
      title: titleInput.value,
      body: contentInput.value,
      userId: 101
    }
   )})
    console.log(response.status);
  }
  
  
  
  
  