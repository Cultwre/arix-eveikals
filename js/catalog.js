const categories = ["Datorpele", "Klaviatūra", "Austiņas", "Paliktņi pelēm"];

// Produktu masīvs
const products = [
  {
    Category: 0,
    imageUrl: "/images/pele1.jpg",
    name: "Logitech G102 Lightsync",
    color: "Melna",
    brand: "Logitech",
    model: "G102 Lightsync",
    weight: "85g",
    dpi: "200 - 8000",
    born: "Ķīna",
    wireless: "Nē",
    price: "47,00",
    id: 1,
    description:
      "Izmantojiet spēles laiku maksimāli ar G203 — spēļu peli dažādās košās krāsās. Ar LIGHTSYNC tehnoloģiju, spēļu līmeņa sensoru un klasisku 6 pogu dizainu jūs izgaismosiet savu spēli un savu rakstāmgaldu.",
  },
  {
    Category: 0,
    imageUrl: "/images/pele2.jpg",
    name: "Steelseries Aerox 3",
    color: "Melna",
    brand: "Steelseries",
    model: "Aerox 3",
    weight: "85g",
    dpi: "18000",
    born: "Ķīna",
    wireless: "Nē",
    price: "135,00",
    id: 2,
    description:
      "Augstākās klases spēļu pele ar RGB apgaismojumu, īpaši vieglu 68 g korpusu un IP54 AquaBarrier™ aizsardzību pret ūdeni un putekļiem. Tā nodrošina līdz pat 200 stundām akumulatora darbības laika ar Quantum 2.0 Wireless un Bluetooth 5.0, izturīgiem Golden Micro slēdžiem un TrueMove Air optisko sensoru precīzai un atsaucīgai spēlēšanai.",
  },
  {
    Category: 0,
    imageUrl: "/images/pele3.jpg",
    name: "Logitech G403 Hero",
    color: "Melna",
    brand: "Logitech",
    model: "G403 Hero",
    weight: "90g",
    dpi: "16000",
    born: "Ķīna",
    wireless: "Nē",
    price: "93,00",
    id: 3,
    description:
      "Radīts komfortam, G403 ir veidots ar gumijas rokturiem papildu kontrolei. HERO 25K sensors ļauj izsekot submikrona līmenī. Pilna spektra LIGHTSYNC RGB un 6 programmējamas pogas nodrošina pilnīgu kontroli.",
  },
  {
    Category: 0,
    imageUrl: "/images/pele4.jpg",
    name: "Defender Katana GM-511, 2.4 ghz wireless",
    color: "Melna",
    brand: "Defender",
    model: "Katana GM-511",
    weight: "90g",
    dpi: "3200",
    born: "Ķīna",
    wireless: "Jā",
    price: "19,69",
    id: 4,
    description:
      "Maināms fona apgaismojums LED (apgaismojumu var arī izslēgt! Krāsas mainās automātiski). Īpaši izturīgs kabelis. Iebūvētais akumulators: 400 mAh. Akumulatora darbības laiks 30-50 stundas (atkarībā no tā, cik bieži tiek izmantots fona apgaismojums). 2 sānu pogas. Izturīgs, patīkams taustei gumijas pārklājums. Precīzs sensors. Stabila darbība pat lielā ātrumā. Pogu skaits 6 + rotējošais ritenis. 4 peles jutības režīmi (1200/1600/3200 dpi). Klikšķu skaits: 10 miljoni Maksimālais paātrinājums: 10 g/s Krāsa melna.",
  },
  {
    Category: 0,
    imageUrl: "/images/pele5.jpg",
    name: "Razer Deathadder V2 X HyperSpeed",
    color: "Melna",
    brand: "Razer",
    model: "Deathadder V2 X HyperSpeed",
    weight: "80g",
    dpi: "14000",
    born: "Ķīna",
    wireless: "Jā",
    price: "99,00",
    id: 5,
    description:
      "Pārdoti vairāk nekā 15 miljoni DeathAdder ierīču. Vairāk nekā desmit gadu laikā šis modelis ir saņēmis apbalvojumus. Ikoniskā ergonomika tagad ir aprīkota ar neierobežotu kontroli, pateicoties divkāršajam bezvadu savienojumam, izmantojot īpaši ātro Razer™ HyperSpeed ​​Wireless vai Bluetooth, un 7 programmējamām pogām, tostarp 2 jaunām ātrās piekļuves malas pogām.",
  },
  {
    Category: 1,
    imageUrl: "/images/klaviatura1.jpg",
    name: "Logitech MX Keys S, EN",
    color: "Gaiši pelēka",
    brand: "Logitech",
    model: "MX Keys S",
    switch: "Membrāna",
    numlock: "Jā",
    born: "Ķīna",
    wireless: "Jā",
    price: "107,90",
    material: "Alumīnijs",
    id: 6,
    description:
      "Izbaudiet jaunu plūstamības līmeni ar MX Keys S — augstas veiktspējas tastatūru, kas izstrādāta ērtai, ātrai un plūstošai rakstīšanai ar viedu apgaismojumu un programmējamiem taustiņiem. Ja vēlaties ietaupīt vietu uz galda, bet neupurēt veiktspēju, varat izvēlēties minimālistisko MX Keys Mini.",
  },
  {
    Category: 1,
    imageUrl: "/images/klaviatura2.jpg",
    name: "Steelseries Apex Apex 7 QX2 Red",
    color: "Melna",
    brand: "Steelseries",
    model: "Apex 7",
    switch: "Mehānsiks",
    numlock: "Nē",
    born: "Ķīna",
    wireless: "Nē",
    price: "229,00",
    material: "Alumīnijs",
    id: 7,
    description:
      "Augstas veiktspējas spēļu tastatūra ar OLED vieddispleju spēles un lietotņu informācijai reāllaikā, tūlītējiem paziņojumiem no Discord un Tidal, izturīgiem mehāniskiem slēdžiem un augstākās kvalitātes 5000. sērijas alumīnija rāmi. Iekļauts noņemams magnētisks plaukstas locītavas balsts maksimālam komfortam ilgu spēļu sesiju laikā.",
  },
  {
    Category: 1,
    imageUrl: "/images/klaviatura3.jpg",
    name: "Redragon K606 Lakshmi Red",
    color: "Oranža",
    brand: "Redragon",
    model: "K606 Lakshmi",
    switch: "Mehānisks",
    numlock: "Nē",
    born: "Ķīna",
    wireless: "Jā",
    price: "36,90",
    material: "Alumīnijs",
    id: 8,
    description:
      "Redragon K606-OG&GY&BK Lakshmi tastatūra nodrošina izcilu reakciju un valdzinošu izskatu. Tā ir veidota kompakta, 60% izmēra, kas nozīmē, ka tai nav ciparu tastatūras vai atsevišķu funkcionālo taustiņu. Savukārt krāsas pelēkos, oranžos un melnos toņos piešķirs raksturu katram stendam. K606-OG&GY&BK Lakshmi ir sarkani mehāniskie slēdži, kas īpaši paredzēti spēlētājiem. Tie ļauj spēlēt klusumā, vienlaikus nodrošinot ātru un lineāru aktivizēšanu. Tastatūra atbalsta arī karstās nomaiņas tehnoloģiju, kas ļauj ātri un bez problēmām nomainīt slēdžus.",
  },
  {
    Category: 1,
    imageUrl: "/images/klaviatura4.jpg",
    name: "Razer Huntsman Mini Huntsman Mini Red",
    color: "Balta",
    brand: "Razer",
    model: "Huntsman Mini",
    switch: "Mehānisks",
    numlock: "Nē",
    born: "Ķīna",
    wireless: "Nē",
    price: "155,00",
    material: "Alumīnijs",
    id: 9,
    description:
      "Razer Huntsman Mini tastatūrai nav tradicionālajai pilna izmēra tastatūrai raksturīgās funkciju rindas, sākuma klastera un ciparu tastatūras, tomēr tā nezaudē funkcionalitāti, jo visas šīs ievades joprojām ir pieejamas, izmantojot sekundārās funkcijas un īsceļus. Ideāli piemērota minimālistiskām vai mazākām konfigurācijām, kur ir maz vietas uz galda, tās kompaktā konstrukcija nozīmē arī to, ka to ir viegli pārvietot un vieglāk novietot spēļu laikā, ļaujot jums spēlēt ērtāk.",
  },
  {
    Category: 1,
    imageUrl: "/images/klaviatura5.jpg",
    name: "Dell KB216, EN/RU",
    color: "Melna",
    brand: "Dell",
    model: "KB216",
    switch: "Membrāna",
    numlock: "Jā",
    born: "Ķīna",
    wireless: "Nē",
    price: "46,90",
    material: "Plastmasa",
    id: 10,
    description:
      "Vadu tastatūra ikdienas lietošanai mājās vai birojā Dell vadu tastatūra ir ērts risinājums ikdienas lietošanai mājās vai birojā. Pilna izmēra tastatūras izkārtojums ar salas stila taustiņiem nodrošina efektīvu un ērtu rakstīšanu, kas ir ideāli piemērots praktiski jebkuram ikdienas uzdevumam.",
  },
  {
    Category: 2,
    imageUrl: "/images/austinas1.jpg",
    name: "JBL Live 770NC",
    color: "Melna",
    brand: "JBL",
    sensitivity: "100 dB",
    micro: "Jā",
    weight: "256g",
    born: "Amerika",
    wireless: "Jā",
    price: "139,00",
    id: 11,
    description:
      "JBL Live 770NC austiņas nodrošina jaudīgu JBL Signature skaņu ērtā, uz auss uzliekamā galvas stīpā. Kad esat pilnībā iegrimis savā ritmā, patiesi adaptīvā trokšņu slāpēšana ar Smart Ambient tehnoloģiju pasargās jūs no uzmanības novēršanas. Vai arī, ja vēlaties saglabāt dzirdi apkārtējā pasaulē, varat pat sarunāties, nenoņemot austiņas. Ērti piekļūstiet savam iecienītākajam balss palīgam, izmantojot īsinājumvārdu vai pieskaroties austiņu uzlikām, lai atskaņotu iecienītāko atskaņošanas sarakstu, nosūtītu īsziņu draugam, pārbaudītu laika prognozi un daudz ko citu. Jūs varēsiet baudīt 65 stundas (50 stundas ar ieslēgtu BT+ANC) mūzikas straumēšanas.",
  },
  {
    Category: 2,
    imageUrl: "/images/austinas2.jpg",
    name: "Logitech G Pro X2 Lightspeed 981-001263",
    color: "Melna",
    brand: "Logitech",
    sensitivity: "87.8 dB",
    micro: "Jā",
    weight: "345g",
    born: "Amerika",
    wireless: "Jā",
    price: "206,90",
    id: 12,
    description:
      "Izstrādātas kopā ar profesionāļiem. Izstrādātas, lai uzvarētu. PRO X 2 LIGHTSPEED austiņām ir profesionāla līmeņa skaņa, LIGHTSPEED bezvadu savienojums un lielisks komforts visaugstākā līmeņa prasībām. Sadzirdi katru soli un kustību, izmantojot grafēna skaļruņu radīto visaptverošo skanējumu.",
  },
  {
    Category: 2,
    imageUrl: "/images/austinas3.jpg",
    name: "HyperX Cloud Alpha",
    color: "Melna/Sarkana",
    brand: "HyperX",
    sensitivity: "90 dB",
    micro: "Jā",
    weight: "298g",
    born: "Ķīna",
    wireless: "Nē",
    price: "99,00",
    id: 13,
    description:
      "Uzlabojiet savu spēļu pieredzi ar tīrāku un vienmērīgāku skaņu. HyperX™ Cloud Alpha divkameru skaļruņu sistēma atdala basus no vidējiem un augstiem toņiem, ļaujot tos individuāli noregulēt, lai samazinātu kropļojumus. Saglabājiet sevi zonā un pakāpieties pakāpē ar raksturīgo HyperX komfortu, kas ir ideāli piemērots ilgstošām spēļu sesijām. Iegūstiet kristāldzidru saziņu ar savu komandu un paceliet savu spēli nākamajā līmenī ar Cloud Alpha audio priekšrocībām.",
  },
  {
    Category: 2,
    imageUrl: "/images/austinas4.jpg",
    name: "Sony WH-ULT900N",
    color: "Melna",
    brand: "Sony",
    sensitivity: "110 dB",
    micro: "Jā",
    weight: "255g",
    born: "Ķīna",
    wireless: "Jā",
    price: "198,00",
    id: 14,
    description:
      "Sony WH-ULT900N atspoguļo jaunu bezvadu austiņu dizaina attīstību, apvienojot izcilu audio veiktspēju ar intuitīvu funkcionalitāti. Šīs austiņas, kas tiek novietotas kā vecāko modeļu ar zemo frekvenci, pēctecis, piešķir prioritāti līdzsvarotam, bet dinamiskam skaņas profilam, kas nodrošina klausītājus, kuri alkst pēc dziļuma, nezaudējot skaidrību. Paredzēti ilgstošam nodilumam, to vieglais, formējamais polsterējums pielāgojas individuālajām galvas formām, piedāvājot komfortu ilgu lidojumu vai darba sesiju laikā.",
  },
  {
    Category: 2,
    imageUrl: "/images/austinas5.jpg",
    name: "HyperX CloudX Stinger II Cloud Stinger 2 Core",
    color: "Melna",
    brand: "HyperX",
    sensitivity: "100 dB",
    micro: "Jā",
    weight: "272g",
    born: "Ķīna",
    wireless: "Nē",
    price: "62,00",
    id: 15,
    description:
      "HyperX Cloud Stinger™ 2 Core ir pamata līmeņa austiņas par pieņemamu cenu. Ar 2 gadu DTS Headphone:X Spatial Audio atbalstu Cloud Stinger Core 2 nodrošina lielisku, ieskaujošu skaņu, komfortu un ērtības — visu, ko vēlaties no spēļu austiņām. Pateicoties audio vadības ierīcēm tieši uz pašām austiņām un grozāmam mikrofonam ar izslēgšanas iespēju, jums nebūs jāienirt izvēļņu labirintā, lai mainītu skaļumu vai izslēgtu skaņu. Regulējami slīdņi un mīksti ausu spilventiņi nodrošina komfortu garām spēļu naktīm, un elastīgais mikrofons ļauj novietot mikrofonu tieši tur, kur vēlaties. Koncentrējieties uz spēli, pateicoties slēgtā korpusa dizainam un virziena 40 mm skaļruņiem ar uzlabotu basu.",
  },
  {
    Category: 3,
    imageUrl: "/images/paliktnis1.jpg",
    name: "Razer Atlas Gaming, 45 cm x 40 cm x 0.5 cm",
    color: "Melna",
    brand: "Razer",
    mousePadType: "Ciets",
    measurement: "45 x 40 x 0.5 cm",
    material: "Gumija",
    thickness: "0.5 cm",
    model: "Atlas Gaming",
    price: "137,90",
    id: 16,
    description:
      "Koncentrējieties uz perfektu mērķi ar mūsu pirmo stikla spēļu peles paklājiņu — izgatavots no augstākās kvalitātes rūdīta stikla, lai izturētu. Optimizēts optiskajiem sensoriem un īpaši apstrādāts klusākai kustībai, ļaujot pelei justies tā, it kā tajā nebūtu nekādas pretestības.",
  },
  {
    Category: 3,
    imageUrl: "/images/paliktnis2.jpg",
    name: "Havit HV-MP847, 70 cm x 30 cm x 0.3 cm",
    color: "Rozā",
    brand: "Havit",
    mousePadType: "Ciets",
    measurement: "70 x 30 cm",
    material: "Gumija",
    thickness: "0.3 cm",
    model: "HV-MP847",
    price: "19,49",
    id: 17,
    description:
      "Padariet savu spēli vēl ērtāku. Havit MP847 spēļu paliktnis ir izgatavots no augstas kvalitātes materiāliem un ļauj ātri un precīzi pārvietot peli. Pretslīdes apakšdaļa novērš tā slīdēšanu uz galda virsmas. Turklāt pastiprinātas malas garantē tā izturību un izturību pret bojājumiem. Turklāt pateicoties lielajam izmēram 700 x 300 x 3 mm, paliktnis nodrošina pietiekami daudz vietas ne tikai pele, bet arī klaviatūrai.",
  },
  {
    Category: 3,
    imageUrl: "/images/paliktnis3.jpg",
    name: "Esperanza, 24 cm x 30 cm x 0.3 cm",
    color: "Melna/Zaļa",
    brand: "Esperanza",
    mousePadType: "Mīksts",
    measurement: "300 x 240 x 3 mm",
    material: "Gumija",
    thickness: "0.3 cm",
    model: "Esperanza",
    price: "7,39",
    id: 18,
    description:
      "Augstas kvalitātes, moderns, izturīgs peles paliktnis, paredzēts spēlētājiem. Saderīgs ar lāzera un optiskajām pelēm. Auduma virsma nodrošina lielu kustības ātrumu un ļoti labu peles kontroli spēles laikā. Paliktņa apakšdaļa ir izgatavota no neslīdoša gumijas virsmas, lai tas nekustētos.",
  },
  {
    Category: 3,
    imageUrl: "/images/paliktnis4.jpg",
    name: "Asus, 40 cm x 40 cm x 0.3 cm",
    color: "Melna",
    brand: "Asus",
    mousePadType: "Mīksts",
    measurement: "40 cm x 40 cm x 0.3 cm",
    material: "Gumija",
    thickness: "0.5 cm",
    model: "Asus",
    price: "49,90",
    id: 19,
    description:
      "Augstas kvalitātes, moderns, izturīgs peles paliktnis, paredzēts spēlētājiem. Saderīgs ar lāzera un optiskajām pelēm. Auduma virsma nodrošina lielu kustības ātrumu un ļoti labu peles kontroli spēles laikā. Paliktņa apakšdaļa ir izgatavota no neslīdoša gumijas virsmas, lai tas nekustētos.",
  },
  {
    Category: 3,
    imageUrl: "/images/paliktnis5.jpg",
    name: "Corsair, 40 cm x 45 cm x 0.6 cm",
    color: "Melna",
    brand: "Corsair",
    mousePadType: "Mīksts",
    measurement: "40 cm x 45 cm x 0.6 cm",
    material: "Gumija",
    thickness: "0.6 cm",
    model: "Corsair",
    price: "36,90",
    id: 20,
    description:
      "Augstas kvalitātes, moderns, izturīgs peles paliktnis, paredzēts spēlētājiem. Saderīgs ar lāzera un optiskajām pelēm. Auduma virsma nodrošina lielu kustības ātrumu un ļoti labu peles kontroli spēles laikā. Paliktņa apakšdaļa ir izgatavota no neslīdoša gumijas virsmas, lai tas nekustētos.",
  },
];

