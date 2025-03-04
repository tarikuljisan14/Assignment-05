document.getElementById('btn').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.classList.add('task')
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
   newelement.classList.add('task')
   newelement.innerText='You have completed the task fix Add dark mode issue at '+newtime;
   Activity.appendChild(newelement)
   btn2.setAttribute('disabled',true)

});
document.getElementById('btn3').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.classList.add('task')
   newelement.innerText='You have completed the task fix Optimize Home Page issue at '+newtime;
   Activity.appendChild(newelement)
   btn3.setAttribute('disabled',true)

});
document.getElementById('btn4').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.classList.add('task')
   newelement.innerText='You have completed the task fix Add new Emoji issue at '+newtime;
   Activity.appendChild(newelement)
   btn4.setAttribute('disabled',true)

});
document.getElementById('btn5').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.classList.add('task')
   newelement.innerText='You have completed the task fix Intregreted Open AI API issue at '+newtime;
   Activity.appendChild(newelement)
   btn5.setAttribute('disabled',true)

});
document.getElementById('btn6').addEventListener('click',function(){
   alert('Board updated successfully')
   const Activity = document.getElementById('activity')
   const time = new Date();
   const newtime = time.toLocaleTimeString();
   const newelement = document.createElement('p')
   newelement.classList.add('task')
   newelement.innerText='You have completed the task fix improve job searching at '+newtime;
   Activity.appendChild(newelement)
   alert('Congratulations! You have completed All task')
   btn6.setAttribute('disabled',true)

});





// set live time and date

function Time(){
   document.getElementById('time').innerText=new Date().toLocaleString();

}
setInterval(Time,1000);
Time()

// // clear activity log
// document.getElementById('clear').addEventListener('click',function(){
//     console.log('clear')
//     const Activity=document.getElementById('activity')
//     Activity.innerHTML='';
//    })

   // clear activity log
document.getElementById('clear').addEventListener('click', function() {
   console.log('clear');
  const BTn=document.getElementById('btn')
 console.log(BTn)
 const Activity=document.getElementById('activity')
 
 const value=Activity.innerText;
 console.log(value)
});


// add color section
document.getElementById('color').addEventListener('click',function(){
   console.log('hello')
   // document.body.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
   // document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
   document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
   const time=new Date();
   const Time=time.toLocaleTimeString()
   console.log(Time)
})


// discover something new today section
document.getElementById('discover').addEventListener('click',function(){
   console.log('hello')
  window.open('discover.html','_blank');
});

// back main desk section
document.getElementById('deskbtn').addEventListener('click',function(){
   console.log('hello')
   window.location.href='index.html'
})











