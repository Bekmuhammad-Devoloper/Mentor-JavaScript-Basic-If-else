// 1-misol
const week = +prompt(`Hafta kunini kiriting!(1-7)`)

switch (week) {
    case 1:
        alert(`Dushanba`)

        break;
    case 2:
        alert(`Seshanba`)

        break;
    case 3:
        alert(`Chorshanba`)

        break;
    case 4:
        alert(`Payshanba`)

        break;
    case 5:
        alert(`Juma ayomingiz muborak bolsin`)

        break;
    case 6:
        alert(`Shanba`)

        break;
    case 7:
        alert(`Yakshanba`)

        break;

    default:
        alert(`Notogri raqam kiritdingiz iltimos 1 dan 7 gacha raqam kiriting!`)
        break;
}


// 2-misol
const maunth = +prompt(`OY kunini kiriting!(1-12)`)

switch (maunth) {
    case 1:
        alert(`Yanvar`)

        break;
    case 2:
        alert(`Fevral`)

        break;
    case 3:
        alert(`Mart`)

        break;
    case 4:
        alert(`Aprel`)

        break;
    case 5:
        alert(`May`)

        break;
    case 6:
        alert(`Iyun`)

        break;
    case 7:
        alert(`Iyul`)

        break;
    case 8:
        alert(`Avgust`)

        break;
    case 9:
        alert(`Sentabr`)

        break;
    case 10:
        alert(`Oktabr`)

        break;
    case 11:
        alert(`Noyabr`)

        break;
    case 12:
        alert(`Dekabr`)

        break;

    default:
        alert(`Notogri raqam kiritdingiz, Iltimos 1 dan 12 gacha raqamlarni kiriting!`)
        break;
}


//3-misol

const first = +prompt(`Birinchi sonni kiriting!`)
const second = +prompt(`Ikkinchi sonni kiriting!`)
const hint = prompt(`Ammalni (+,-,*,/) kiriting!`)


switch (hint) {
    case "+":
        let sum = first + second
        alert(`Yigindi ${res}`)
        break;
    case "-":
        let sub = first - second
        alert(`Ayirma ${sub}`)
        break;
    case "*":
        let res = first * second
        alert(`Kopaytma ${res}`)
        break;
    case "/":
        let whales = first / second
        alert(`Bolinma ${whales}`)
        break;

    default:
        alert(`Xatolik qaytadan urining!`)
        break;
}


//4-misol

const maunthNumber = +prompt(`OY raqamini kiriting!(1-12)`)

switch (maunthNumber) {
    case (maunthNumber > 0 && maunthNumber < 3):
        alert(`Qish`)

        break;
    case (maunthNumber >= 3 && maunthNumber < 6):
        alert(`Bahor`)

        break;
    case (maunthNumber >= 6 && maunthNumber < 9):
        alert(`Yoz`)

        break;
    case (maunthNumber >= 9 && maunthNumber < 12):
        alert(`kuz`)
        break;

    case 12:
        alert(`Qish`)

        break;

    default:
        alert(`Xatolik oyni raqamda kiriting!`)
        break;
}


//5-misol

const doc = +prompt(`Ozingizga mos tarifni tanlang, (1 - Basic, 2 - Standard, 3 - Premium)`)


switch (doc) {
    case 1:
        alert(`Siz basic tarifini tanladingiz!`)
        break;
    case 2:
        alert(`Siz standart tarifini tanladingiz!`)

        break;
    case 3:
        alert(`Siz Premium tarifini tanladingiz!`)

        break;

    default:
        alert(`Faqat 1 2 3 raqamdan birortasini tanlang!`)

        break;
}

//6-misol

const tank = +prompt(`Divigatelingiz hajmini kiriting!(1.0,1.6,2.0,2.5)`)

switch (tank) {
    case 1.0:
        alert(`Polniy bak narxi 300 000`)
        break;
    case 1.6:
        alert(`Polniy bak narxi 500 000`)
        break;
    case 2.0:
        alert(`Polniy bak narxi 700 000`)
        break;
    case 2.5:
        alert(`Polniy bak narxi 1 000 000`)
        break;
    
   

    default:
        break;
}

//8-misol

const summa = +prompt(`Bir oyda necha kwh tok sarfladingiz`)

switch (true) {
    case summa<=100:
        result = summa*250

        break;
    case summa>100 && summa<=500:
        result = summa*350

        break;
    case summa>500:
        result = summa*500

        break;

    default:
        alert("Notogri qiymat kiritildi!")
        result=0
        break;
}

if (result) {
    alert(`Umumiy siz bir oyda ${summa} kWh tok ishlatgansiz. Narxi ${result} so'm`);
}

// 9-misol

const route = +prompt(`Yo'nalish raqamini tanlang (1, 2, 3, 4):`);

let stops;

switch (route) {
    case 1:
        stops = "1-yo'nalish: Bekat A → Bekat B → Bekat C → Bekat D";
        break;
    case 2:
        stops = "2-yo'nalish: Bekat E → Bekat F → Bekat G → Bekat H";
        break;
    case 3:
        stops = "3-yo'nalish: Bekat I → Bekat J → Bekat K → Bekat L";
        break;
    case 4:
        stops = "4-yo'nalish: Bekat M → Bekat N → Bekat O → Bekat P";
        break;
    default:
        stops = "Noto‘g‘ri yo‘nalish raqami tanlandi!";
}

alert(stops);

// 10-misol


const Omonat = Number(prompt("Omonatingiz miqdorini kiriting!"))
const muddat = Number(prompt("Omonatingiz muddatini kiriting! (1 yil 2 yil 5 yil )"))

switch (muddat) {
    case 1:
        Foyda=Omonat*1.1
        alert(`Sizni omonatingiz miqdaor ${Omonat}, ${muddat} keyin omonatingiz midori: ${Foyda}`)
        break;
    case 2:
        Foyda=Omonat*1.12
        alert(`Sizni omonatingiz miqdaor ${Omonat}, ${muddat} keyin omonatingiz midori: ${Foyda}`)
        break;
    case 5:
        Foyda=Omonat*1.15                                                               
        alert(`Sizni omonatingiz miqdaor ${Omonat}, ${muddat} keyin omonatingiz midori: ${Foyda}`)
        break;

    default:
        alert(`Malumotlarni raqamda kiriting!`)
        break;
}










