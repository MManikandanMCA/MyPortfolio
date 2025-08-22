const logoContainer = document.getElementById('logo-container');
        const textContainer = document.getElementById('textContainer');
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        setTimeout(() => {
            logoContainer.classList.add('move-to-corner');

            setTimeout(() => {
                textContainer.classList.add('show');
                document.querySelector('.names').classList.add('typing');
                document.querySelector('.domain').classList.add('typing');
                document.body.classList.add('changed');
            }, 1000);
        }, 2500);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Typed.js Initialization 
        var typed = new Typed('.multitext', {
            strings: ['Developer','Coder','FreeLancer'],
            typeSpeed: 120,
            backSpeed: 80,
            backDelay: 1000,
            startDelay: 1000,
            loop: true
        });