// $(document).ready(function(){
//   $('.carousel__inner').slick(
//     {
//       speed: 1200,
//       //adaptiveHeight: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/chevron-left-solid.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/chevron-right-solid.png"></button>',
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             dots: true,
//             arrows: false
//         }
//       }
//       ]
//     }
//   );
// });

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});