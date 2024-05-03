$(document).ready(function() {
    //
    //---header---
    //

    // change background and color header when scroll
    $(window).on('scroll', function() {
        var position = $(window).scrollTop();
        //if position of web == 0 
        if (position == 0) {
            $("#header").css({
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0)",
            });
        } else // if position != 0
        {
            $("#header").css({
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 1)",
            });
        }
    });

    // change hover menu
    $("#header").mouseenter(function(){
        $(this).css({
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 1)",
        })
    })
    $("#header").mouseleave(function(){
        $(this).css({
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0)",
        })
    })

    //
    //--content---
    //

    // zoom in zoom out img home
  
    
    // Reset the scale after 2 seconds
   
    
    // slider img 

//--- still bug ---
    var heightScreen = $(window).height();
    $("#home_gradient").css({height: heightScreen});
    $(".imgMainHome img").hide();
    $("#img_home1").show().css({
        filter: "none",
        transform: "scale(1.2)",
        transition: "transform 6s ease"
    });
    $("#markBtnHome1").addClass("markBtnChoose");

    var count = 1;
    function slideImg() {
        $(".imgMainHome img").css({
            transform: "scale(1)",
            transition: "transform 0s ease"
        });
        $("#img_home" + count).hide();
        if(count == 3)
        {
            count = 1;

        }
        else{
            count = count + 1;
        }
        $("#img_home" + count).show();
        $("#img_home" + count).css({
            filter: "none",
            transform: "scale(1.2)",
            transition: "transform 6s ease"
        })
      
        $(".markBtn div").removeClass("markBtnChoose");
        $("#markBtnHome" + count).addClass("markBtnChoose");
    }
    var intervalId = setInterval(slideImg, 6000);

    $(".markBtn div").click(function(){
        $(".markBtn div").removeClass("markBtnChoose");
    ;
        $(this).addClass("markBtnChoose");

        count = parseInt($(this).attr("id")[11]);
        $(".imgMainHome img").hide();
        $("#img_home" + count).show();
        clearInterval(intervalId);
        intervalId = setInterval(slideImg, 6000);
    })
//--- still bug ---

 
    
    // responsive home div
    var height = parseInt($("#img_home1").height()) * 1.03;
    $('.home').css('height', height + 'px');
    // Apply height to the container
    $('.home').css('height', height + 'px');
    $(window).on('resize', function() {
        var height = $("#img_home1").height();
        // Apply height to the container
        $('.home').css('height', height + 'px');
    });
});
