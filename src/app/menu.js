export default () => {
    const button = document.querySelector('.menu-button');

    button.addEventListener('click', () => {
        const oldWidth = document.body.clientWidth;
        const menu = document.querySelector('.menu');
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;

        menu.style.top = `${headerHeight}px`;

        document.documentElement.style.overflow = document.documentElement.style.overflow =='hidden' ? 'visible' : 'hidden';
        
        if(menu.classList.contains('active') && window.pageYOffset < 10){
            header.classList.remove('header_white');
        } else {
            header.classList.add('header_white');
        }

        button.classList.toggle('active');
        menu.classList.toggle('active');

        const newWidth = document.body.clientWidth;

        if(oldWidth < newWidth) {
            header.style.paddingRight = (parseFloat( getComputedStyle(header).paddingRight ) + 17) + 'px';
        } else {
            header.style.paddingRight = '';
        }
    });

    window.addEventListener('resize', () => {
        const header = document.querySelector('.header');
        const menu = document.querySelector('.menu');
        const headerHeight = header.offsetHeight;

        if(menu.classList.contains('active')) {
            menu.style.top = `${headerHeight}px`;
        }

        if(menu.classList.contains('active')) {
            header.style.paddingRight = '';
            header.style.paddingRight = (parseFloat( getComputedStyle(header).paddingRight ) + 17) + 'px';
        }

    });

    const moveContacts = () => {
        const phone = document.querySelector('.phone');
        const socials = document.querySelector('.socials');
        const menuList = document.querySelector('.menu__list');
        const container = document.querySelector('.header__right');

        if(document.documentElement.clientWidth <= 783 && !menuList.closest('.menu.active')) {
            menuList.prepend(phone);
            menuList.append(socials);
        } else if(document.documentElement.clientWidth <= 800 && menuList.closest('.menu.active')) {
            menuList.prepend(phone);
            menuList.append(socials);
        } else if(!phone.parentElement.classList.contains('header__right')) {
            container.prepend(phone);
            phone.after(socials);
        }
    };

    moveContacts();

    window.addEventListener('resize', moveContacts);
}