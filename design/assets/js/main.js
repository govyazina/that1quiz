let navSlide = () => {
    let burger = document.querySelector('.burger');
    let navMenu = document.querySelector('.nav-menu');
    let navlinks = document.querySelectorAll('.menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        navlinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }

        });

        burger.classList.toggle('active');

    });
}
navSlide();