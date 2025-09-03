// 1-misol

function triangletype(a, b, c) {
    if (isNaN(a, b, c)) {
        alert(` Tomon uzunligini raqamda berishingiz kerak.`)

    } else if (a <= 0 || b <= 0 || c <= 0) {
        alert(`Uchburchak tomonini musbat butun sonda kiritishingiz kerak!`)
    } else if (a + b <= c || b + c <= a || a + c <= b) {
        alert(`Bunday uchburchak yasab bolmaydi.`)
    } else if (a = b && b == c) {
        alert(`Teng tomonli Uchburchak!`)

    } else if (a == b || b == c || c == a) {
        alert(`Teng yonli Uchburchak.`)

    } else {
        alert(`Turli tomonli Uchburchak.`)
    }


}

let a = +prompt(`Uchburchakni a tomonini kiriting!`)
let b = +prompt(`Uchburchakni b tomonini kiriting!`)
let c = +prompt(`Uchburchakni c tomonini kiriting!`)

triangletype(a, b, c)



// 2-misol


function Auksion(Hisob) {

    if (isNaN(Hisob) || Hisob == 0) {
        alert(`Hisobingizni raqamda kiriting va hisobingizga 0 kiritmasligingiz kerak!`)
    }
    if (Hisob > 100000) {
        const AU = Hisob - 100000
        alert(`Hurmatli mijoz siz Uy harid qilaolasiz.`)
        alert(`Hisobingiz:${Hisob}$ \n Uy narxi:100000$ \n Xaridingizdan so'ng Hisobingiz:${AU}$`)

    } else {
        const AU = 100000 - Hisob
        alert(`Hisobingizda mablag yetarli emas.\n Hisobingizni ${AU}$ ga toldiring!`)

    }
}
const Hisob = +prompt(`Hisobingizni kiriting.($)`)

Auksion(Hisob)



// 3-misol
const t_health = +prompt(`Havo haroratini kiriting.(c)`)
if (isNaN(t_health)) {
    alert(`Faqat raqam kiritishingiz kerak!`)
}
if (t_health >= 25) {
    alert(`Hava harorati ${t_health} C \n Yengilroq kiyining.`)
} else if (t_health < 15) {
    alert(`Hava harorati ${t_health} C \n Qalinroq  kiyining.`)

} else {
    alert(`Hava harorati ${t_health} C \n O'rtacha kiyining.`)

}

// 4-misol 
function checkMark(ball) {
    if (ball > 90 && ball <= 100) {
        alert(`Juda yaxshi Balingiz ${ball} \n Bahoyingiz A`)
    } else if (ball < 90 && ball >= 80) {
        alert(`Yaxshi Balingiz ${ball} \n Bahoyingiz B`)

    } else if (ball < 80 && ball >= 70) {
        alert(`O'rtacha Balingiz ${ball} \n Bahoyingiz C`)

    } else if (ball < 70 && ball >= 60) {
        alert(`Harakatdan toxtamang! Balingiz ${ball} \n Bahoyingiz D`)

    } else {
        alert(`Past Balingiz ${ball} \n Bahoyingiz F`)
    }
    if (isNaN(t_health)) {
        alert(`Faqat raqam kiritishingiz kerak!`)
    }

}

const ball = +prompt(`Imtixon balingizni kiriting!`)

checkMark(ball)

// 5-misol
const a1 = +prompt(`a uchun son kiriting !`)
const b1 = +prompt(`b uchun son kiriting !`)
const c1 = +prompt(`c uchun son kiriting !`)

const MinMax = function (a1, b1, c1) {
    let max, min
    if (a1 > b1 && a1 > c1) {
        max = a1
    } else if (b1 > c1) {
        max = b1
    } else {
        max = c1
    }


    if (a1 < b1 && a1 < c1) {
        min = a1
    } else if (b1 < c1) {
        min = b1
    } else {
        min = c1
    }

    alert(`Uchta sonni ichida eng kattasi:${max} \n eng kichigi:${min}`)

}

