// التبديل بين إظهار وإخفاء القائمة عند الضغط على زر القائمة
document.querySelector(".menu-toggle").addEventListener("click", function () {
    const menu = document.querySelector("nav ul.menu");
    menu.classList.toggle("show");
});
document.getElementById('toggle-button').addEventListener('click', function() {
    const fullText = document.getElementById('full-text');
    const button = document.getElementById('toggle-button');

    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        button.textContent = 'عرض أقل';
    } else {
        fullText.style.display = 'none';
        button.textContent = 'عرض المزيد';
    }
});
function toggleText(section) {
    var fullText = document.querySelector('#' + section + ' .full-text');
    var shortText = document.querySelector('#' + section + ' .short-text');
    var button = document.querySelector('#' + section + ' button');
    
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        button.innerText = "عرض أقل";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        button.innerText = "عرض المزيد";
    }
}
