/* inicializacion AOS*/ 
AOS.init();

/* navbar */ 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

/* carousel */ 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

var options = {
    indicator: true,
    numvisible: 5,
    padding: 15
}
