document.addEventListener("DOMContentLoaded", function() {
    // 1. Создаем темный фон (overlay) для увеличенной картинки
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        display: none; 
        position: fixed; 
        top: 0; left: 0; 
        width: 100%; height: 100%; 
        background: rgba(0, 0, 0, 0.85); 
        z-index: 9999; 
        align-items: center; 
        justify-content: center; 
        cursor: zoom-out;
    `;
    
    // 2. Создаем элемент самой картинки внутри фона
    const img = document.createElement('img');
    img.style.cssText = `
        max-width: 95vw; 
        max-height: 95vh; 
        object-fit: contain; 
        background: white; 
        padding: 10px; 
        border-radius: 5px;
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // 3. Закрытие увеличенной картинки по клику или кнопке Esc
    overlay.addEventListener('click', () => overlay.style.display = 'none');
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.style.display = 'none';
    });

    // 4. Ищем все картинки-ссылки в нашей таблице и вешаем на них клик
    const links = document.querySelectorAll('.dense-table a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем переход на новую страницу
            img.src = this.href; // Берем путь к картинке из ссылки
            overlay.style.display = 'flex'; // Показываем overlay
        });
    });
});