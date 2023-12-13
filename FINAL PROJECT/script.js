document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const navItems = document.querySelectorAll('.navlist a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    const header = document.querySelector("header");
    let ticking = false;

    window.addEventListener("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                header.classList.toggle("sticky", window.scrollY > 100);
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleWindowResize() {
        if (window.innerWidth > 768) {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        }
    }

    window.addEventListener('resize', function() {
        handleWindowResize();

        // If the window is resized and its width goes back to the default size,
        // make sure to remove the 'active' class to return to horizontal layout
        if (window.innerWidth > 768 && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });

    handleWindowResize();
});
