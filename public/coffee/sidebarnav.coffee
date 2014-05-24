# Reference jQuery
$ = jQuery

$.fn.extend

  sidebarnav: (options) ->

    settings =
      sidebar:
        el: false
        top: 0
        left: 0
      animate: true
      duration: 300
      debug: false


    settings = $.extend settings, options

    log = (msg) ->
      console?.log msg if settings.debug

    init = (item) ->
      unless settings.sidebar.el
        offset = $(item).offset()
        settings.sidebar.el = item
        settings.sidebar.top = offset.top
        settings.sidebar.left = offset.left


    select = (item) ->
      offset = $(item).offset()
      header = $('<div>').addClass("header new").css {
        top: offset.top - settings.sidebar.top
        width: $(item).width()
        backgroundColor: $(item).find('span').css "background-color"
      }
      header.html $(item).html()
      $(settings.sidebar.el).append header

      fadeOutMainNavigation(item)

    fadeOutMainNavigation = (item) ->
      # remove back element
      $('.back').remove()

      # remove sub-nav element
      $('.sub-nav').remove()

      # Fade Header if exists
      $('.header.active').animate {
        left: "-200px"
      }, settings.duration, () ->
        # remove element
        $(@).remove()

      $(settings.sidebar.el).find('.main-nav').animate {
        left: "-200px"
      }, (settings.duration), () ->
        $(settings.sidebar.el).find('li').removeClass "selected"
        $(item).parent('li').addClass "selected"

        slideHeader()

    slideHeader = (item) ->
      header = $('.header.new').removeClass("new").addClass("active")

      if header.offset().top == settings.sidebar.top
        fadeInSubNavigation()
      else
        header.animate {
            top: 0
          }, settings.duration, () ->
            fadeInSubNavigation()

    fadeInSubNavigation = () ->
      arrow = $('<i>').addClass "fi-arrow-left"
      back = $('<div>').addClass("back").append arrow
      back.on 'mouseover', () ->
        fadeInMainNavigation()
      $(settings.sidebar.el).append back

      subnav = $('<ul>').addClass("sub-nav").html $('.selected').find('ul').html()
      $(settings.sidebar.el).append subnav

    fadeInMainNavigation = () ->
      $(settings.sidebar.el).find('.main-nav').addClass('slide-in').animate {
        left: 0
      }, (settings.duration), () ->

        $('.slide-in').on 'mouseleave', () ->
          $('.slide-in').animate {
            left: "-200px"
          }, settings.duration, () ->
            $('slide-in').removeClass "slide-in"


    return @each () ->
      init(@)

      $(@).find('li a').on 'click', ->
        select(@)
