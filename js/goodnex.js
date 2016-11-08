$(document).ready(function() {
	
//轮播图
            var ban=$(".banner .ban")
            var banner=$(".banner")[0];
            
            var ban_prev=$("#banner .prev")[0];
            var ban_next=$("#banner .next")[0];
            var t=setInterval(move, 4000);

            var now=0;
            var next=0;

            function move(){
                next=now+1;
                if(next>=ban.length){
                    next=0;
                }
                
                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            banner.onmouseover=function(){
                clearInterval(t);
            }
            banner.mouseout=function(){
                    t=setInterval(move,4000);
            }

            ban_prev.onclick=function(){
                next=now-1;
                 if(next<0){
                    next=ban.length-1;
                }

                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            ban_next.onclick=function(){
                move();
            }


});

$(document).ready(function() {
//当点击跳转链接后，回到页面顶部位置  
    $(window).scroll(function(){  
                    
                    var backup=$("#backup")[0];
                    backup.onclick=function(){  
                        $('body,html').animate({scrollTop:0},1000);  
                    } 
            });
   
});

$(document).ready(function() {
//why+what
    var content_nav=$(".content-tab .content-nav");
    var tab_container=$(".content-tab .tab-container");

    var ann=$(".content-nav .ann")
    console.log(ann)
    var tab_content=$(".tab-container .tab-content")
    console.log(tab_content)

    content_nav.on('click','li',function(){
        var index=$(this).index();
        content_nav.find("li").removeClass("active");
        content_nav.find("li").eq(index).addClass("active");
        
        // console.log(index);
        tab_container.find('li').css('display','none');
        tab_container.find('li').eq(index).css('display','block');
    })

});
