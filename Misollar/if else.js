// 1-misol

const son = +prompt("ixtiyoriy son kiriting!")

if (son > 0) {
    alert(`Siz kiritgan son musbat!`)
} else if (son == 0) {
    alert(`Siz kiritgan son 0 ga teng`)

} else {
    alert(`Siz kiritgan son manfiy!`)

}


// 2-misol
const temp = +prompt(`Havo haroratini kiriting ?`)

if (temp < 15) {
    alert(`Havo sovuq`)

} else if (temp >= 15 && temp < 30) {
    alert(`Havo motadil`)
} else if (temp >= 30) {
    alert(`Havo issiq`)
}

// 3-misol
const a = +prompt("Biror son kiriting!");

if (isNaN(a)) {
    alert("Xatolik, son kiriting!");
} else if (a === 0) {
    alert("Bu son 0!");
} else if (a % 2 === 0) {
    alert("Juft son!");
} else {
    alert("Toq son!");
}



//4-misol

const age = +prompt(`Yoshingizni kiriting ?`)

if (age >= 18) {
    alert(`Voyaga yetgan!`)
} else if (age > 0) {
    alert(`Voyaga yetmagan`)
}
else {
    alert(`xatolik qayta urining!`)
}

// 5-misol
const password = 12345

const user = +prompt(`Saytga kirish uchun parolingizni kiriting!`)

if (user === password) {
    alert(`Parol to'g'ri`)
} else {
    alert(`Noto‘g‘ri parol`)
}


//6-misol

const profit = +prompt(`Foydangizni millionda kiriting!`)

if (isNaN(profit)) {
    alert(`Error Foydangizni millionda va raqamda kiriting!`)
} else if (profit < 10) {
    const soliq = profit * 0.05
    alert(`Sizning foydangiz ${profit} million, daromad soligingiz ${soliq} million.`)

} else if (profit > 10 && profit < 20) {
    const soliq = profit * 0.1
    alert(`Sizning foydangiz ${profit} million, daromad soligingiz ${soliq} million.`)

} else if (profit < 20) {
    const soliq = profit * 0.15
    alert(`Sizning foydangiz ${profit} million, daromad soligingiz ${soliq} million.`)

}

//7-misol

const pay = +prompt(`Maoshingizni hisoblash uchun haftalik ish soatingizni kiriting!`)

if (isNaN(pay)) {
    alert(`Xatolik vaqtni raqamda kiriting!`)

} else if (pay < 40) {
    const maosh = pay * 10
    alert(`Siz hafta davomida ${pay} soat ishlagansiz, sizga tolanadigan haq ${maosh}$.`)

} else {
    const maosh = pay * 15
    alert(`Siz hafta davomida ${pay} soat ishlagansiz, sizga tolanadigan haq ${maosh}$.`)

}


//8-miol

const money = +prompt(`Yillik omonatingiz miqdorini (millionda) kiriting!`)

if (money < 1) {

    const daromad = money * 0.03 + money
    alert(`Sizni omonatingizni bir yildan keyingi qiymati ${daromad}`)

} else if (money >= 1 && money < 5) {
    const daromad = money * 0.05 + money
    alert(`Sizni omonatingizni bir yildan keyingi qiymati ${daromad}`)

} else if (money >= 5) {
    const daromad = money * 0.07 + money
    alert(`Sizni omonatingizni bir yildan keyingi qiymati ${daromad}`)
} else if (isNaN(money)) {
    alert(`Xatolik `)
}


//9-misol

const speed = +prompt(`Avtomabil tezligini kriting!`)


if (isNaN(speed)) {
    alert(`xatolik, tezlikni raqamda kiriting!`)

} else if (speed < 60) {
    alert(`Yol qoidasi buzilmagan oq Yol!`)

} else if (speed > 60 && speed < 80) {

    alert(`Belgilangan tezlikdan oshish aniqlangan jarima 100 000 som.`)

} else if (speed > 80) {

    alert(`Belgilangan tezlikdan oshish aniqlangan jarima 300 000 som.`)

}




//10-misol 
const budjet = +prompt("Jami mablagingizni kiriting!");
if (isNaN(budjet) || budjet <= 0) {
    alert("Iltimos, to'g'ri mablag' kiriting!");
} else {
    const Iphone = +prompt("Iphone 16 Pro Max (price: 1300) necha dona olmoqchisiz?");
    const Acer = +prompt("Acer Aspire 5 (price: 800) necha dona olmoqchisiz?");
    const Airpods = +prompt("Airpods (price: 100) necha dona olmoqchisiz?");
    
    if (
        isNaN(Iphone) || Iphone < 0 ||
        isNaN(Acer) || Acer < 0 ||
        isNaN(Airpods) || Airpods < 0
    ) {
        alert("Iltimos, mahsulot miqdorini to'g'ri kiriting!");
    } else {
        const total = Iphone * 1300 + Acer * 800 + Airpods * 100;
        const summa = budjet - total;

        if (summa > 0) {
            alert(`Sizning xaridingizdan so'ng ${summa} so'm mablag'ingiz qoldi.`);
        } else if (summa === 0) {
            alert("Sizning mablag'ingiz to'liq xaridga ketdi, lekin qarzdor emassiz.");
        } else {
            alert(`Siz xariddan so'ng ${Math.abs(summa)} so'm qarzga botdingiz.`);
        }
    }
}
