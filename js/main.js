ActionJs = {
    Init : function(){
        ActionJs.controlMenuMobile();
        ActionJs.scrollFixedMeu();
        ActionJs.clickPlayVideoYoutube();
        ActionJs.moveMainContent();

    },

    controlMenuMobile : function(){
        $('.control-menu-mb').on('click', function(){
            $('#header').toggleClass('is-show-menu');
        })
    },
    scrollFixedMeu : function(){
        $(window).scroll(function(){
            let pos_body = window.pageYOffset;
            if(pos_body > 10){
                $('#header').addClass('is-fixed');
            }else {
                $('#header').removeClass('is-fixed');
            }
        })
    },
    clickPlayVideoYoutube : function(){
        $('.link-video').click(function(){
            $('.link-video').show().next().hide().find('iframe').remove();
            var urlVideo = $(this).attr('href');
            $(this).hide().next().show().append('<iframe src="'+urlVideo+'" width="641" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
            return false;
        });
    },
    moveMainContent : function(){
        let h_header = $('#header').outerHeight();
        $('main').css('marginTop', h_header);
    }
}
ActionJs.Init();
