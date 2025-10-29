import jaguarImage from '../assets/jaguar.jpg';
import orangutanImage from '../assets/orangutan.jpg';
import papaszemesmedveImage from '../assets/papaszemes-medve.jpg';
import rafflesiaarnoldiiImage from '../assets/rafflesia-arnoldii.jpg';
import brazildiofaImage from '../assets/brazil-diofa.jpg';
import oriasbromeliaImage from '../assets/orias-bromelia.jpg';
import harpiasasImage from '../assets/harpiasas.webp';
import kekmakakoImage from '../assets/kek-makako.jpg';
import okapi from '../assets/okapi.webp';
import aranybekaImage from '../assets/aranybeka.jpg';
import tapirImage from '../assets/tapir.jpg';
import gorillaImage from '../assets/gorilla.jpg';
import tukanImage from '../assets/tukan.jpg';
import papagajImage from '../assets/papagaj.jpg';
import jaguarundiImage from '../assets/jaguarundi.jpg';
import zoldanakondaImage from '../assets/zold-anakonda.webp';
import kodfoltosleopardImage from '../assets/kodfoltos-leopard.jpg';
import kardcsorukolibriImage from '../assets/kardcsoru-kolibri.jpg';
import viktoriatavirozsaImage from '../assets/viktoria-tavirozsa.jpg';
import vaniliaorchideaImage from '../assets/vanilia-orchidea.jpg';
import kakaofaImage from '../assets/kakaofa.jpg';
import kekorchideaImage from '../assets/kek-orchidea.jpg';
import majomkenyerfaImage from '../assets/majomkenyerfa.jpg';
import gumifaImage from '../assets/gumifa.jpg';
import mahagonifaImage from '../assets/mahagonifa.jpg';
import vadpaprikaImage from '../assets/vadpaprika.jpg';
import lianaImage from '../assets/liana.webp';
import mohafapafranyImage from '../assets/mohafa-pafrany.jpg';
import kiralypafranyImage from '../assets/kiraly-pafrany.jpg';
import kancsokaImage from '../assets/kancsoka.jpg';

