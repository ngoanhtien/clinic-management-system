$(document).ready(function() {
    //
    //---header---
    //
    var screenWidth = $(window).width();

    if(screenWidth > 870){
        $(".icontHeder800").css({display: "none"});

    }
    else{
        checkScroll();
    }
    $(window).on('resize', function() {
        var screenWidth = $(window).width();
        if(screenWidth > 870){
            $(".icontHeder800").css({display: "none"});

        }
        else{

            checkScroll();
        }
    });
    function checkScroll(){
        var position = $(window).scrollTop();
        var screenWidth = $(window).width();
        //if position of web == 0 
        if (position == 0) {
            $("#header").css({
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0)",
            });
            $(".menuItem a").css({
                color: "white",
            })
            $(".icontHeder800").css({display: "none"})
        } else // if position != 0
        {
            $("#header").css({
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 1)",
            });
            $(".menuItem a").css({
                color: "black",
            })
            if(screenWidth < 871)
                {
                    $(".icontHeder800").css({display: "block"})

                }

        }
    }
    // change background and color header when scroll
    $(window).on('scroll', function() {
        checkScroll();
    });

    // change hover menu
    $("#header").mouseenter(function(){
        var screenWidth = $(window).width();

        $(this).css({
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 1)",
        })
        $(".menuItem a").css({
            color: "black",
        })
        if(screenWidth < 871)
            {
                $(".icontHeder800").css({display: "block"})

            }

    })
    $("#header").mouseleave(function(){
        $(this).css({
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0)",
        })
        $(".menuItem a").css({
            color: "white",
        })
        $(".icontHeder800").css({display: "none"})

        checkScroll();

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
        transform: "scale(1)",
        transition: "transform 6s ease"
    });
    $("#markBtnHome1").addClass("markBtnChoose");

    function homeContentAnimate(){
            $(".homeContent").fadeOut(0);
             $(".homeContent").fadeIn(1000);
    }
    var count = 1;
    function slideImg() {
       homeContentAnimate()
        $(".imgMainHome img").css({
            transform: "scale(1.2)",
            transition: "transform 0s ease "
        });
        $(".img_home").hide();
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
            transform: "scale(1) ",
            transition: "transform 6s ease "
        })
       
      
        $(".markBtn div").removeClass("markBtnChoose");
        $("#markBtnHome" + count).addClass("markBtnChoose");
    }
    var intervalId = setInterval(slideImg, 6000);

    $(".markBtn div").click(function(){
        $(".markBtn div").removeClass("markBtnChoose");
        $(this).addClass("markBtnChoose");
        count = parseInt($(this).attr("id")[11]);
        if(count == 1)
        {
            count = 3;
        }
        else
        {
            count = count - 1;
        }
        console.log(count);
        slideImg();
    })
//--- still bug ---
    $(".icontHeder800").click(function(){
        $(".menuSub").fadeIn("slow");
    });
    $(".menuItemSub").click(function(){
        $(".menuSub").fadeOut("slow");
    });
    var witdMenusub = $(".itemHeaderSub").width();
    $(".menuSub").click(function(){
        var x = event.pageX;
        if(x > witdMenusub)
        {
                $(".menuSub").fadeOut("slow");

        }

    })
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


// about
    function rotateImgRuntime() {
        $(".imgRotate").animate({rotate: '+=1deg'}, 0);
    }
    setInterval(rotateImgRuntime, 80);

