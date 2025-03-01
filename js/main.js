// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        
        if(!groupHeader) return;
        
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const groupIcon = group.querySelector('i');

        // Toggle Icon
        groupIcon.classList.toggle('fa-plus');
        groupIcon.classList.toggle('fa-minus');

        //Toggle visibility of Body
        groupBody.classList.toggle('open');

        //Close previously open faq bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup != group) {
                const  otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const  otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});


//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});