MinMax(a1, b1, c1)

// 6-misol
const menu = +prompt(`Menu \n1. Osh 25000 \n 2.Mastava 20000 \n3.Lagmon 25000`)

switch (menu) {
    case 1:
        alert(`Osh 25000\n Choy 3000 \n Non 5000 \n Jami:33000`)
        break;
    case 2:
        alert(`Mastava 20000\n Choy 3000 \n Non 5000 \n Jami:33000`)

        break;
    case 3:
        alert(`Lagmon 25000\n Choy 3000 \n Non 5000 \n Jami:33000`)

        break;

    default:
        alert(`Menudagi taomlarni raqami boyicha tanlang.`)

        break;
}

// 7-misol

const narx = +prompt(`Chegirma tanlang. \n 1. Arzon \n 2. O'rtacha \n 3. Qimmat`)


switch (narx) {
    case 1:
        alert(`Arzon chegirma haridingiz 2000000 gacha 10% `)
        break;
    case 2:
        alert(`Arzon chegirma haridingiz 2000000 dan 10000000 gacha 20% `)

        break;
    case 3:
        alert(`Arzon chegirma haridingiz 10000000 kop  30% `)

        break;

    default:
        alert(`Chegirmani raqami boyicha tanlang.`)

        break;
}

// 8-misol

const pul = +prompt(`Chegirma tanlang. \n 1. USD \n 2. EURO \n 3. RUB`)


switch (pul) {
    case 1:
        alert(`USD dollari `)
        break;
    case 2:
        alert(`EURO`)

        break;
    case 3:
        alert(`RUB `)

        break;

    default:
        alert(`Valyutani raqami boyicha tanlang.`)

        break;
}


// 9-misol

const model = +prompt(`Mashina rusmini tanlang. \n 1. Chevrolet \n 2. Toyota \n 3. BMW`)


switch (model) {
    case 1:
        alert(`Chevrolet Corvette ZR1 \n Chevrolet Equinox \n Chevrolet Tahoe \n Chevrolet Trailblazer`)
        break;
    case 2:
        alert(`Toyota Camry \n Toyota Crown Signia \n Toyota RAV4 \n Toyota 4Runner`)

        break;
    case 3:
        alert(`BMW i5 \n  BMW X5 \n BMW 5 Series \n BMW i7 `)

        break;

    default:
        alert(`Valyutani raqami boyicha tanlang.`)

        break;
}


// 10-misol

const fan = +prompt(`Chegirma tanlang. \n 1. Matematika \n 2. Infarmatika \n 3. Fizika`)


switch (fan) {
    case 1:
        alert(`Daraja 85`)
        break;
    case 2:
        alert(`Daraja 80`)

        break;
    case 3:
        alert(`Daraja 99`)

        break;

    default:
        alert(`Fanni raqami boyicha tanlang.`)

        break;
}


// 11-misol

const Weather = +prompt(`Ob havoni tanlang. \n 1.Quyoshli \n 2.Yomgirli \n3.Qorli \n4.Shamolli`)



switch (Weather) {
    case 1:
        alert(`Bugungi kundan zavqlaning. `)
        break;
    case 2:
        alert(`Soyabon olib yuring.`)

        break;
    case 3:
        alert(`Issiq kiyining. `)

        break;
    case 4:
        alert(`Uyingizda qoling. `)

        break;

    default:
        alert(`Ob havoni raqami boyicha tanlang.`)

        break;
}




// 12-misol

const market = +prompt(`Market \n 1.Non \n 2.Sut \n 3.Yog' \n 4.Shakar `);


