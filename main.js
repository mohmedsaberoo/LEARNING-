// جافاسكريبت مشترك لجميع الصفحات
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة السنة الحالية
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // القائمة المتحركة للجوال
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // تهيئة خلفية Canvas (يمكن استدعاؤها من الصفحات التي تحتاجها)
    window.initCyberBackground = function() {
        const canvas = document.getElementById('cyberCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // باقي كود الخلفية...
    };
});