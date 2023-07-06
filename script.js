function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = "./imgHora/fotomanha.png";
        document.body.style.backgroundColor = "#F5DEB3";
    } else if (hora >= 12 && hora <= 18) {
        img.src = "./imgHora/fototarde.png";
        document.body.style.backgroundColor = "#DAA520";
    } else {
        img.src = "./imgHora/fotonoite.png";
        document.body.style.backgroundColor = "#2F4F4F";
    }
}

function calcular() {
    var data = new Date();
    var ano = data.getFullYear();
    var txtano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("radesex");
        var idade = ano - Number(txtano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Masculino";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./ImgIdade/foto-bebe-m.png");
            } else if (idade < 21) {
                img.setAttribute("src", "./ImgIdade/foto-jovem-m.png");
            } else if (idade < 50) {
                img.setAttribute("src", "./ImgIdade/foto-adulto-m.png");
            } else {
                img.setAttribute("src", "./ImgIdade/foto-idoso-m.png");
            }
        } else if (fsex[1].checked) {
            genero = "Feminino";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "./ImgIdade/foto-bebe-f.png");
            } else if (idade < 21) {
                img.setAttribute("src", "./ImgIdade/foto-jovem-f.png");
            } else if (idade < 50) {
                img.setAttribute("src", "./ImgIdade/foto-adulto-f.png");
            } else {
                img.setAttribute("src", "./ImgIdade/foto-idoso-f.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos. <br>`;
        res.appendChild(img);
    }
}
