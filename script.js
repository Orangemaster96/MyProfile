// var powerup = {
//     audio: new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav'),
//     play: function() { 
//         this.audio.currentTime = 0;
//         this.audio.play() 
//     }
//     }
 window.onload = function (){
    if(document.getElementById('mario')){
    var player = document.getElementById('mario')
 
    updateElement(player, 0, 0)
    window.addEventListener('keydown', function(e) {keyDown(e, player)})
    window.addEventListener('keyup', function(e) {keyUp(e, player)})
    }
}

// location of mario
function updateElement(element, incx, incy) {
  var x = Number(element.getAttribute('data-x')) + incx
  var y = Number(element.getAttribute('data-y')) + incy
  
  
  
  element.style.transform = 'translate('+ x +'px, '+ y +'px)'
  
  if (element.classList.contains('mirror'))
    element.style.transform += ' scaleX(-1)'
    
  if (element.classList.contains('big'))
    element.style.transform += ' scale(2)'
  
  // Update HTML
  element.setAttribute('data-x', x)
  element.setAttribute('data-y', y)
}

// keydown
function keyDown(e, player) {
  //console.log(e)
  //var player = document.getElementById('mario')
  var speed = 10;
  //var speed = (e.ctrlKey ? 20 : 10)
  
  // right
  if (e.keyCode == 39) {
    player.classList.add('caminar')
    player.classList.remove('mirror')
    updateElement(player, +speed, 0)
  }
  // left
  else if (e.keyCode == 37) {
    player.classList.add('caminar')
    player.classList.add('mirror')
    updateElement(player, -speed, 0)
  }
  
  if (e.keyCode == 85) {
    player.classList.toggle('big')
    //new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav').play()
    //powerup.play(); // fix network lag sound    
    updateElement(player, 0, 0)
  }
  if (e.keyCode == 32) {
    player.classList.add('jump')
     
    updateElement(player, 0, 0)
    
  }
  
}

// keyup
function keyUp(e, player){
    //console.log(e)
  // remove class to stop animation
  //var player = document.getElementById('mario')
  player.classList.remove('caminar')
  player.classList.remove('jump')
}

//header
$(document).ready(function(){ 
    $.get("header.html", function(data) {
      $("#header").html(data);
    });

  }); 

//resume page section
async function getResume(){
    const file =  await fetch('./jobhistory.json')
    const data =  await file.json()
    //console.log(data)

    for( i in data){
        const titlevar = data[i].title
        const datesvar = data[i].dates
        const companyvar = data[i].company
        const descriptionvar = data[i].description
        const para = document.createElement("div")
        para.setAttribute("class", "jobEntry")
        para.innerHTML = "<div style='font-weight:800;'>"+titlevar+"</div>"+"<div>"+companyvar+"</div>"+"<div>"+datesvar+"</div><br><div id='desc"+i+"'></div><br>"
        var parent = document.getElementById("jobHistory")
        parent.appendChild(para)
        for(p in data[i].description){
          const bullet = data[i].description[p]
          const para2 = document.createElement("div")
          para2.setAttribute("class", "bullet")
          console.log(para2)
          var parent2 = document.getElementById("desc"+i)
          para2.innerHTML = "<div> &#8594; </div><div>"+bullet +"</div>"
          parent2.appendChild(para2)
        }
        //console.log(i)
    }
}
async function getEduca(){
    const file =  await fetch('./education.json')
    const data =  await file.json()
    //console.log(data)

    for( i in data){
        const university = data[i].university
        const degree = data[i].degree
        const attended = data[i].attended
        const status = data[i].status
        const focus = data[i].focus
        const para = document.createElement("div")
        para.setAttribute("class", "jobEntry")
        para.innerHTML = "<div style='font-weight:800;'>"+university+"</div>"+"<div>"+degree+"</div>"+"<div>"+attended+"</div>"+"<div>"+focus+"</div>"+"<p>"+status+"</p>"
        var parent = document.getElementById("education")
        parent.appendChild(para)
        //console.log(i)
    }
}
async function getSkills(){
    const file =  await fetch('./skills.json')
    const data =  await file.json()
    console.log(data)
    
    for( i in data){
        const para = document.createElement("div")
        para.setAttribute("class", "jobEntry")
        var counter = 0

        for(f in data[i]){

            if(counter == 0){
            para.innerHTML += "<div style='font-weight:800;'>"+data[i][f]+"</div>"
            }

             if(counter >=1){

                for(h in data[i][f]){
                    para.innerHTML += "<div>"+data[i][f][h]+"</div>"
                }
            }
            counter+= 1
        }
        var parent = document.getElementById("skills")
        parent.appendChild(para)
    }
}
async function getProjects(){
    const file =  await fetch('./projects.json')
    const data =  await file.json()
    //console.log(data)

    for( i in data){
        const project = data[i].project
        const skill = data[i].skill
        const description = data[i].description
        
        const para = document.createElement("div")
        para.setAttribute("class", "jobEntry")
        para.innerHTML = "<div style='font-weight:800;'>"+project+"</div>"+"<div>"+skill+"</div>"+"<p>"+description+"</p>"
        var parent = document.getElementById("projects")
        parent.appendChild(para)
        //console.log(i)
    }
}
function projectbtn(){
  var projectsection = document.getElementById("projectSection")
  if(projectsection.hasAttribute("style")){
      projectsection.removeAttribute("style")
    }else{
      projectsection.setAttribute("style", "display: None;")
  }
}