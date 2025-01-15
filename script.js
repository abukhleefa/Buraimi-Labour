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


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



