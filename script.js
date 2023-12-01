let inputs = document.getElementById("new_task");
let text = document.querySelector(".task_list");

function AddTask(){
    if(inputs.value == ""){
        alert("Please Enter Text")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-sharp fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
    }
}
