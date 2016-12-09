$(function() {
  var $level1, $menu, $more, $wrapper, toggleAllClass;
  $wrapper = $('#lp-metanav');
  $menu = $wrapper.find('.menu');
  $more = $wrapper.find('.more');
  $level1 = $wrapper.find('.menu__level1__element');
  toggleAllClass = function() {
    $more.removeClass('more--active');
    return $level1.removeClass('menu__level1__element--active');
  };
  $('.menu__level1__element', $wrapper).each(function() {
    var $currentEl, $subMenu;
    $currentEl = $(this);
    $subMenu = $currentEl.find('.menu__level2');
    return $currentEl.on('click', '.menu__level1__title', function(e) {
      var isActif;
      if ($subMenu.length) {
        e.preventDefault();
        isActif = !$currentEl.hasClass('menu__level1__element--active');
        toggleAllClass();
        return $currentEl.toggleClass('menu__level1__element--active', isActif);
      }
    });
  });
  $wrapper.on('click', '.more__title', function(e) {
    var isActif;
    e.preventDefault();
    isActif = !$more.hasClass('more--active');
    toggleAllClass();
    $menu.removeClass('menu--active');
    return $more.toggleClass('more--active', isActif);
  });
  $wrapper.on('click', '.menu__header', function(e) {
    var isActif;
    e.preventDefault();
    isActif = !$menu.hasClass('menu--active');
    toggleAllClass();
    return $menu.toggleClass('menu--active', isActif);
  });
  $(document).on('keyup.getFocusMetaNav', function(e) {
    if (e.keyCode === 9) {
      if (!$(e.target).closest('.menu__level1__element').hasClass('menu__level1__element--active')) {
        $level1.removeClass('menu__level1__element--active');
      }
      if (!$(e.target).closest('.more').hasClass('more--active')) {
        $more.removeClass('more--active');
      }
      if (!$(e.target).closest('.menu').hasClass('menu--active')) {
        return $menu.removeClass('menu--active');
      }
    }
  });
  $(document).on('keydown.escapeMetaNav', function(e) {
    if (e.keyCode === 27) {
      return toggleAllClass();
    }
  });
  return $('body').on('click.escapeMetaNav', function(e) {
    if (!$(e.target).closest($wrapper).length) {
      return toggleAllClass();
    }
  });
});
