// Tüm hesap makinesi butonlarını seçer ve 'buttons' adlı bir değişkene atar
let buttons = document.querySelectorAll(".button");
// Hesap makinesi input'unu seçer ve 'display' adlı bir değişkene atar
let display = document.querySelector(".display");

// Her buton için bir tıklama olayı tanımlar
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        // Tıklanan butonun değerini 'value' adlı bir değişkene atar
        let value = button.textContent;
        // Eğer tıklanan butonun değeri "C" ise
        if (value === "C") {
            // input'u temizler
            display.value = "";
            // Eğer tıklanan butonun değeri "=" ise
        } else if (value === "=") {
            try {
                // input'daki ifadeyi hesaplar ve sonucu ekranda gösterir
                display.value = eval(display.value);
            } catch (e) {
                // Hata oluşursa ekrana "Error" yazar
                display.value = "Error";
            }
            // Diğer butonlar için (rakamlar ve operatörler)
        } else {
            // Tıklanan butonun değerini input'daki mevcut değerin sonuna ekler
            display.value += value;
        }
    });
});
