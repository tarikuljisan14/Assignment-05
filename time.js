document.getElementById('time').addEventListener('click',function(){
    console.log('hello')
    const time=new Date()
    const Time=time.toLocaleTimeString()
    console.log(Time)
})