   // file upload preview
// function readURL(input) {

//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
     
//       reader.onload = function (e) {
  
//         // Use the input element's name attrbute to select and
//         // update the image element with matching id
//         $('#' + input.name).attr('src', e.target.result);

        
//       }
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

jQuery(document).ready(function ($) {
    // document start


    // Navbar
    $("<span class='clickD'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
    $('.navbar-nav li .clickD').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        }
        else {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
    });

    $(window).on('resize', function () {
        if ($(this).width() < 1025) {
            $('html').click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $(document).click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $('.navbar-nav').click(function (e) {
                e.stopPropagation();
            });
        }
    });
    // Navbar end



    /* ===== For menu animation === */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html').toggleClass("open-nav");
    });

    // for dashboard menu open
    $(".dashboardMenu_btn").click(function () {
         $("#dashboardMenuOverlay").toggleClass("open");
        $('body,html').toggleClass("open-dash-nav");
        $('.dashboard_left').addClass("show");

    });
    $("#dashboardMenuOverlay").click(function () {
        $('body,html').removeClass("open-dash-nav");
        $('.dashboard_left').removeClass("show");
        $(this).removeClass("open");
    });
    $(".dashboardMneu_closeBtn").click(function () {
        $('body,html').removeClass("open-dash-nav");
        $('.dashboard_left').removeClass("show");
        $("#dashboardMenuOverlay").removeClass("open");
    });


    // Navbar end

    $(".dashboardDropdown_hasItem .openDropDownMenu").click(function (e) {
        e.preventDefault();
        $('.openDropDownMenu').not(this).parent().next().removeClass('open');
        $('.openDropDownMenu').not(this).parent().parent().removeClass('menu_active');
        $('.openDropDownMenu').not(this).removeClass('active');
        $(this).parent().next().toggleClass('open');
        $(this).parent().parent().toggleClass('menu_active');
        $(this).toggleClass('active');
    });


    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".cmn_single_select").select2({
        placeholder: "Choisir",
        allowClear: true
    });
    $(".cmn_multi_select").select2({
        placeholder: "Choisir",

    });

    $('.upload_preview figure img').click(function() {
        // clicks on the respective input
        $(this).parent().parent().parent().find('input').click();
      });
      // creates an onchange event listener for all the inputs
      $('.fileUpload_box_cntent input').change(function() {
        // holds scope for this input
        var selector = $(this);
        // selector[0] references the direct element without jQuery since we need to access the files object inside of it
        if (selector[0].files && selector[0].files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            selector.parent().next().find( "img" ).attr('src', e.target.result);
            selector.parent().next().removeClass("hide");
            selector.parent().addClass("hide");
          }
          reader.readAsDataURL(selector[0].files[0]);
        }else{
            selector.parent().removeClass("hide");
        }   
      });
      $('.upload_preview_close').click(function() {
        $(this).parent().prev().removeClass("hide");
        $(this).next().find("img").attr('src', '');
        $(this).parent().addClass("hide");
        
      });
   

    //   use image preview
    $('#userImgUpload').change(function() {
        var selector = $(this);
        if (selector[0].files && selector[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              selector.parent().parent().find( "img" ).attr('src', e.target.result);
            }
            reader.readAsDataURL(selector[0].files[0]);
          }
    });

     $('#userImgDelete').click(function() {
        $(this).parent().prev().find( "img" ).attr('src', "../images/user-placeholder.png");
     });
    // document end

})


