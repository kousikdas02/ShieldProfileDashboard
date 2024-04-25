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


    // document end

})


