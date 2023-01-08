var typed = new Typed('#typed', {
    // Waits 1000ms after typing "First"
    strings: [
        'Web Developer', 
        'Web Designer',
        'Graphic Designer',
        'UI/UX Designer',
    ],

    stringselement:null,
    typedSpeed: 20,
    startDelay:150,
    backSpeed:20,
    backDelay:1000,
    loop: true,
    loopCount:550,
    showCursor:true,
    cursorChar:"",
    attr:null,
    contentTypeL:"html",
  });

  //Mixitup

  //navtoggle
  $(document).ready(function (){
$(".navbar-toggler").click(function () {
    $(".small-device").slideToggle()
})
  })


