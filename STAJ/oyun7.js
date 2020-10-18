var optDurum = false,
    opt = "",
    sonuc = 0;


//nesnelerin oluşturulması
var btnRakam = document.querySelectorAll(".btnRakam");
var gosterge = document.querySelector("#gosterge");
var btnOpt = document.querySelectorAll(".btnOpt"); //işlem butanları
var islem = document.querySelector("#islem");
var btnCE = document.querySelector(".btnCE");
var btnC = document.querySelector(".btnC");
var btnEsit = document.querySelector(".btnEsit");
var btnNokta = document.querySelector(".btnNokta");
//butanlara basıldı kontrolü
btnRakam.forEach(function(element) {
    element.onclick = function(e) {
        //text nesnesini okuyup td içindeki değerlerle birleştirdik

        if (gosterge.textContent == "0" || optDurum) {
            gosterge.textContent = "";

        }


        gosterge.textContent += this.textContent;
        optDurum = false;
    }
});

btnOpt.forEach(function(element) {
    element.onclick = function(e) {
        optDurum = true;
        var yeniOpt = this.textContent;
        //işlem paneli
        islem.textContent = islem.textContent + " " + gosterge.textContent + " " + yeniOpt;

        //sonuç yazılcak
        switch (opt) {
            case "+":
                gosterge.textContent = (sonuc + Number(gosterge.textContent));
                break;
            case "-":
                gosterge.textContent = (sonuc - Number(gosterge.textContent));
                break;
            case "*":
                gosterge.textContent = (sonuc * Number(gosterge.textContent));
                break;
            case "/":
                gosterge.textContent = (sonuc / Number(gosterge.textContent));
                break;
            default:
                break;

        }

        sonuc = Number(gosterge.textContent);
        opt = yeniOpt;
    }
});

btnC.onclick = function(e) {
    gosterge.textContent = "";
}
btnCE.onclick = function(e) {
    gosterge.textContent = "";
    islem.textContent = "";
    sonuc = 0;
    opt = "";
}
btnEsit.onclick = function(e) {
    islem.textContent = "";
    optDurum = true;
    switch (opt) {
        case "+":
            gosterge.textContent = (sonuc + Number(gosterge.textContent));
            break;
        case "-":
            gosterge.textContent = (sonuc - Number(gosterge.textContent));
            break;
        case "*":
            gosterge.textContent = (sonuc * Number(gosterge.textContent));
            break;
        case "/":
            gosterge.textContent = (sonuc / Number(gosterge.textContent));
            break;
        default:
            break;

    }
    sonuc = Number(gosterge.textContent);
    gosterge.textContent = sonuc;
    sonuc = 0;
    opt = "";
}

btnNokta.onclick = function(e) {
    if (!optDurum && !gosterge.textContent.includes(".")) {
        gosterge.textContent += ".";
    } else if (optDurum) {
        gosterge.textContent = "0";
    }
    if (!gosterge.textContent.includes(".")) {
        gosterge.textContent += ".";
    }
    optDurum = false;
}