// register
    setDateFormReg()
    $(".booking-date-item").click(function(){
        console.log("booking");
        $(".booking-date-item").css({backgroundColor: "#f7f7f7", border: "0px"});
        $(this).css({backgroundColor: "#FFFFFF", border: "2px#E5A724 solid"});
    })
    $(".booking-time-item").click(function(){
        console.log("booking");
        $(".booking-time-item").css({backgroundColor: "#f7f7f7", border: "0px"});

        $(this).css({backgroundColor: "#FFFFFF", border: "2px#E5A724 solid"});
    })
    $("#confirm-apointment1").click(function(){
        $(".wrongTxt").css({display: "none"});
        var check = checkEmptyReg();
        if(!check)
        {
            $(".notification").css({display: "none"});
            $("#mesSuccessReg").hide();
            showMess("#messWrongReg");
        }
        else
        {
            $("#messWrongReg").hide();
            var checkValidate = validateReg();
            if(checkValidate)
            {
                $(".notification").css({display: "flex"});
                confirmRegister();
            }
        }
        
       
    })
    $("#confirm-apointment2").click(function(){
        $("#otherDateText").text("+");
        $("#otherDateText").removeClass("otherDateRegChoose");
        $(".notification").css({display: "none"});
        $("textarea").val("");
        $("input:text").val("");
        $("#formReg-dateBirth").val("");
        $("#radioNam").prop('checked', true);
        $("#formReg-dateBirth").css({color: "rgb(186, 186, 186) "});
        showMess("#mesSuccessReg");
    
    })
    $(".cancel").mouseenter(function(){
        $(this).children("img").attr("src", "img/iconCancelBlackGray.png");
    })
    $(".cancel").mouseleave(function(){
        $(this).children("img").attr("src", "img/iconCancel.png");
    })
    $(".cancel").click(function(){
        $(".notification").css({display: "none",  
                                position: "fixed", // Changed from 'none' to 'fixed'
                                transition: "background-color 5s ease, color 5s ease"});
    })

    function setDateFormReg(){
        var today = new Date();
        var tomorow = new Date();
        var twoDays = new Date();
        console.log("abc" + today.getDate());
        tomorow.setDate(today.getDate() + 1);
        twoDays.setDate(today.getDate() + 2);
        var todayDate = today.getDate();
        var todayMonth = today.getMonth() + 1;
        var tomorowDate = tomorow.getDate();
        var tomorowMonth = tomorow.getMonth() + 1;
        var twoDaysDate = twoDays.getDate();
        var twoDaysMonth = twoDays.getMonth() + 1;
        $("#booking-date-date-today").text(todayDate + "/" + todayMonth)
        $("#booking-date-date-tomorrow").text(tomorowDate + "/" + tomorowMonth)
        $("#booking-date-date-afterTomorrow").text(twoDaysDate + "/" + twoDaysMonth)
        
    }
    function removeAscent (str) {
        if (str === null || str === undefined) return str;
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");

        console.log(str);
        return str;
      }
    function isValidName (string) {
        var re = /^([A-Z][a-z]*)( [A-Z][a-z]*)+$/;
        console.log(re.test(removeAscent(string)));
        return re.test(removeAscent(string));
    }
    function validateReg(){
        var isValid = true;
        // Full Name Validation
        var fullName = $('#formReg-name').val();

        if (isValidName(fullName) == false) {
            isValid = false;
            $("#wrongFullName").css({display: "block"});
        }

        // Email Validation
        var email = $('#formReg-email').val();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            $("#wrongEmail").css({display: "block"});

        }

        // Phone Number Validation
        var phone = $('#formReg-phoneNumber').val();
        var phonePattern = /^\+?[1-9]\d{1,14}$|^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            $("#wrongPhone").css({display: "block"});

        }
       
        return isValid
    }
    function showMess(id){
        console.log(id);
        $(id).fadeTo(0, 1);
        $(id).fadeTo(3000, 0);
    }
    function checkBtnDateReg() {
        var selectedDate = null;
    
        // Loop through each element with the class .booking-date-item
        $('.booking-date-item').each(function() {
            // Get the background color of the current element
            var backgroundColor = $(this).css('background-color');
            
            // Check if the background color is white
            if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === '#ffffff') {
                // Get the date value of the current element
                selectedDate = $(this).find('.booking-date-date').text().trim();
                // Exit the loop since we found a white background
                 // Log the length and value of selectedDate for debugging
                console.log(selectedDate.length);
                console.log(selectedDate);

                // Check if the date format is shorter than expected and add the current year
                if (selectedDate.length < 6) {
                selectedDate = selectedDate + "/" + (new Date()).getFullYear();
            }
            
            }
        });
    
        // Return the selected date (or null if no white background was found)
        return selectedDate;
    }

    function checkBtnTimeReg() {
        var selectedTime = null;
    
        // Loop through each element with the class .booking-date-item
        $('.booking-time-item').each(function() {
            // Get the background color of the current element
            var backgroundColor = $(this).css('background-color');
            
            // Check if the background color is white
            if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === '#ffffff') {
                // Get the date value of the current element
                selectedTime = $(this).find('.booking-time').text().trim();
                // Exit the loop since we found a white background
               
            }
        });
    
        // Return the selected date (or null if no white background was found)
        return selectedTime;
    }
    function checkEmptyReg() {
        let isValid = true;
    
        $('#formReg input[type=text]').each(function() {
            if ($(this).val().length === 0) {
                console.log("wrong: " + $(this).attr("id"));
                isValid = false;
                return false; // Exits the each loop
            }
        });
    
    
        // Uncomment and adapt this section if you also want to check date inputs
        
        $('#formReg input[type=date]').each(function() {
            if ($(this).val().length === 0) {
                console.log("wrong: " + $(this).attr("id"));
                isValid = false;
                return false; // Exits the each loop
            }
        });
        
        $('#formReg textarea').each(function() {
            if ($(this).val().length === 0) {
                console.log("wrong: " + $(this).attr("id"));
                isValid = false;
                return false; // Exits the each loop
            }
        });
        var date = checkBtnDateReg();
        console.log(date);
        if(date == null)
        {
            console.log("check date");
            isValid = false;
            return false; 
        }
        var time = checkBtnTimeReg();
        if(time == null)
        {
            console.log("check time");

            isValid = false;
            return false; 
        }
        if (!isValid) return false;
    
        return isValid;
    }
    
    function confirmRegister(){
        var name = $("#formReg-name").val();
        var dateBirth = $("#formReg-dateBirth").val();
        var phoneNumber = $("#formReg-phoneNumber").val();
        var anamnesis = $("#formReg-anamnesis").val();
        var address = $("#formReg-address").val();
        var symptom = $("#formReg-symptom").val();
        var email = $("#formReg-email").val();
        var gender = $(".form-check input:radio:checked").val();
        var date = checkBtnDateReg();
        var time = checkBtnTimeReg();
        console.log(date);
        if(gender == "Nu")
            {
                gender = "Nữ";
            }

        
        $("#notification-name").text(name);
        $("#notification-dateBirth").text(dateBirth);
        $("#notification-anamnesis").text(anamnesis);
        $("#notification-phoneNumber").text(phoneNumber);
        $("#notification-email").text(email);
        $("#notification-symptom").text(symptom);
        $("#notification-address").text(address);
        $("#notification-gender").text(gender);
        $("#notification-time").text(time + " " + date);
    }
    
    $("#formReg-dateBirth").on('change', function(){
        $(this).css({color: "black "});
    })
    $("#otherDateReg").click(function() {
        $("#datepicker-container").show();
    });
    $('#select-delivery-date-input').datepicker({ 
        dateFormat:'dd/mm/yy',
        minDate: new Date(),
        onSelect: function(selectedDate){
          $("#otherDateText").text(selectedDate);
          $("#otherDateText").addClass("otherDateRegChoose");
          $("#datepicker-container").hide();
        }
      });
});