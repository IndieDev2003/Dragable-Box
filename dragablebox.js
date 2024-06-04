const btn =document.querySelector("#btn")
let textBoxContent=document.querySelector("#text-box")
let pendingBox=document.querySelector("#left")
function AddTask(){
    if(textBoxContent.innerHTML===''){
        alert("Write Something First !")
    }
    else{
        console.log("Success")
        console.log(textBoxContent.innerHTML)
        let newTask= document.createElement('p')
        newTask.setAttribute("draggable","true")
        newTask.className='task'
        newTask.innerHTML=textBoxContent.innerHTML
        pendingBox.append(newTask)
        
    }
}