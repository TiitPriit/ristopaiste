const resources = {
    en: {
      translation: {
        paragraph: "Hello, world!"
      }
    },
    et: {
      translation: {
        paragraph: "Tere, maailm!"
      }
    }
  };
  
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      resources,
      fallbackLng: 'et',
    });

document.getElementById('paragraph-header').textContent = "Meist";
document.getElementById('paragraph-text').textContent = "Risto Paiste Bänd on tõeline muusikatehas, mis on Saaremaalt pärit. Nende muusika on segu rockist, bluusist ja folgist ning nende esinemised on alati täis kirge ja energiat. Bändi liikmed on tõelised muusikasüdamikud, kes armastavad jagada oma loomingut nii suurel laval kui ka intiimsematel kontsertidel. Risto Paiste Bändi repertuaar on mitmekülgne, ulatudes omaloomingust kuni tuntud hittideni. Nende esituses kõlavad nii sügavad ballaadid kui ka tempokad tantsulood. Publikule jääb alati meelde nende karismaatiline esinemisstiil ja võimas heli.";
document.getElementById('members-header').textContent = "Liikmed";
document.getElementById('member1-header').textContent = "Põhivokaal";
document.getElementById('member1-bio').textContent = "Alati särav ja rõõmsameelne artist, kes on olnud laulja alates noorukieast, rajades laulukarjääri nii solistina kui ka osaledes erinevates koorides ja kooliansamblites. Ta on võistelnud mitmetel lauluvõistlustel ja konkurssidel ning osalenud isegi tuntud telesaates Eesti otsib Superstaari. Risto hääl on täis kirge ja emotsioone ning tema karismaatiline esinemisstiil võlub igas vanuses kuulajaid.";
document.getElementById('member2-header').textContent = "Soolokitarr, vokaal";
document.getElementById('member2-bio').textContent = "Andekas muusik, kes on osav mitme instrumendi valdamises. Kuigi ta on õppinud klaverit ja noorpõlves mängis ka trumme, avastas ta lõpuks oma tõelise kutsumuse kitarrimaailmas. Richardi ennastunustav soolokitarrimäng ja mahe vokaal on toonud publiku ette meeldejäävaid esitusi nii suurtes kontserdisaalides kui ka intiimsematel lavadel. Tal on laialdaselt esinemiskogemusi, olles astunud üles koos Risto ja teiste solistidega üle Eesti.";
document.getElementById('member3-header').textContent = "Saatekitarr";
document.getElementById('member3-bio').textContent = "Alati abivalmis ja usin noormees, kes on bändi üks alustalasid. Ta on meie soolokitarristi esimene õpetaja - mine tea, võib-olla ei oleks ka meie bändi sellisel kujul, kui Raul ei oleks Richardile nooruspõlves näpunäiteid jaganud. Bändi toetab ta kindlakäeliselt saatekitarri mänguga ja täiendab oma akordidega bändi kõlavärvi.";
document.getElementById('member4-header').textContent = "Basskitarr";
document.getElementById('member4-bio').textContent = "Iirimaalt pärit mees, kelle tõi elu Saaremaale. Ian on püsivalt Eestis kanda kinnitanud ning loonud siin omale pere. Ta on noorukieast alates kitarri ja bassi mänginud ning pubimuusikuna erinevates ootamatutes olukordades esinenud. Ian on oskuslik muusik ning jagab oma kogemusi ka bändiõpetajana.";
document.getElementById('member5-header').textContent = "Trummid, vokaal";
document.getElementById('member5-bio').textContent = "Tenno mängib erinevates bändides trumme, samuti on õpetanud seda noortele koos bändiõppega. Ta on töötanud helitehnikuna ning püüab viia oma bände tehniliselt paremuse suunas. Noorena õppis samuti muid pille, kuid elu tõi ta trummide juurde. Tenno on bändi rütmialustala, kes lisaks trummide mängimisele toob esile oma taustavokaali oskused.";
document.getElementById('calender-header').textContent = "Vaata vabasi kuupäevi ja broneeri üritus!";
document.getElementById('featured-video').textContent = "Esile tõstetud video";




