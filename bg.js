function bgchanger(col){
                    document.body.style.backgroundColor=col;
                    let text=document.getElementsByClassName('text');
                    if(col=='#000000'){
                                        for(let elm of text){
                                                           
                                        elm.style.color='white'
                                        }
                    }
                    else{
                                        for(let elm of text)
                                        {
                                        elm.style.color='black'
                                        }
                                        
                    }
                   
                  
}       






// let red=document.getElementById('red')
// let green=document.getElementById('green')
// let blue=document.getElementById('blue')
// let black=document.getElementById('black')

// red.addEventListener('click',function(){
//                     document.body.style.background='red';
// })
// green.addEventListener('click',function(){
//                     document.body.style.background='green';
// })
// blue.addEventListener('click',function(){
//                     document.body.style.background='blue';
// })
// black.addEventListener('click',function(){
//                     document.body.style.background='black';
// })