$(document).ready(function(){
    $('.see').click(()=>{
        // $(this).animate({left: '+=30px', top: '+=30px'}, 1000);
        $('.transaction-body').slideToggle(400);
        $('.see i').toggleClass('fa-angle-up');
        $('.see i').toggleClass('fa-angle-down');
        $('.comment-section').hide();
    })

    $('.comment-btn').click(()=>{
        $('.comment-section').slideDown();
        $('.comment-text').focus();
        $('.cls, .confirm').click(()=>{
            $('.comment-section').fadeOut();
        })
    })

    $('.org').click(()=>{
        $('.org-name, .org-loc').slideToggle(400);
    })
})
    
