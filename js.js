function toggleNavbar() {
    let nav = document.querySelector('.navbar-mobile');
    let navBox = document.querySelector('.navbar-mobile ul');

    if (nav.classList.contains('active')) {

        setTimeout(() => {
            nav.classList.remove('active');
        }, 250);

        if (!navBox.classList.contains('close')) {
            navBox.classList.add('close');

        }

        if (navBox.classList.contains('open')) {
            navBox.classList.remove('open');

        }

    } else {
        nav.classList.add('active');

        if (!navBox.classList.contains('open')) {
            navBox.classList.add('open');

        }

        if (navBox.classList.contains('close')) {
            navBox.classList.remove('close');

        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar-toggle').addEventListener('click', toggleNavbar);

});