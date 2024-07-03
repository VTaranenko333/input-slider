function swapImage(clickedImg) {
    // Зберігаємо URL великого зображення, яке зараз показується
    var currentImgSrc = document.getElementById('mainImg').src;

    // Міняємо URL великого зображення на те, по якому клікнули
    document.getElementById('mainImg').src = clickedImg.src;

    // Переміщаємо попереднє велике зображення в галерею
    clickedImg.src = currentImgSrc;
}