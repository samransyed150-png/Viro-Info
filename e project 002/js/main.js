// ==========================================
// ViroInfo - Main JavaScript (3 Functions Only)
// ==========================================

/**
 * Function 1: Filter viruses by type (viruses.html)
 */
function filterViruses(type) {
    const cards = document.querySelectorAll('.virus-card');
    const buttons = document.querySelectorAll('.btn-group-filter .btn');
    
    // Update active button
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(type)) {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');
        } else {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-primary');
        }
    });
    
    // Filter cards
    cards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.classList.remove('d-none');
            card.classList.add('fade-in');
        } else {
            card.classList.add('d-none');
        }
    });
}

/**
 * Function 2: Star rating system (feedback.html)
 */
function initStarRating() {
    const starContainer = document.getElementById('starRating');
    if (!starContainer) return;
    
    const stars = starContainer.querySelectorAll('i');
    const ratingInput = document.getElementById('ratingValue');
    let currentRating = 0;
    
    stars.forEach((star, index) => {
        const value = index + 1;
        
        star.addEventListener('mouseenter', () => highlightStars(value));
        star.addEventListener('click', () => {
            currentRating = value;
            ratingInput.value = value;
            highlightStars(value);
        });
    });
    
    starContainer.addEventListener('mouseleave', () => highlightStars(currentRating));
    
    function highlightStars(count) {
        stars.forEach((star, index) => {
            if (index < count) {
                star.classList.remove('bi-star');
                star.classList.add('bi-star-fill');
            } else {
                star.classList.remove('bi-star-fill');
                star.classList.add('bi-star');
            }
        });
    }
}

/**
 * Function 3: Bootstrap Form Validation + Initialize All
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize star rating
    initStarRating();
    
    // Bootstrap form validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
});