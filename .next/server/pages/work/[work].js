(()=>{var e={};e.id=246,e.ids=[246,888,660],e.modules={1323:(e,a)=>{"use strict";Object.defineProperty(a,"l",{enumerable:!0,get:function(){return function e(a,r){return r in a?a[r]:"then"in a&&"function"==typeof a.then?a.then(a=>e(a,r)):"function"==typeof a&&"default"===r?a:void 0}}})},4617:e=>{e.exports={activeLocale:"locale-switcher_activeLocale__3drO6",positionRight:"locale-switcher_positionRight__1uDCv",activeButton:"locale-switcher_activeButton__RUOQi"}},7155:e=>{e.exports={column:"work_column___HBIB",content:"work_content__34LaA","bg-white":"work_bg-white__Jn4Es","bg-black":"work_bg-black__HZGgn","color-white":"work_color-white__ZzSAy","color-black":"work_color-black__VCbWy","border-lft":"work_border-lft__VnvLO","border-rg":"work_border-rg__Zg7m0",littleTitle:"work_littleTitle__0_TXI",bigText:"work_bigText__AaatH",boxImageApp:"work_boxImageApp__UTdxK",TitlePerformance:"work_TitlePerformance__8cC5O",TitleBooks:"work_TitleBooks__hu6cE",title:"work_title__pqAOv",titleHead:"work_titleHead__vO5kw"}},9275:(e,a,r)=>{"use strict";r.a(e,async(e,o)=>{try{r.r(a),r.d(a,{config:()=>b,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>m,reportWebVitals:()=>v,routeModule:()=>k,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>f});var t=r(7093),i=r(5244),s=r(1323),l=r(1777),n=r.n(l),d=r(7224),c=r(860),u=e([d,c]);[d,c]=u.then?(await u)():u;let p=(0,s.l)(c,"default"),m=(0,s.l)(c,"getStaticProps"),g=(0,s.l)(c,"getStaticPaths"),h=(0,s.l)(c,"getServerSideProps"),b=(0,s.l)(c,"config"),v=(0,s.l)(c,"reportWebVitals"),f=(0,s.l)(c,"unstable_getStaticProps"),w=(0,s.l)(c,"unstable_getStaticPaths"),x=(0,s.l)(c,"unstable_getStaticParams"),_=(0,s.l)(c,"unstable_getServerProps"),y=(0,s.l)(c,"unstable_getServerSideProps"),k=new t.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/work/[work]",pathname:"/work/[work]",bundlePath:"",filename:""},components:{App:d.default,Document:n()},userland:c});o()}catch(e){o(e)}})},8918:(e,a,r)=>{"use strict";r.a(e,async(e,o)=>{try{r.d(a,{Z:()=>u});var t=r(997),i=r(1163),s=r(6689),l=r(7987),n=r(4617),d=r.n(n),c=e([l]);function u(){let e;let a=(0,i.useRouter)(),{locales:r,locale:o}=a,{t:n,i18n:c}=(0,l.useTranslation)("common"),[u,p]=(0,s.useState)(!1),m=a=>{c.changeLanguage(a),e=a};return(0,s.useEffect)(()=>{let e=e=>{let a=e.split("/")[1];r?.includes(a)||(a=o),p(a===o)};return a.events.on("routeChangeComplete",e),()=>{a.events.off("routeChangeComplete",e)}},[o,r]),t.jsx("div",{className:d().positionRight,children:r&&r.map(a=>t.jsx("div",{children:t.jsx("button",{className:e===a?"activeButton":"",type:"button",onClick:e=>[e.preventDefault(),void console.log("setStatus"+e),m(a)],disabled:!1,children:a})},a))})}l=(c.then?(await c)():c)[0],o()}catch(e){o(e)}})},7224:(e,a,r)=>{"use strict";r.a(e,async(e,o)=>{try{r.r(a),r.d(a,{default:()=>h});var t=r(997),i=r(1163),s=r(3126),l=r(2250),n=r(2021),d=r(7987),c=r(2511),u=r(1938),p=r(1543),m=r(1377),g=e([n,d]);[n,d]=g.then?(await g)():g,r(1602),n.default.use(d.initReactI18next).init({interpolation:{escapeValue:!1},lng:n.default.language?n.default.language:"en",resources:{en:{common:p},fr:{common:c},es:{common:u}},detection:{order:["path","navigator"]}});let h=(0,m.appWithTranslation)(function({Component:e,pageProps:a}){let{locale:r,defaultLocale:o}=(0,i.useRouter)();return t.jsx(s.IntlProvider,{locale:r,defaultLocale:o,children:t.jsx(l.PrimeReactProvider,{children:t.jsx(e,{...a})})})});o()}catch(e){o(e)}})},860:(e,a,r)=>{"use strict";r.a(e,async(e,o)=>{try{r.r(a),r.d(a,{default:()=>p,getServerSideProps:()=>m});var t=r(997),i=r(1163),s=r(6689),l=r(7155),n=r.n(l),d=r(7987),c=r(8918),u=e([d,c]);[d,c]=u.then?(await u)():u;let p=function(e){let{t:a,i18n:o}=(0,d.useTranslation)("common"),l=(0,i.useRouter)(),{defaultLocale:u}=l,[p,m]=(0,s.useState)(null),[g,h]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async()=>{try{let e=await r(1018)(`./${o.language}/common.json`);null!==p&&`work${p}` in e.default.works?h(e.default.works[`work${p}`]):h(null)}catch(e){console.error("Error loading JSON file:",e)}})()},[o.language,p]),(0,s.useEffect)(()=>{let e=Number(l.query.workIndex);isNaN(e)||m(e)},[l.query.workIndex]),g)?(0,t.jsxs)("div",{style:{height:"-webkit-fill-available",paddingLeft:"12px",paddingRight:"12px",overflow:"hidden"},children:[t.jsx(c.Z,{}),t.jsx("a",{className:n().title,onClick:()=>{l.push("/")},children:a("author")}),(0,t.jsxs)("div",{style:{display:"flex",overflow:"hidden"},children:[t.jsx("div",{className:n().column,children:(0,t.jsxs)("div",{className:n().content,children:[t.jsx("h3",{className:n().titleHead,children:a(g.title)}),(0,t.jsxs)("p",{children:[" ",a(g.text)]})]})}),t.jsx("div",{className:n().column,children:t.jsx("div",{className:n().content,children:t.jsx("div",{className:n().boxImageApp,style:{paddingTop:"40px",paddingBottom:"80px",alignItems:"flex-start"},children:t.jsx("iframe",{src:"https://player.vimeo.com/video/182263841?h=b391f90c78",width:"640",height:"360"})})})})]})]}):t.jsx("div",{children:"Loading..."})},m=async({locale:e,locales:a})=>({props:{locale:e,locales:a}});o()}catch(e){o(e)}})},1602:()=>{},5244:(e,a)=>{"use strict";var r;Object.defineProperty(a,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1018:(e,a,r)=>{var o={"./en/common.json":1543,"./es/common.json":1938,"./fr/common.json":2511};function t(e){return Promise.resolve().then(()=>{if(!r.o(o,e)){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}var t=o[e];return r.t(t,19)})}t.keys=()=>Object.keys(o),t.id=1018,e.exports=t},1377:e=>{"use strict";e.exports=require("next-i18next")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2250:e=>{"use strict";e.exports=require("primereact/api")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},3126:e=>{"use strict";e.exports=require("react-intl")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2021:e=>{"use strict";e.exports=import("i18next")},7987:e=>{"use strict";e.exports=import("react-i18next")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")},1543:e=>{"use strict";e.exports=JSON.parse('{"welcome":"Welcome to my blog!","author":"Darius Bogdanowicz","contact":"Contact","about":"Bio","about_description":"Darius Bogdanowicz (Li\xe8ge, 1993) is a writer and performance artist. He writes fiction anchored to reality, yet open to dreams. If the book is the main axis of his work and the driving force of his creation, the long research that accompanies his novels leads him to experiment and fabulate within different social contexts, creating site-specific performance works and performative readings. His first novel, Festival, was awarded the IV Certamen Literario Fundaci\xf3n Antonio Gala. He has been artist in residence at the Fabra i Coats (Barcelona) and the Fundaci\xf3n Antonio Gala (C\xf3rdoba). As a performer, he has performed for prominent figures such as Marina Abramović, Romeo Castelucci or La Fura del Baus, among others. He has a degree in Art and Design from the Escola Massana (UAB, Barcelona) and a Master in Speculative Narrative from the \xc9cole de Recherche Graphique (ULB, Brussels). He currently lives in Brussels, from where he writes, co-organizes the performance event IMPORT/EXPORT and travels constantly, possessed by a nomadic instinct.","about_telf_number":"+32 474 359 094","about_mail":"darius.bogdanowicz@proton.me","about_contact":"Contact","about_footer_picture":"Photography by Fran Baena","news":"\uD83D\uDC49\uD83C\uDFFB Buy my the New Book \'Festival\'. A novel winner of the IV Antonio Gala Prize.","works":{"work0":{"id":0,"title":"Festival","text":"Lorem fistrum a gramenawer torpedo no puedor pupita ahorarr qu\xe9 dise usteer no puedor hasta luego Lucas ese pedazo de pecador. Mamaar no puedor no puedor condemor est\xe1 la cosa muy malar fistro diodenoo. Tiene musho peligro diodenoo a gramenawer ese hombree sexuarl mamaar diodeno. Hasta luego Lucas amatomaa por la gloria de mi madre mamaar. Te voy a borrar el cerito condemor va ust\xe9 muy cargadoo llevame al sircoo no te digo trigo por no llamarte Rodrigor me cago en tus muelas de la pradera pecador sexuarl.<br></br> <br></br>Tiene musho peligro a wan al ataquerl qu\xe9 dise usteer se calle ust\xe9e pecador va ust\xe9 muy cargadoo condemor. Sexuarl por la gloria de mi madre por la gloria de mi madre de la pradera. Papaar papaar no puedor no te digo trigo por no llamarte Rodrigor ese hombree de la pradera se calle ust\xe9e no te digo trigo por no llamarte Rodrigor ese que llega papaar papaar pupita. De la pradera mamaar te va a has\xe9 pupitaa se calle ust\xe9e la caidita. Quietooor tiene musho peligro jarl te voy a borrar el cerito a wan condemor va ust\xe9 muy cargadoo jarl. Torpedo papaar papaar diodenoo sexuarl. Te va a has\xe9 pupitaa la caidita apetecan ese pedazo de ese hombree te voy a borrar el cerito. Te voy a borrar el cerito ahorarr la caidita tiene musho peligro.<br></br> <br></br>Te voy a borrar el cerito torpedo benemeritaar apetecan est\xe1 la cosa muy malar caballo blanco caballo negroorl condemor a wan se calle ust\xe9e ahorarr te va a has\xe9 pupitaa. Ese pedazo de quietooor mamaar est\xe1 la cosa muy malar hasta luego Lucas a wan diodenoo. A wan ese que llega ese que llega est\xe1 la cosa muy malar por la gloria de mi madre diodenoo ese pedazo de. Sexuarl ese pedazo de diodeno benemeritaar ahorarr ese hombree por la gloria de mi madre. Ese pedazo de por la gloria de mi madre te voy a borrar el cerito papaar papaar te va a has\xe9 pupitaa la caidita fistro.","picture":"Festival.jpeg"},"work1":{"id":1,"title":"White Sheet II","text":"En - Lorem Ipsum - 1","picture":"sld.png"},"work2":{"id":2,"title":"Making Love at the Airport","text":"En - Lorem Ipsum - 3","picture":"Festival.jpeg"},"work3":{"id":3,"title":"Bridging the Gap","text":"En - Lorem Ipsum","picture":"sld.png"},"work4":{"id":5,"title":"Remains of Reality","text":"En - Lorem Ipsum","picture":"Festival.jpeg"}}}')},1938:e=>{"use strict";e.exports=JSON.parse('{"welcome":"Bienvenido a mi Blog!","author":"Darius Bogdanowicz","contact":"Contacto","about":"Bio","about_description":"Darius Bogdanowicz (Lieja, 1993) es escritor y artista de performance. Escribe ficciones ancladas a la realidad, pero abiertas al sue\xf1o. Si el libro es el eje principal de su trabajo y el motor de su creación, las largas investigaciones que acompañan sus novelas lo llevan a experimentar y fabular con diferentes contextos sociales, creando obras de performance espec\xedficas a cada lugar y lecturas performativas. Su primera novela, Festival, ha sido galardonada con el IV Certamen Literario Fundaci\xf3n Antonio Gala. Ha sido artista en residencia en la Fabra i Coats (Barcelona) y la Fundación Antonio Gala (Córdoba). Como performer, ha actuado para figuras destacadas como Marina Abramović, Romeo Castelucci o La Fura del Baus, entre otros. Ha cursado el grado en Arte y Dise\xf1o de la Escola Massana (UAB, Barcelona) y el M\xe1ster en Narrativa Especulativa de la \xc9cole de Recherche Graphique (ULB, Bruselas). Actualmente vive en Bruselas, desde donde escribe, coorganiza el evento de performance IMPORT/EXPORT y viaja constantemente, poseído por un instinto nómada.","about_telf_number":"+32474359094","about_mail":"darius.bogdanowicz@proton.me","about_contact":"Contacto","about_footer_picture":"Foto por Fran Baena","news":"\uD83D\uDC49\uD83C\uDFFB Buy my the New Book \'Festival\'. A novel winner of the IV Antonio Gala Prize.","works":{"work0":{"id":0,"title":"Festival","text":"Lorem fistrum a gramenawer torpedo no puedor pupita ahorarr qu\xe9 dise usteer no puedor hasta luego Lucas ese pedazo de pecador. Mamaar no puedor no puedor condemor est\xe1 la cosa muy malar fistro diodenoo. Tiene musho peligro diodenoo a gramenawer ese hombree sexuarl mamaar diodeno. Hasta luego Lucas amatomaa por la gloria de mi madre mamaar. Te voy a borrar el cerito condemor va ust\xe9 muy cargadoo llevame al sircoo no te digo trigo por no llamarte Rodrigor me cago en tus muelas de la pradera pecador sexuarl.<br></br> <br></br>Tiene musho peligro a wan al ataquerl qu\xe9 dise usteer se calle ust\xe9e pecador va ust\xe9 muy cargadoo condemor. Sexuarl por la gloria de mi madre por la gloria de mi madre de la pradera. Papaar papaar no puedor no te digo trigo por no llamarte Rodrigor ese hombree de la pradera se calle ust\xe9e no te digo trigo por no llamarte Rodrigor ese que llega papaar papaar pupita. De la pradera mamaar te va a has\xe9 pupitaa se calle ust\xe9e la caidita. Quietooor tiene musho peligro jarl te voy a borrar el cerito a wan condemor va ust\xe9 muy cargadoo jarl. Torpedo papaar papaar diodenoo sexuarl. Te va a has\xe9 pupitaa la caidita apetecan ese pedazo de ese hombree te voy a borrar el cerito. Te voy a borrar el cerito ahorarr la caidita tiene musho peligro.<br></br> <br></br>Te voy a borrar el cerito torpedo benemeritaar apetecan est\xe1 la cosa muy malar caballo blanco caballo negroorl condemor a wan se calle ust\xe9e ahorarr te va a has\xe9 pupitaa. Ese pedazo de quietooor mamaar est\xe1 la cosa muy malar hasta luego Lucas a wan diodenoo. A wan ese que llega ese que llega est\xe1 la cosa muy malar por la gloria de mi madre diodenoo ese pedazo de. Sexuarl ese pedazo de diodeno benemeritaar ahorarr ese hombree por la gloria de mi madre. Ese pedazo de por la gloria de mi madre te voy a borrar el cerito papaar papaar te va a has\xe9 pupitaa la caidita fistro.","picture":"Festival.jpeg"},"work1":{"id":1,"title":"Hoja Blanca II","text":"Es - Lorem Ipsum","picture":"Festival.jpeg"},"work2":{"id":2,"title":"Faire l\'Amour \xe0 l\'A\xe9roport","text":"Es - Lorem Ipsum","picture":"sld.png"},"work3":{"id":3,"title":"Salvando las Distancias","text":"Es - Lorem Ipsum","picture":"Festival.jpeg"},"work4":{"id":4,"title":"Bandas de chicos j\xf3venes buscando problemas vestidos por N*ke y Ad*das","text":"Es - Lorem Ipsum","picture":"sld.png"},"work5":{"id":5,"title":"Restos de Realidad","text":"Es - Lorem Ipsum","picture":"Festival.jpeg"}}}')},2511:e=>{"use strict";e.exports=JSON.parse('{"welcome":"Bienvenue sur mon blog!","author":"Darius Bogdanowicz","contact":"Contact","about":"Bio","about_description":"Darius Bogdanowicz (Li\xe8ge, 1993) est un \xe9crivain et un artiste de performance. Il \xe9crit des fictions ancr\xe9es dans la r\xe9alit\xe9, mais ouvertes au r\xeave. Si le livre est l\'axe principal de son travail et le moteur de sa cr\xe9ation, les longues recherches qui accompagnent ses romans l\'am\xe8nent \xe0 exp\xe9rimenter et \xe0 fabuler dans diff\xe9rents contextes sociaux, en cr\xe9ant des performances in situ et des lectures performatives. Son premier roman, Festival, a re\xe7u le IVe Certamen Literario Fundaci\xf3n Antonio Gala. Il a \xe9t\xe9 artiste en r\xe9sidence \xe0 la Fabra i Coats (Barcelone) et \xe0 la Fundaci\xf3n Antonio Gala (Cordoue). En tant que performeur, il a jou\xe9 pour des personnalit\xe9s telles que Marina Abramović, Romeo Castelucci et La Fura del Baus, entre autres. Il est dipl\xf4m\xe9 en art et design de l\'Escola Massana (UAB, Barcelone) et titulaire d\'une ma\xeetrise en narration sp\xe9culative de l\'\xc9cole de recherche graphique (ULB, Bruxelles). Il vit actuellement \xe0 Bruxelles, d\'o\xf9 il \xe9crit, co-organise l\'\xe9v\xe9nement de performance IMPORT/EXPORT et voyage constamment, poss\xe9d\xe9 par un instinct nomade.","about_telf_number":"+32474359094","about_mail":"darius.bogdanowicz@proton.me","about_contact":"Contact","about_footer_picture":"Photo de Fran Baena","news":"\uD83D\uDC49\uD83C\uDFFB Buy my the New Book \'Festival\'. A novel winner of the IV Antonio Gala Prize.","works":{"work0":{"id":0,"title":"Festival","text":"Lorem fistrum a gramenawer torpedo no puedor \\n pupita ahorarr qu\xe9 dise usteer no puedor hasta luego Lucas ese pedazo de pecador. Mamaar no puedor no puedor condemor est\xe1 la cosa muy malar fistro diodenoo. Tiene musho peligro diodenoo a gramenawer ese hombree sexuarl mamaar diodeno. Hasta luego Lucas amatomaa por la gloria de mi madre mamaar. Te voy a borrar el cerito condemor va ust\xe9 muy cargadoo llevame al sircoo no te digo trigo por no llamarte Rodrigor me cago en tus muelas de la pradera pecador sexuarl. Tiene musho peligro a wan al ataquerl qu\xe9 dise usteer se calle ust\xe9e pecador va ust\xe9 muy cargadoo condemor. Sexuarl por la gloria de mi madre por la gloria de mi madre de la pradera. Papaar papaar no puedor no te digo trigo por no llamarte Rodrigor ese hombree de la pradera se calle ust\xe9e no te digo trigo por no llamarte Rodrigor ese que llega papaar papaar pupita. De la pradera mamaar te va a has\xe9 pupitaa se calle ust\xe9e la caidita. Quietooor tiene musho peligro jarl te voy a borrar el cerito a wan condemor va ust\xe9 muy cargadoo jarl. Torpedo papaar papaar diodenoo sexuarl. Te va a has\xe9 pupitaa la caidita apetecan ese pedazo de ese hombree te voy a borrar el cerito. Te voy a borrar el cerito ahorarr la caidita tiene musho peligro.<br></br> <br></br>Te voy a borrar el cerito torpedo benemeritaar apetecan est\xe1 la cosa muy malar caballo blanco caballo negroorl condemor a wan se calle ust\xe9e ahorarr te va a has\xe9 pupitaa. Ese pedazo de quietooor mamaar est\xe1 la cosa muy malar hasta luego Lucas a wan diodenoo. A wan ese que llega ese que llega est\xe1 la cosa muy malar por la gloria de mi madre diodenoo ese pedazo de. Sexuarl ese pedazo de diodeno benemeritaar ahorarr ese hombree por la gloria de mi madre. Ese pedazo de por la gloria de mi madre te voy a borrar el cerito papaar papaar te va a has\xe9 pupitaa la caidita fistro.","picture":"Festival.jpeg"},"work1":{"id":1,"title":"Feuille blanche II","text":"FR - Lorem Ipsum","picture":"sld.png"},"work2":{"id":2,"title":"Faire l\'Amour \xe0 l\'A\xe9roport","text":"FR - Lorem Ipsum","picture":"Festival.jpeg"},"work3":{"id":3,"title":"Salvando las Distancias","text":"FR - Lorem Ipsum","picture":"sld.png"},"work4":{"id":4,"title":"Bandes de jeunes en qu\xeate d\'ennuis habill\xe9s par des N*ke et des Ad*das","text":"FR - Lorem Ipsum","picture":"Festival.jpeg"},"work5":{"id":5,"title":"Vestiges de la r\xe9alit\xe9","text":"FR - Lorem Ipsum","picture":"sld.png"}}}')}};var a=require("../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),o=a.X(0,[255,163,777],()=>r(9275));module.exports=o})();