let currentArtSlide = 0;
        const artSlides = document.querySelectorAll('#art-carousel .carousel-slide');

        function showArtSlide(index) {
            const totalSlides = artSlides.length;
            if (index >= totalSlides) {
                currentArtSlide = 0;
            } else if (index < 0) {
                currentArtSlide = totalSlides - 1;
            } else {
                currentArtSlide = index;
            }

            const offset = -currentArtSlide * 100;
            document.querySelector('#art-carousel .carousel-slides').style.transform = `translateX(${offset}%)`;

        }

        function changeArtSlide(n) {
            showArtSlide(currentArtSlide + n);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showArtSlide(currentArtSlide);

            // Lightbox 
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const captionText = document.getElementById('caption');
            const closeBtn = document.querySelector('.lightbox .close');

            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', function() {
                    lightbox.style.display = 'block';
                    lightboxImg.src = this.querySelector('img').src;
                    captionText.innerHTML = this.getAttribute('data-caption');
                });
            });

            closeBtn.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });

            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                }
            });
        });