const minRange = document.querySelector("#min-range");
const maxRange = document.querySelector("#max-range");
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const sliderTrack = document.querySelector(".slider-track");

const minGap = 10;

// Funkcija, kas atjaunina cenas slīdņa ievades atkarība no slīdņa vertības
function updateInputs() {
  minPrice.value = minRange.value;
  maxPrice.value = maxRange.value;
}

// Funkcija, cenas slīdņa atjaunināšanai
function updateRanges() {
  let minVal = parseInt(minPrice.value);
  let maxVal = parseInt(maxPrice.value);

  if (maxVal > maxPrice.max) {
    maxPrice.value = maxPrice.max;
  }

  // Neļauj cenas slīdņa punktiem ieiet iekša viens otrā, nodrošina ka starp tiem ir minimāla sprauga
  if (maxVal - minVal < minGap) {
    if (event.target.id === "min-price") {
      minVal = maxVal - minGap;
      minPrice.value = minVal;
    } else {
      maxVal = minVal + minGap;
      maxPrice.value = maxVal;
    }
  }

  minRange.value = minVal;
  maxRange.value = maxVal;
}

// Nodrošina cenas ievades laukumu atjaunināšanu un spraugu uz cenas slīdņa punktu grozīšanu
minRange.addEventListener("input", function () {
  if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
    minRange.value = parseInt(maxRange.value) - minGap;
  }
  updateInputs();
});

