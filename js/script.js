document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');
    const sections = document.querySelectorAll('section');
    let swiper; // Variable para almacenar la instancia del Swiper

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            sections.forEach((section) => {
                section.style.display = 'none';
            });

            sections[index].style.display = 'block';

            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            // Destruye la instancia anterior del Swiper si existe
            if (swiper) {
                swiper.destroy();
            }

            // Inicializa un nuevo Swiper en la sección activa
            swiper = new Swiper(sections[index].querySelector('.mySwiper'), {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 15,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                },
                loop: true,
            });
        });
    });

    sections[0].style.display = 'block';
    buttons[0].classList.add('active');

    // Inicializa el Swiper en la primera sección al cargar la página
    swiper = new Swiper(sections[0].querySelector('.mySwiper'), {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
    });
});
