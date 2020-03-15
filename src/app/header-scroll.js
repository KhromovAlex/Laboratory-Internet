export default () => {
    const headerNode = document.querySelector('.header');

    const scrollDocument = () => {
        if(window.pageYOffset > 10) {
            headerNode.classList.add('header_white');
        } else {
            headerNode.classList.remove('header_white');
        }
    };
    
    window.addEventListener('scroll', scrollDocument);
}