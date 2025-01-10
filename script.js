document.addEventListener('DOMContentLoaded', function () {
    // اختيار جميع الأسئلة
    const questions = document.querySelectorAll('.faq-section');

    questions.forEach(function (section) {
        section.addEventListener('click', function () {
            const answer = this.querySelector('p');

            // إظهار أو إخفاء الإجابة
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.classList.remove('open'); // إزالة الفئة "open"
            } else {
                answer.style.display = 'block';
                this.classList.add('open'); // إضافة الفئة "open"
            }
        });
    });
});