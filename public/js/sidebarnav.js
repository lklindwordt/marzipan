(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    sidebarnav: function(options) {
      var fadeInMainNavigation, fadeInSubNavigation, fadeOutMainNavigation, init, log, select, settings, slideHeader;
      settings = {
        sidebar: {
          el: false,
          top: 0,
          left: 0
        },
        animate: true,
        duration: 300,
        debug: false
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        if (settings.debug) {
          return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
        }
      };
      init = function(item) {
        var offset;
        if (!settings.sidebar.el) {
          offset = $(item).offset();
          settings.sidebar.el = item;
          settings.sidebar.top = offset.top;
          return settings.sidebar.left = offset.left;
        }
      };
      select = function(item) {
        var header, offset;
        offset = $(item).offset();
        header = $('<div>').addClass("header new").css({
          top: offset.top - settings.sidebar.top,
          width: $(item).width(),
          backgroundColor: $(item).find('span').css("background-color")
        });
        header.html($(item).html());
        $(settings.sidebar.el).append(header);
        return fadeOutMainNavigation(item);
      };
      fadeOutMainNavigation = function(item) {
        $('.back').remove();
        $('.sub-nav').remove();
        $('.header.active').animate({
          left: "-200px"
        }, settings.duration, function() {
          return $(this).remove();
        });
        return $(settings.sidebar.el).find('.main-nav').animate({
          left: "-200px"
        }, settings.duration, function() {
          $(settings.sidebar.el).find('li').removeClass("selected");
          $(item).parent('li').addClass("selected");
          return slideHeader();
        });
      };
      slideHeader = function(item) {
        var header;
        header = $('.header.new').removeClass("new").addClass("active");
        if (header.offset().top === settings.sidebar.top) {
          return fadeInSubNavigation();
        } else {
          return header.animate({
            top: 0
          }, settings.duration, function() {
            return fadeInSubNavigation();
          });
        }
      };
      fadeInSubNavigation = function() {
        var arrow, back, subnav;
        arrow = $('<i>').addClass("fi-arrow-left");
        back = $('<div>').addClass("back").append(arrow);
        back.on('mouseover', function() {
          return fadeInMainNavigation();
        });
        $(settings.sidebar.el).append(back);
        subnav = $('<ul>').addClass("sub-nav").html($('.selected').find('ul').html());
        return $(settings.sidebar.el).append(subnav);
      };
      fadeInMainNavigation = function() {
        return $(settings.sidebar.el).find('.main-nav').addClass('slide-in').animate({
          left: 0
        }, settings.duration, function() {
          return $('.slide-in').on('mouseleave', function() {
            return $('.slide-in').animate({
              left: "-200px"
            }, settings.duration, function() {
              return $('slide-in').removeClass("slide-in");
            });
          });
        });
      };
      return this.each(function() {
        init(this);
        return $(this).find('li a').on('click', function() {
          return select(this);
        });
      });
    }
  });

}).call(this);
