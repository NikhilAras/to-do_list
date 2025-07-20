document.querySelector('#add').onclick = function()
{
    if(document.querySelector('.task input').value.length== 0)
     {alert("enter task")}
    else 
    {
        document.querySelector('.addtasks').innerHTML+=
        `
        <div class="added">
        <div class="addedtext">${document.querySelector('.task input').value}</div>
        <button class="del"><i class="fa-solid fa-trash"></i></button>
        </div>

        `

        document.querySelector('.task input').value=""

        var cur_task=document.querySelectorAll('.del')
        for(var i=0;i<cur_task.length;i++)
        {
            cur_task[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }

        var tas=document.querySelectorAll('.addedtext');
        for (let i = 0; i < tas.length; i++) {
            tas[i].onclick=function()
            {
                this.classList.toggle('completed');
            }
            
        }

    }

}