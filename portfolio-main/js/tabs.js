const tabButtons = document.querySelectorAll('.design-list__item');
const tabDesrciptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabTitle = document.querySelector('.design__title');

document.title = tabTitle.innerText;

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });

};

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabDesrciptions, dataValue);
        changeContent(tabImages, dataValue);

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });
    });
});



