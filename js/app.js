if ('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./sw.js')
            .then(function(){
                console.log('sw has been registered')
            })
    })    
}
