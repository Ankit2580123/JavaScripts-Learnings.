window.addEventListener('scroll',function(){
                    let navbar=document.getElementById('nav-menu');
                    if(window.scrollY>=377)
                    {
                                        navbar.classList.add("sticky");
                    }
                    else{
                                        navbar.classList.remove("sticky");
                    }
});