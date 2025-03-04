document.getElementById('btn').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix mobile button issue at '+newtime;
   Activity.appendChild(newelement)
   btn.setAttribute('disabled',true)
   

});
document.getElementById('btn2').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix mobile button issue at '+newtime;
   Activity.appendChild(newelement)
   btn2.setAttribute('disabled',true)

});
document.getElementById('btn3').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix mobile button issue at '+newtime;
   Activity.appendChild(newelement)
   btn3.setAttribute('disabled',true)

});
document.getElementById('btn4').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix mobile button issue at '+newtime;
   Activity.appendChild(newelement)
   btn4.setAttribute('disabled',true)

});
document.getElementById('btn5').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix mobile button issue at '+newtime;
   Activity.appendChild(newelement)
   btn5.setAttribute('disabled',true)

});
document.getElementById('btn6').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.innerText='You have completed the task fix improve job searching at '+newtime;
   Activity.appendChild(newelement)
   alert('Congratulations! You have completed All task')
   btn6.setAttribute('disabled',true)

});







function Time(){
   document.getElementById('time').innerText=new Date().toLocaleString();

}
setInterval(Time,1000);
Time()




