document.getElementById('estonian-button').addEventListener('click', function() {
    document.getElementById('paragraph-header').textContent = "Meist";
    document.getElementById('paragraph-text').textContent = "Risto Paiste Bänd on tõeline muusikatehas, mis on Saaremaalt pärit. Nende muusika on segu rockist, bluusist ja folgist ning nende esinemised on alati täis kirge ja energiat. Bändi liikmed on tõelised muusikasüdamikud, kes armastavad jagada oma loomingut nii suurel laval kui ka intiimsematel kontsertidel. Risto Paiste Bändi repertuaar on mitmekülgne, ulatudes omaloomingust kuni tuntud hittideni. Nende esituses kõlavad nii sügavad ballaadid kui ka tempokad tantsulood. Publikule jääb alati meelde nende karismaatiline esinemisstiil ja võimas heli.";
    document.getElementById('members-header').textContent = "Liikmed";
    document.getElementById('member1-header').textContent = "Põhivokaal";
    document.getElementById('member1-bio').textContent = "Alati särav ja rõõmsameelne artist, kes on olnud laulja alates noorukieast, rajades laulukarjääri nii solistina kui ka osaledes erinevates koorides ja kooliansamblites. Ta on võistelnud mitmetel lauluvõistlustel ja konkurssidel ning osalenud isegi tuntud telesaates Eesti otsib Superstaari. Risto hääl on täis kirge ja emotsioone ning tema karismaatiline esinemisstiil võlub igas vanuses kuulajaid.";
    document.getElementById('member2-header').textContent = "Soolokitarr, vokaal";
    document.getElementById('member2-bio').textContent = "Andekas muusik, kes on osav mitme instrumendi valdamises. Kuigi ta on õppinud klaverit ja noorpõlves mängis ka trumme, avastas ta lõpuks oma tõelise kutsumuse kitarrimaailmas. Richardi ennastunustav soolokitarrimäng ja mahe vokaal on toonud publiku ette meeldejäävaid esitusi nii suurtes kontserdisaalides kui ka intiimsematel lavadel. Tal on laialdaselt esinemiskogemusi, olles astunud üles koos Risto ja teiste solistidega üle Eesti.";
    document.getElementById('member3-header').textContent = "Saatekitarr";
    document.getElementById('member3-bio').textContent = "Alati abivalmis ja usin noormees, kes on bändi üks alustalasid. Ta on meie soolokitarristi esimene õpetaja - mine tea, võib-olla ei oleks ka meie bändi sellisel kujul, kui Raul ei oleks Richardile nooruspõlves näpunäiteid jaganud. Bändi toetab ta kindlakäeliselt saatekitarri mänguga ja täiendab oma akordidega bändi kõlavärvi.";
    document.getElementById('member4-header').textContent = "Basskitarr";
    document.getElementById('member4-bio').textContent = "Iirimaalt pärit mees, kelle tõi elu Saaremaale. Ian on püsivalt Eestis kanda kinnitanud ning loonud siin omale pere. Ta on noorukieast alates kitarri ja bassi mänginud ning pubimuusikuna erinevates ootamatutes olukordades esinenud. Ian on oskuslik muusik ning jagab oma kogemusi ka bändiõpetajana.";
    document.getElementById('member5-header').textContent = "Trummid, vokaal";
    document.getElementById('member5-bio').textContent = "Tenno mängib erinevates bändides trumme, samuti on õpetanud seda noortele koos bändiõppega. Ta on töötanud helitehnikuna ning püüab viia oma bände tehniliselt paremuse suunas. Noorena õppis samuti muid pille, kuid elu tõi ta trummide juurde. Tenno on bändi rütmialustala, kes lisaks trummide mängimisele toob esile oma taustavokaali oskused.";
    document.getElementById('calender-header').textContent = "Vaata vabasi kuupäevi ja broneeri üritus!";
    document.getElementById('featured-video').textContent = "Esile tõstetud video";
});

document.getElementById('english-button').addEventListener('click', function() {
    document.getElementById('paragraph-header').textContent = "About us";
    document.getElementById('paragraph-text').textContent = "Risto Paiste Bänd is a real music factory that comes from Saaremaa. Their music is a mix of rock, blues and folk and their performances are always full of passion and energy. The band members are true music enthusiasts who love to share their creations both on the big stage and at more intimate concerts. Risto Paiste Band's repertoire is versatile, ranging from original compositions to well-known hits. Their performance includes both deep ballads and fast-paced dance tracks. Audiences will always remember their charismatic performance style and powerful sound.";
    document.getElementById('members-header').textContent = "Members";
    document.getElementById('member1-header').textContent = "Main vocal";
    document.getElementById('member1-bio').textContent = "Always bright and cheerful, the artist has been a singer since adolescence, establishing a singing career both as a soloist and participating in various choirs and school ensembles. He has competed in several singing contests and even participated in the well-known TV show Eesti otsib Superstaraari. Risto's voice is full of passion and emotion, and his charismatic performance style charms listeners of all ages.";
    document.getElementById('member2-header').textContent = "Lead guitar, vocal";
    document.getElementById('member2-bio').textContent = "A talented musician who is skilled in mastering several instruments. Although he has studied piano and played drums in his youth, he finally discovered his true calling in the guitar world. Richard's passionate lead guitar playing and soft vocals have brought memorable performances to audiences in large concert halls and more intimate stages. He has extensive performance experience, having performed with Risto and other soloists across Estonia.";
    document.getElementById('member3-header').textContent = "Rhythm guitar";
    document.getElementById('member3-bio').textContent = "Always helpful and diligent young man, who is one of the mainstays of the band. He is our solo guitarist's first teacher - you know, maybe our band wouldn't be in the shape it is if Raul hadn't given Richard tips in his youth. He firmly supports the band with his accompaniment guitar and complements the sound of the band with his chords.";
    document.getElementById('member4-header').textContent = "Bass guitar";
    document.getElementById('member4-bio').textContent = "A man from Ireland, whom life brought to Saaremaa. Ian has permanently established himself in Estonia and created a family here. He has been playing guitar and bass since he was a teenager and has performed as a pub musician in various unexpected situations. Ian is a skilled musician and also shares his experience as a band teacher.";
    document.getElementById('member5-header').textContent = "Drums, vocal";
    document.getElementById('member5-bio').textContent = "TTenno plays drums in various bands, and has also taught it to young people along with band lessons. He has worked as a sound technician and tries to lead his bands in the direction of technical excellence. He also studied other instruments when he was young, but life brought him to the drums. Tenno is the rhythm backbone of the band, who, in addition to playing drums, brings out his backing vocal skills.";
    document.getElementById('calender-header').textContent = "Check available dates and book us!";
    document.getElementById('featured-video').textContent = "Featured video";

});