export const wildlife = [
    { 
        id: 1, 
        name: 'Jaguár', 
        image: jaguarImage,
        description: 'A jaguár Dél-Amerika esőerdeinek legnagyobb ragadozója, kulcsszerepet játszik az ökoszisztéma egyensúlyának fenntartásában. Élőhelyeinek pusztítása és az orvvadászat miatt egyedszáma drasztikusan csökken.', 
        form: 'animal',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 2, 
        name: 'Orángután', 
        image: orangutanImage,
        description: 'A borneói és szumátrai orángután az ember legközelebbi rokonai közé tartozik. Az olajpálma-ültetvények terjedése miatt erdőik eltűnnek, így a faj a kihalás szélére sodródott.', 
        form: 'animal',
        location: 'Borneó és Szumátra esőerdői'
    },
    { 
        id: 3, 
        name: 'Pápaszemes medve', 
        image: papaszemesmedveImage,
        description: 'Az Andok felhőerdőiben élő pápaszemes medve Dél-Amerika egyetlen medvefaja. Az erdőirtás és az élőhelyek feldarabolódása miatt populációja folyamatosan csökken.', 
        form: 'animal',
        location: 'Andok felhőerdői'
    },
    { 
        id: 4, 
        name: 'Rafflesia arnoldii', 
        image: rafflesiaarnoldiiImage,
        description: 'A világ legnagyobb virága, amely akár egy méter átmérőjű is lehet. Parazita életmódú, és kizárólag Délkelet-Ázsia esőerdeiben található meg, ahol az élőhelyek pusztulása súlyosan veszélyezteti.', 
        form: 'plant',
        location: 'Szumátra és Borneó esőerdői'
    },
    { 
        id: 5, 
        name: 'Brazil diófa', 
        image: brazildiofaImage,
        description: 'A brazil diófa az amazóniai esőerdők egyik kulcsfája. Termése fontos élelmiszer és megélhetési forrás a helyi közösségek számára, de az illegális fakitermelés és az erdőirtás komolyan veszélyezteti fennmaradását.', 
        form: 'plant',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 6, 
        name: 'Óriás bromélia', 
        image: oriasbromeliaImage,
        description: 'Egyedülálló növény, amely akár 10 méter magasra is megnő. Virágzása ritka esemény, és a klímaváltozás következtében élőhelyei fokozatosan eltűnnek.', 
        form: 'plant',
        location: 'Andok felhőerdői'
    },
    { 
        id: 7, 
        name: 'Hárpia sas', 
        image: harpiasasImage,
        description: 'A világ egyik legnagyobb ragadozó madara, amely az amazóniai esőerdők csúcsragadozója. Erőteljes karmai képesek majmokat és lajhárokat is elejteni. Az erdőirtás miatt élőhelyei folyamatosan zsugorodnak.', 
        form: 'animal',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 8, 
        name: 'Kék makákó', 
        image: kekmakakoImage,
        description: 'Ez a ritka madagaszkári főemlős kizárólag a sziget északkeleti esőerdeiben él. Jellegzetes kék bőre miatt könnyen felismerhető. A túlzott vadászat és erdőirtás miatt kritikusan veszélyeztetett.', 
        form: 'animal',
        location: 'Madagaszkár esőerdői'
    },
    { 
        id: 9, 
        name: 'Okapi', 
        image: okapi,
        description: 'A kongói esőerdők rejtélyes lakója, amely a zsiráf legközelebbi rokona. Csíkos lábai zebrára emlékeztetnek. Az illegális bányászat és konfliktusok veszélyeztetik élőhelyét.', 
        form: 'animal',
        location: 'Kongó-medence esőerdő'
    },
    { 
        id: 10, 
        name: 'Aranybéka', 
        image: aranybekaImage,
        description: 'A costa ricai felhőerdők ikonikus lakója, amely élénksárga színével figyelmezteti ragadozóit mérgező voltára. A klímaváltozás és gombás fertőzések miatt a kihalás szélén áll.', 
        form: 'animal',
        location: 'Costa Rica felhőerdői'
    },
    { 
        id: 11, 
        name: 'Közép-amerikai tapír', 
        image: tapirImage,
        description: 'A tapír az esőerdők "kertésze", hiszen magjait szétszórva segíti az erdő megújulását. Az élőhelyek elvesztése miatt már csak elszigetelt populációkban találhatók meg.', 
        form: 'animal',
        location: 'Közép-Amerika esőerdői'
    },
    { 
        id: 12, 
        name: 'Hegyi gorilla', 
        image: gorillaImage, 
        description: 'Afrika felhőerdeiben élő legnagyobb emberszabású majom. Rendkívül intelligens és szociális lény. Az orvvadászat, élőhely-vesztés és betegségek miatt kritikusan veszélyeztetett.', 
        form: 'animal',
        location: 'Kongó-medence felhőerdői'
    },
    { 
        id: 13, 
        name: 'Szivárvány tukán', 
        image: tukanImage,
        description: 'Jellegzetes nagy csőrével az esőerdők egyik legismertebb madara. Fontos szerepet játszik a magok terjesztésében. A törvénytelen vadászat és az élőhelyek pusztulása fenyegeti.', 
        form: 'animal',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 14, 
        name: 'Hyacinth ara', 
        image: papagajImage,
        description: 'A világ legnagyobb repülő papagája, káprázatos kék tollazattal. A brazil esőerdők lakója, amelyet a kalitka-madár kereskedelem és élőhely-pusztítás veszélyeztet.', 
        form: 'animal',
        location: 'Brazil esőerdők'
    },
    { 
        id: 15, 
        name: 'Jaguárundi', 
        image: jaguarundiImage,
        description: 'Közepes méretű vadmacska, amely a közép- és dél-amerikai esőerdőkben vadászik. Remek úszó és fára mászó. Az erdőirtás miatt élőhelyei töredezettek.', 
        form: 'animal',
        location: 'Amazonas és Közép-Amerika'
    },
    { 
        id: 16, 
        name: 'Zöld anakonda', 
        image: zoldanakondaImage,
        description: 'A világ legnagyobb kígyója, amely elérheti a 9 méteres hosszúságot. Az amazóniai mocsarakban és folyókban vadászik. A vízi élőhelyek szennyeződése veszélyezteti.', 
        form: 'animal',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 17, 
        name: 'Ködfoltos leopárd', 
        image: kodfoltosleopardImage,
        description: 'Délkelet-Ázsia leggyönyörűbb vadmacskája, jellegzetes felhő-mintázatú bundájával. Kiváló fára mászó, aki az esőerdők lombkoronájában vadászik. Illegális kereskedelem áldozata.', 
        form: 'animal',
        location: 'Délkelet-ázsiai esőerdők'
    },
    { 
        id: 18, 
        name: 'Kardcsőrű kolibri', 
        image: kardcsorukolibriImage,
        description: 'Az Andok esőerdeiben élő különleges kolibri, amelynek csőre hosszabb, mint teste. Speciális virágokból táplálkozik, így fontos beporzó. A klímaváltozás veszélyezteti.', 
        form: 'animal',
        location: 'Andok felhőerdői'
    },
    { 
        id: 19, 
        name: 'Viktória tavi rózsa', 
        image: viktoriatavirozsaImage,
        description: 'Az Amazonas medencéjének óriási vízinövénye, amelynek levelei elérik a 3 méteres átmérőt és akár 45 kg súlyt is elbírnak. Lenyűgöző éjszakai virágzása csupán két napig tart.', 
        form: 'plant',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 20, 
        name: 'Vanília orchidea', 
        image: vaniliaorchideaImage,
        description: 'A világ egyik legértékesebb fűszernövénye, amely csak az esőerdők lombkoronájában nő meg. Kézi beporzást igényel, és termesztése rendkívül munkaigényes.', 
        form: 'plant',
        location: 'Madagaszkár esőerdői'
    },
    { 
        id: 21, 
        name: 'Kakaófa', 
        image: kakaofaImage,
        description: 'A csokoládé alapanyagát adó fa, amely csak az esőerdők árnyékos területein terem. Az egyoldalú ültetvények terjedése miatt az őshonos fajtái veszélyben vannak.', 
        form: 'plant',
        location: 'Amazonas és Nyugat-Afrika'
    },
    { 
        id: 22, 
        name: 'Kék orchidea', 
        image: kekorchideaImage,
        description: 'Ritka és lenyűgöző szépségű orchidea faj, amely kizárólag a középső-amerikai felhőerdőkben található. A túlzott gyűjtés és élőhely-vesztés miatt veszélyeztetett.', 
        form: 'plant',
        location: 'Costa Rica felhőerdői'
    },
    { 
        id: 23, 
        name: 'Majomkenyérfa', 
        image: majomkenyerfaImage,
        description: 'Chile ősi esőerdeinek magas fája, amelynek táplálékban gazdag diója fontos élelemforrás az állatok számára. A fakitermelés miatt erősen veszélyeztetett.', 
        form: 'plant',
        location: 'Chilei esőerdők'
    },
    { 
        id: 24, 
        name: 'Gumifa', 
        image: gumifaImage,
        description: 'Az amazóniai gumifa természetes kaucsuk forrása, amely nélkül a modern világ elképzelhetetlen lenne. A túlzott kitermelés miatt jelentős csökkenés tapasztalható.', 
        form: 'plant',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 25, 
        name: 'Mahagóni fa', 
        image: mahagonifaImage,
        description: 'Az esőerdők egyik legértékesebb faanyagot adó fája, amelyet bútorok készítésére használnak. Az illegális fakitermelés a kihalás szélére sodorta.', 
        form: 'plant',
        location: 'Közép-Amerika és Nyugat-Afrika'
    },
    { 
        id: 26, 
        name: 'Vad paprika', 
        image: vadpaprikaImage,
        description: 'Az összes paprikafajta őse, amely az amazóniai erdők alatti szintjén nő. Rendkívül csípős terméseivel segíti magjainak terjedését madarak által.', 
        form: 'plant',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 27, 
        name: 'Óriás liána', 
        image: lianaImage,
        description: 'Vastag, fára kúszó növény, amely életet ad az esőerdő függőleges világának. Akár 200 méter hosszúra is megnő, és fontos útként szolgál a lombkorona lakói számára.', 
        form: 'plant',
        location: 'Amazonas és Kongó-medence'
    },
    { 
        id: 28, 
        name: 'Mohafa páfrány', 
        image: mohafapafranyImage,
        description: 'Ősi növény, amely már a dinoszauruszok korában is létezett. A felhőerdők párás környezetében nő, és a klímaváltozás miatt élőhelyei szűkülnek.', 
        form: 'plant',
        location: 'Andok és Új-Zéland esőerdői'
    },
    { 
        id: 29, 
        name: 'Király páfrány', 
        image: kiralypafranyImage,
        description: 'Az esőerdők talajszintjének legnagyobb páfránya, amely akár 5 méter magas levelekkel rendelkezik. Az erdőirtás elsődleges áldozata, mivel csak ép erdőkben tud megélni.', 
        form: 'plant',
        location: 'Amazonas esőerdő'
    },
    { 
        id: 30, 
        name: 'Kancsóka', 
        image: kancsokaImage,
        description: 'Borneó esőerdeinek különleges húsevő növénye, amely csapdaként működő levelekkel fogja be zsákmányát. Az élőhelyek elvesztése miatt számos faja veszélyeztetett.', 
        form: 'plant',
        location: 'Borneó esőerdői'
    }
];