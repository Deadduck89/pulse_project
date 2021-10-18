$(document).ready(function(){


    const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controls: false,
      nav: false,
      preventScrollOnTouch: 'auto',
      speed: 1200,
      autoplay: true,
      autoplayButtonOutput: false
    });

    document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
    });

    document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
        .index()).addClass('catalog__content_active');
    });


    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
        })
      })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Модальные окна

    $('[data-model=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow')
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });

    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow')
      })
    });

    function formValidate(form){
      $(form).validate({
        rules:{
          name: "required",
          phone: {
            required: true,
            minlength:11
          },
          email:{
            required:true,
            email:true
          }
        },
        messages:{
          name: "Пожалуйста, представьтесь",
          phone: {
            required: "Укажите номер телефона",
            minlength: jQuery.validator.format("Укажите {0} цифр номера")
          },
          email:{
            required:"Укажите e-mail для обратной связи",
            email:"Укажите e-mail в верном формате"
          }
        }
      });
    }
    formValidate('#consultation form');
    formValidate('#order form');
    formValidate('#consultation-form');

    $('input[name=phone]').mask("+7(999)999-99-99")
});