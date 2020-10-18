var sayi1, sayi2, dogru = 0,
    yanlis = 0,
    sonuc, cevapla, opt;



sayi1 = document.getElementById("sayi1");
sayi2 = document.getElementById("sayi2");
opt = document.getElementById("opt");
sonuc = document.getElementById("sonuc");
cevapla = document.getElementById("cevapla");
dogru = document.getElementById("dogru");
yanlis = document.getElementById("yanlis");


Math.rastgele = function(alt, ust) {
    let sayi = Math.random();
    sayi = sayi * (ust - alt);
    sayi = Math.floor(sayi) + alt;

    return sayi;
}

function yeniSoru() {
    let islem = ["+", "+", "+", "+"];
    opt.textContent = islem[Math.rastgele(0, 4)]; //operatör seçimi
    sayi1.textContent = Math.rastgele(0, 50);
    sayi2.textContent = Math.rastgele(0, 50);
}


window.onload = function() {

    yeniSoru();

}
cevapla.onclick = function() {
    let cevap, s1, s2;
    s1 = Number(sayi1.textContent);
    s2 = Number(sayi2.textContent);
    switch (opt.textContent) {
        case '+':
            cevap = s1 + s2;
            break;
        case "-":
            cevap = s1 - s2;
            break;
        case "*":
            cevap = s1 * s2;
            break;
        case "/":
            cevap = s1 / s2;
            break;
        default:
            break;
    }

    if (sonuc.value == cevap) {
        dogru.textContent = Number(dogru.textContent) + 1;
    } else {
        yanlis.textContent = Number(yanlis.textContent) + 1;
    }

    yeniSoru();
}