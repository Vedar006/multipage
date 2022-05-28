/*Проверка поддержки webp, добавление класса webp или no-webp для HTML  */
export function isWebp() {
    //Проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:"
    }
    //Добавление класса _webp или _no-webp для HTML
    testWebp(function(support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}