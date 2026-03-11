function setScrollbarWidth() {
    // Вычисляем ширину скроллбара
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Создаем переменную на уровне всего документа (:root)
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

// Запускаем один раз при загрузке
setScrollbarWidth();

// И обновляем, если пользователь изменил размер окна (например, повернул телефон)
window.addEventListener('resize', setScrollbarWidth);