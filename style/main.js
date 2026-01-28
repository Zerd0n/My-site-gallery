document.addEventListener('DOMContentLoaded', function() {

    const galleryCards = document.querySelectorAll('.gallery-card');
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
        window.location.href = 'https://t.me/ZepDoH'; 
    });
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    const images = [];

    galleryCards.forEach((card, index) => {
        const img = card.querySelector('img');
        if (img) {
            images.push(img.src);
        }
        
        // Открытие lightbox при клике на gallery-card
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img && lightbox && lightboxImage) {
                currentImageIndex = index;
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                lightbox.style.display = 'flex';
                document.body.classList.add('no-scroll');
            }
        });
    });

    // Показать предыдущее изображение
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex];
    }

    // Показать следующее изображение
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex];
    }

    // Закрытие lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    // Обработчики кнопок
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

 
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

 
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
});
