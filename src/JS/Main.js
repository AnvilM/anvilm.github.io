$('.app > .main > .nav-bar .el').on("click", function(){
    $(this).toggleClass('active')
    if($(this).hasClass('title')){
        $(this).parent().toggleClass('active')
    }
})