maxRange.addEventListener("input", function () {
  if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
    maxRange.value = parseInt(minRange.value) + minGap;
  }
  updateInputs();
});

// Nodrošina cenas slīdņa vertību atjaunināšanu ievadot cenas slīdņa laukumos vertības
minPrice.addEventListener("input", updateRanges);
maxPrice.addEventListener("input", updateRanges);

const productCatalog = document.querySelector(`.products`);
const categoryFilter = document.querySelector(`#categoryFilter`);
const priceFilter = document.querySelector(`#priceFilter`);
const brandFilter = document.querySelector(`#brandFilter`);
const colorFilter = document.querySelector(`#colorFilter`);

// Funkcija produktu ielasīšanai iekša katalogā
function insertProducts(
  productObj,
  categ = [],
  brands = [],
  colors = [],
  minimumPrice,
  maximumPrice
) {
  let newProducts = productObj;

  // Atlasa produktus atkarība no izvēlētiem nosacījumiem filterā
  if (categ.length !== 0) {
    newProducts = newProducts.filter((product) =>
      categ.includes(categories[product.Category])
    );
  }
  if (brands.length !== 0) {
    newProducts = newProducts.filter((product) =>
      brands.includes(product.brand)
    );
  }
  if (colors.length !== 0) {
    newProducts = newProducts.filter((product) =>
      colors.includes(product.color)
    );
  }

  // Atlasa produktus atkarība no izvelētam vertībam cenas slīdnī
  newProducts = newProducts.filter(
    (product) =>
      parseFloat(product.price.replace(",", ".")) >= parseFloat(minimumPrice) &&
      parseFloat(product.price.replace(",", ".")) <= parseFloat(maximumPrice)
  );

  // Notīra katalogu
  productCatalog.innerHTML = "";

  // Ielasa/ieliec katalogā atlasītos produktus
  newProducts.forEach((product) => {
    productCatalog.insertAdjacentHTML(
      `beforeend`,
      `
    <div class="productCard">
        <a href="product.html?id=${product.id}"><img src="${product.imageUrl}"/></a>
        <div class="productTitle">
            <strong><h1 class="productBrand text">${product.brand}</h1></strong>
            <p class="productModel text">${product.name}</p>
        </div>
        <button class="productBtn mainButton" data-id="${product.id}">Ielikt grozā</button>
        <h1 class="productPrice text">${product.price}€</h1>
    </div>
    `
    );
  });

  let productButtons = document.querySelectorAll(`.productBtn`);

  // Katrai produkta pogai "Ielikt groza", pievieno funkciju produkta pievienosanai groza (lokala noliktava)
  productButtons.forEach((e) => {
    e.addEventListener(`click`, () => {
      // Atrod produktu pec id
      const addedProduct = products.find(
        (p) => p.id === parseInt(e.dataset.id)
      );
      addToCart(addedProduct);
    });
  });
}

