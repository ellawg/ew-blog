// Open / close menu

(function($){
  $(".nav-open").click(function(){
    $(".nav-open").toggle();
    $("#menu").width("100vw");
  });
})(jQuery);

(function($){
  $(".nav-close").click(function(){
    $("#menu").width("0");
    $(".nav-open").toggle();
  });
})(jQuery);

// About

(function($){
  $("#open_om-ella").click(function(){
    $("#menu_about").height("100vh");
  });
})(jQuery);

(function($){
  $(".slide-down").click(function(){
    $("#menu_about").height(0);
  });
})(jQuery);


// Categories

(function($){
  $("#open_kategorier").click(function(){
    $("#menu_categories").height("100vh");
  });
})(jQuery);

(function($){
  $(".slide-down").click(function(){
    $("#menu_categories").height(0);
  });
})(jQuery);

// Archive

(function($){
  $("#open_arkiv").click(function(){
    $("#menu_archive").height("100vh");
  });
})(jQuery);

(function($){
  $(".slide-down").click(function(){
    $("#menu_archive").height(0);
  });
})(jQuery);