switch (market) {
    case 1:
        dona = +prompt('Nech dona olmoqchisiz!');
        if (isNaN(dona) || dona <= 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 3000;
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 2:
        dona = +prompt('Nech dona olmoqchisiz!');
        if (isNaN(dona) || dona <= 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 7000;
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 3:
        dona = +prompt('Nech dona olmoqchisiz!');
        if (isNaN(dona) || dona <= 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 25000;
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 4:
        dona = +prompt('Nech dona olmoqchisiz!');
        if (isNaN(dona) || dona <= 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 15000;
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    default:
        alert(`Iltimos, faqat 1 dan 4 gacha bo'lgan raqamni tanlang!`);
        break;
}


// 13-misol

switch (restaran) {
    case 1:
        dona = +prompt('Nech dona olmoqchisiz?');
        choy = +prompt('Non va choy olasizmi? (1 - ha, 0 - yo\'q)');

        if (isNaN(dona) || dona <= 0 || isNaN(choy) || choy < 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 20000 + (choy * 5000);
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 2:
        dona = +prompt('Nech dona olmoqchisiz?');
        choy = +prompt('Non va choy olasizmi? (1 - ha, 0 - yo\'q)');

        if (isNaN(dona) || dona <= 0 || isNaN(choy) || choy < 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 25000 + (choy * 5000);
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 3:
        dona = +prompt('Nech dona olmoqchisiz?');
        choy = +prompt('Non va choy olasizmi? (1 - ha, 0 - yo\'q)');

        if (isNaN(dona) || dona <= 0 || isNaN(choy) || choy < 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 15000 + (choy * 5000);
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    case 4:
        dona = +prompt('Nech dona olmoqchisiz?');
        choy = +prompt('Non va choy olasizmi? (1 - ha, 0 - yo\'q)');

        if (isNaN(dona) || dona <= 0 || isNaN(choy) || choy < 0) {
            alert("Iltimos, to'g'ri miqdor kiriting!");
        } else {
            narx = dona * 18000 + (choy * 5000);
            alert(`Hisob: ${narx} so'm`);
        }
        break;
    default:
        alert("Iltimos, menyudan to'g'ri raqam tanlang!");
        break;
}


// 14-misol

const Valyuta = +prompt(`Olmoqchi bolgan valyutangizni kiriting! \n 1.USD \n 2. EUR \n 3. RUB`)

switch (Valyuta) {
    case 1:

        let uzs = +prompt(`Dollorni qaysi valyutaga alishtirmoqchisiz? \n 1.UZS \n 2.RUB \n 3.EUR`)
        if (isNaN(uzs)) {
            alert(`Alishtirmoqchi bolgan valyutangizni raqami bilan belgilang !`)
        }

        if (uzs = 1) {
            let miqdor = +prompt(`Qancha miqdorda $ dollor sotib olmoqchisiz ! \n (1$ => 13000 so'm )`)
            let umumiy = miqdor * 13000
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}$ \n UZS dagi narxi:${umumiy} so'm`)

        } else if (uzs = 2) {
            let miqdor = +prompt(`Qancha miqdorda $ dollor sotib olmoqchisiz ! \n (1$ => 88 RUBL)`)
            let umumiy = miqdor * 88
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}$ \n RUBL dagi narxi:${umumiy} RUBL`)

        } else if (uzs = 3) {
            let miqdor = +prompt(`Qancha miqdorda $ dollor sotib olmoqchisiz ! \n (1$ => 0.95)`)
            let umumiy = miqdor * 0.95
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}$ \n EURO dagi narxi:${umumiy} EURO`)

        }

        break;
    case 2:
        let uzs1 = +prompt(`EUROni qaysi valyuta orqali alishtirmoqchisiz? \n 1.UZS \n 2.RUBL \n 3.AQSH Dollori`)
        if (isNaN(uzs1)) {
            alert(`Alishtirmoqchi bolgan valyutangizni raqami bilan belgilang !`)
        }

        if (uzs1 = 1) {
            let miqdor = +prompt(`Qancha miqdorda EURO  sotib olmoqchisiz ! \n (1EURO => 13500 so'm )`)
            let umumiy = miqdor * 13500
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor} EURO \n UZS dagi narxi:${umumiy} so'm`)

        } else if (uzs1 = 2) {
            let miqdor = +prompt(`Qancha miqdorda EURO sotib olmoqchisiz ! \n (1EURO => 92 RUBL)`)
            let umumiy = miqdor * 92
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}$ \n RUBL dagi narxi:${umumiy} RUBL`)

        } else if (uzs1 = 3) {
            let miqdor = +prompt(`Qancha miqdorda EURO sotib olmoqchisiz ! \n (1EURO => 1.05 $)`)
            let umumiy = miqdor * 88
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}EURO \n Dollordagi dagi narxi:${umumiy} $`)

        }

        break;
    case 3:
        let uzs2 = +prompt(`RUBLni qaysi valyuta orqali alishtirmoqchisiz? \n 1.UZS \n 2.EURO \n 3.AQSH Dollori`)
        if (isNaN(uzs2)) {
            alert(`Alishtirmoqchi bolgan valyutangizni raqami bilan belgilang !`)
        }

        if (uzs2 = 1) {
            let miqdor = +prompt(`Qancha miqdorda RUBL  sotib olmoqchisiz ! \n (1RUBL => 146 so'm )`)
            let umumiy = miqdor * 146
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor} RUBL \n UZS dagi narxi:${umumiy} so'm`)

        } else if (uzs2 = 2) {
            let miqdor = +prompt(`Qancha miqdorda RUBL sotib olmoqchisiz ! \n (1RUBL => 0.011 EURO)`)
            let umumiy = miqdor * 0.011
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}$ \n RUBL dagi narxi:${umumiy} RUBL`)

        } else if (uzs2 = 3) {
            let miqdor = +prompt(`Qancha miqdorda RUBL sotib olmoqchisiz ! \n (1RUBL => 0.0113 $)`)
            let umumiy = miqdor * 0.011342
            alert(`KH_BANK \n Sotib olmoqchisiz:${miqdor}EURO \n Dollordagi dagi narxi:${umumiy} $`)

        }

        break;

    default:
        alert('Olmoqchi bolgan valyutangizni aniq raqamini kiriting!')
        break;
}




// 15-misol
const kv_manzil = prompt(`Qayerda yashaysiz manzilni kiriting!`)
const kv_maydon = +prompt(`Kvartirangizni maydonini kiriting!`)

if (isNaN(kv_maydon)) {
    alert(`Yashash manzilizni maydonini raqamda kiriting!`)

}

switch (kv_manzil) {
    case kv_manzil === 'Andijon':
        if (100 > kv_maydon) {
            let maydon = kv_maydon * 15000
            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)
        } else {
            let maydon = kv_maydon * 15000 * 11

            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)


        }
        break;
    case kv_manzil === 'Toshkent':
        if (100 > kv_maydon) {
            let maydon = kv_maydon * 20000
            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)
        } else {
            let maydon = kv_maydon * 20000 * 1.1

            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)

        }
        break;
    case kv_manzil === 'Samarqand':
        if (100 > kv_maydon) {
            let maydon = kv_maydon * 18000
            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)
        } else {
            let maydon = kv_maydon * 18000 * 1.1

            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)

        }
        break;
    case kv_manzil === 'Qashqadaryo':
        if (100 > kv_maydon) {
            let maydon = kv_maydon * 12000
            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)
        } else {
            let maydon = kv_maydon * 12000 * 1.1

            alert(`Manzil:${kv_manzil}\n Maydon:${kv_maydon} \n Soliq:${maydon}`)

        }
        break;

    default:
        alert(`Yashash joyingizni togri kiriting! Mas: Andijon, Toshkent, Samarqand, Qashqadaryo`)
        break;
}


// 16-misol
const ish_haqi = +prompt(`Ish xaqingizni kiriting!`)
const jarima = +prompt(`Ishga kechikib kelgan kunlaringizni kiriting!`)

function miqdor1(ish_haqi, jarima) {
    if (jarima < 10) {
        alert(`Sizning Maoshingiz: ${ish_haqi}`)
    } else {
        let ish_haqi1 = ish_haqi - jarima * 50000
        alert(`Sizning Maoshingiz:${ish_haqi1}`)

    }

}
miqdor1(ish_haqi, jarima)

// 17-misol
const maosh = +prompt(`Masoshingizni kririting!`)
const staj = +prompt('Ish tajribayizni kiriting.')
if (maosh < 2000000) {
    alert(`Siz bonusli kiridit ololmaysiz`)
} else if (staj < 5) {
    alert(`Sizga 10% bonus bilan kridit beriladi.`)
} else {

} if (staj > 5 && staj < 10) {
    alert(`Sizga 20% bonus bilan kridit beriladi.`)
} else if (staj > 10) {
    alert(`Sizga 30% bonus bilan kridit beriladi.`)
}


// 18-misol

const hona = prompt(`O'zingiz uchun hana tanlang!\n Standart 200 000 \n Yaxshilangan hona 300 000 \n Suite 500 000`)

if (hona === 'Standart') {
    const muddat = prompt(`Nechi kun qolmoqchisiz?`)
    const nonushta = +prompt(`Nech kuningiz uchun nonushta olmoqchisiz?`)
    const hisobingiz = muddat * 200000 + nonushta * 50000
    alert(` Mehmonxona xisobi:${hisobingiz}`)
} else if (hona === 'Yaxshilangan hona') {
    const muddat = prompt(`Nechi kun qolmoqchisiz?`)
    const nonushta = +prompt(`Nech kuningiz uchun nonushta olmoqchisiz?`)
    const hisobingiz = muddat * 300000 + nonushta * 50000
    alert(` Mehmonxona xisobi:${hisobingiz}`)
} else if (hona === 'Suite') {
    const muddat = prompt(`Nechi kun qolmoqchisiz?`)
    const nonushta = +prompt(`Nech kuningiz uchun nonushta olmoqchisiz?`)
    const hisobingiz = muddat * 500000 + nonushta * 50000
    alert(` Mehmonxona xisobi:${hisobingiz}`)
} else {
    alert(`Belgilangan xonalardan birini tanlang!`)
}


// 19-misol 
const tavar = +prompt(`Harid qiloqchi bolgan tavaringiz nomini kiriting! \n 1.Elektronika \n 2.Kiyim-kechak \n 3.Oziq-ovqat \n 4.Aksessuarlar`)

switch (key) {
    case 1:
        alert(`Elektronika maxsulatlar uchun 5% chegirma`)
        break;
    case 2:
        alert(`Kiyim-kechak maxsulatlar uchun 10% chegirma`)
        break;
    case 1:
        alert(`Oziq-ovqat maxsulatlar uchun 15% chegirma`)
        break;
    case 1:
        alert(`Aksessuarlar maxsulatlar uchun 20% chegirma`)
        break;

    default:
        alert(`Maxsulotni raqami bilan tanlang`)
        break;
}


//20-misol
const KH_BANK = +prompt(`KH_BANK \n 1.Balansni korish \n 2.Naqd pul olish \n 3.Pul kiritish \n 4.Chiqish`)
let balance
switch (key) {
    case 1:
        balance = 100000
        alert(`Balansingiz ${balance} so'm`)

        break;
    case 2:
        let cc = +prompt('Qancha pul yechmoqchisiz')
        if (balance < cc) {
            alert(`Blancingizda buncha pull miqdori yo'q !`)
        } else {
            let add = 100000 - cc
            alert(`Balansingiz ${add} so'm`)
        }


        break;
    case 3:
        balance = 100000
        let dd = +prompt(`Kiritmoqchi bolgan pulingiz miqdorini belgilang!`)
        let dbalance = balance + dd
        alert(`Balansingiz ${dbalance} so'm`)

        break;

    case 4:
        balance = 100000
        alert(`Kartangizni olishingiz mumkun!`)

        break;

    default:
        alert(`Berilgan raqmlar boyicha kerakli ammalarni bajaring!`)
        break;
}


// 21-misol
const fiksa = 3000000
const ish = 40


const ish_tajriba = +prompt(`Ish tajribangiz qancha ?`)
const ish_vaqti = +prompt(`Haftalik ish vaqtingiz qancha?`)

if (isNaN(ish_tajriba) && isNaN(ish_vaqti)) {
    alert('Raqamda kiriting malumotlari')
}
if (ish_vaqti > 40) {
    let res = fiksa * 1.5
    alert(`Sizning maoshingiz ${res}`)

} else if (ish_tajriba > 5) {
    let res = fiksa * 1.1
    alert(`Sizning maoshingiz ${res}`)
} else {
    alert(`Sizning oyligingiz ${fiksa}`)
}

//22-misol

const auto = +prompt('Automabilingiz turini kiriting! \n1.Yengil automabil \n2.Yuk mashina \n3.Eloktro mobile \n4.2020yildan oldin chiqgan mashina bolsa \n5.Automobile narxi 1mlrd ortiq bolsa')

switch (auto) {
    case 1:
        alert('Yengil automabil uchun 3% soliq')
        break;
    case 2:
        alert('Yuk automabili uchun 5% soliq')
        break;
    case 3:
        alert('Elektro automabili uchun 2% soliq')
        break;
    case 4:
        alert('Eski automabil uchun 5%  soliq va qoshimcha 1%')
        break;
    case 5:
        alert('Automabile narxi 1mlrddan qimmat bolsa 2% chegirmada')
        break;

    default:
        alert('Sugurta uchun mashinangiz qaysi kategoriyaga togri kelsa o`shani raqami bilan belgilang!')
        break;
}

//23-misol

const oylik_maosh = +prompt(`O'z maoshingizni kiriting!`)

if (isNaN(oylik_maosh)) {
    alert('Oylik maoshingizni raqamda kiriting!')
}
if (oylik_maosh <= 2000000) {
    let org = oylik_maosh * 0.9
    alert(`Soliqdan keyingi maoshingiz:${org}`)

} else if (oylik_maosh > 2000000 && oylik_maosh <= 3000000) {
    let org = oylik_maosh * 0.8
    alert(`Soliqdan keyingi maoshingiz:${org}`)

} else if (oylik_maosh > 3000000 && oylik_maosh <= 5000000) {
    let org = oylik_maosh * 0.7
    alert(`Soliqdan keyingi maoshingiz:${org}`)

} else if (oylik_maosh > 10000000) {
    let org = oylik_maosh * 0.6
    alert(`Soliqdan keyingi maoshingiz:${org}`)

}
if (org < 5000000) {
    let result = org * 0.15
    let jami = org * 1.15

    alert(`bonus:${result} \n Jami:${jami}`)
}

// 24-misol 

const daromat = +prompt(`Oylik daromadingizni kiriting?`)
const Qarz = +prompt(`Bankdagi yoki umumiy qarzingizni kiriting?`)

if (isNaN(daromat) && isNaN(Qarz)) {
    alert(`Sonlarni barchasini raqam bilan ketma ket ochiq joy qoldirmay kiritishingiz kerak!`)
}

if (daromat < 5000000 || daromat * 0.5 < Qarz) {
    alert('Sizga KH_BANK orqali kridit bera olmaymiz!')
} else if (daromat*0.3<Qarz) {
    let kredit = daromat * 0.15
    alert(`Sizga KH_BANK tomonidan ${kredit} kridit berildi`)
} else if (daromat > 5000000) {
    let kredit = daromat * 0.3
    if (kredit <= 10000000) {
        alert(`Sizga KH_BANK tomonidan ${kredit} kridit berildi`)
    } else {
        alert('Sizga KH_BANK tomonidan 10000000 kridit berildi')
    }

}

