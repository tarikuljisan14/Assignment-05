document.getElementById('color').addEventListener('click',function(){
    console.log('hello')
    // document.body.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    // document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    document.body.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    const time=new Date();
    const Time=time.toLocaleTimeString()
    console.log(Time)
})