let checkedCategory = [];
let checkedBrand = [];
let checkedColor = [];

// Funkcija, kas izveido filtru un to darbību
function insertFilters(productObj, categories) {
  // Ielasa/ievieto kategorijas sadaļā, visas kategorijas
  categories.forEach((e, i) => {
    categoryFilter.insertAdjacentHTML(
      `beforeend`,
      `
    <div class="selection">
      <span class="select text">${e}</span>
      <label class="checkbox">
        <input type="checkbox" name="checkbox" id="category-${e[0]}${i}" value="${e}"/>
        <div class="checkmark"></div>
      </label>
    </div>
    `
    );
  });

  let maxProductPrice = 0;
  let minProductPrice = 0;

  // Atrod vissdargāko produktu
  productObj.forEach((e) => {
    if (maxProductPrice < parseFloat(e.price.replace(",", "."))) {
      maxProductPrice = parseFloat(e.price.replace(",", "."));
    }
  });

  minProductPrice = maxProductPrice;
  // Atrod visslētāko produktu
  productObj.forEach((e) => {
    if (minProductPrice > parseFloat(e.price.replace(",", "."))) {
      minProductPrice = parseFloat(e.price.replace(",", "."));
    }
  });

  // Cenas slīdņa attribūtu definēšanas pec atlasītas visszemākas un visslielalākas cenas
  maxPrice.value = maxProductPrice;
  maxPrice.max = maxProductPrice;
  maxRange.value = maxProductPrice;
  maxRange.max = maxProductPrice;
  minPrice.value = minProductPrice;
  minPrice.max = minProductPrice;
  minRange.value = minProductPrice;
  minRange.max = maxProductPrice;
  minRange.min = minProductPrice;

  // Piesaista pie cenas slīdņa elementiem, kataloga produktu atjaunināšanu kad tie tiek mainīti
  minRange.addEventListener("change", (e) => {
    insertProducts(
      productObj,
      checkedCategory,
      checkedBrand,
      checkedColor,
      minPrice.value,
      maxPrice.value
    );
  });

  maxRange.addEventListener("change", (e) => {
    insertProducts(
      productObj,
      checkedCategory,
      checkedBrand,
      checkedColor,
      minPrice.value,
      maxPrice.value
    );
  });

  minPrice.addEventListener("change", (e) => {
    insertProducts(
      productObj,
      checkedCategory,
      checkedBrand,
      checkedColor,
      minPrice.value,
      maxPrice.value
    );
  });

  maxPrice.addEventListener("change", (e) => {
    insertProducts(
      productObj,
      checkedCategory,
      checkedBrand,
      checkedColor,
      minPrice.value,
      maxPrice.value
    );
  });

  let brandValues = [];
  let colorValues = [];

  // Izveido zīmola un krāsas iespējamas filtra izvēles balstoties uz produktiem
  productObj.forEach((e) => {
    if (!brandValues.includes(e.brand)) {
      brandValues.push(e.brand);
    }

    if (!colorValues.includes(e.color)) {
      colorValues.push(e.color);
    }
  });

  // Ielasa/ievieto zīmolas un krāsas vertības filtrā
  brandValues.forEach((e, i) => {
    brandFilter.insertAdjacentHTML(
      `beforeend`,
      `
    <div class="selection">
      <span class="select text">${e}</span>
      <label class="checkbox">
        <input type="checkbox" name="checkbox" id="brand-${e[0]}${i}" value="${e}"/>
        <div class="checkmark"></div>
      </label>
    </div>
    `
    );
  });

  colorValues.forEach((e, i) => {
    colorFilter.insertAdjacentHTML(
      `beforeend`,
      `
    <div class="selection">
      <span class="select text">${e}</span>
      <label class="checkbox">
        <input type="checkbox" name="checkbox" id="color-${e[0]}${i}" value="${e}"/>
        <div class="checkmark"></div>
      </label>
    </div>
    `
    );
  });

  let checkboxFilters = document.querySelectorAll(`.checkbox`);

  // Filtra funkcionalitāte, produktu atlasīšanas pēc izvēlētiem nosacījumiem, kad tiek uzspiests uz kādu checkbox
  checkboxFilters.forEach((e) => {
    e.querySelector(`input`).addEventListener(`click`, (el) => {
      // Filtra vertības sadaļas iegūšana (Kategorija, zīmols vai krāsa)
      let filtersType = el.target.id.split("-")[0];

      // Veido masīvus, kuri ietver izvēletos nosacījumus (Kurš vai kuri zīmoli, krāsas un kategorijas),
      if (el.target.checked == true) {
        if (filtersType == "category") {
          checkedCategory.push(el.target.value);
        } else if (filtersType == "brand") {
          checkedBrand.push(el.target.value);
        } else if (filtersType == "color") {
          checkedColor.push(el.target.value);
        }
      } else {
        if (filtersType == "category") {
          checkedCategory = checkedCategory.filter(
            (category) => category !== el.target.value
          );
        } else if (filtersType == "brand") {
          checkedBrand = checkedBrand.filter(
            (brand) => brand !== el.target.value
          );
        } else if (filtersType == "color") {
          checkedColor = checkedColor.filter(
            (color) => color !== el.target.value
          );
        }
      }

      // Atjaunina katalogu, kad tiek izvēlēts kāds nosacījums (kad tiek atzimēts kāds checkbox)
      insertProducts(
        productObj,
        checkedCategory,
        checkedBrand,
        checkedColor,
        minPrice.value,
        maxPrice.value
      );
    });
  });
}

// Produktu un filtru veidošana, kad tiek ieslēgta šī lapa
insertFilters(products, categories);
insertProducts(
  products,
  checkedCategory,
  checkedBrand,
  checkedColor,
  minPrice.value,
  maxPrice.value
);
