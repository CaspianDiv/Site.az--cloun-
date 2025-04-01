// Calculation Page Data Area 
const calcData = {
   "costStatic": [{
      "id": 5,
      "name": "Page",
      "price": 100,
      "type": "static_page"
   }],
   "costDesign": [{
      "id": 10,
      "name": "Medium",
      "price": 2,
      "type": "design_complexity"
   },
   {
      "id": 12,
      "name": "Simple",
      "price": 1,
      "type": "design_complexity"
   },
   {
      "id": 13,
      "name": "Custom",
      "price": 3,
      "type": "design_complexity"
   }],
   "costLogo" : [{
      "id": 7,
      "name": "Custom",
      "price": 200,
      "type": "logo_design"
   },
   {
      "id": 15,
      "name": "No need",
      "price": 0,
      "type": "logo_design"
   },
   {
      "id": 20,
      "name": "Simple",
      "price": 100,
      "type": "logo_design"
   }],
   "costAddon": [{
      "id": 1,
      "name": "Bloq",
      "price": 200,
      "type": "website_addon"
   },
   {
      "id": 2,
      "name": "Üzv girişi \/\u200d\u200d\u200d Profillər",
      "price": 200,
      "type": "website_addon"
   },
   {
      "id": 8,
      "name": "Responsive",
      "price": 100,
      "type": "website_addon"
   },
   {
      "id": 22,
      "name": "Forum",
      "price": 400,
      "type": "website_addon"
   },
   {
      "id": 23,
      "name": "Mesajlaşma",
      "price": 50,
      "type": "website_addon"
   },
   {
      "id": 24,
      "name": "Canlı Söhbət",
      "price": 50,
      "type": "website_addon"
   },
   {
      "id": 25,
      "name": "Qalereya",
      "price": 100,
      "type": "website_addon"
   },
   {
      "id": 26,
      "name": "Əlaqə forması",
      "price": 100,
      "type": "website_addon"
   },
   {
      "id": 27,
      "name": "Saytada Axtarış",
      "price": 100,
      "type": "website_addon"
   },
   {
      "id": 28,
      "name": "Xəritə Məlumatı \/ Geolocation",
      "price": 100,
      "type": "website_addons"
   },
   {
      "id": 29,
      "name": "Rezervasyon",
      "price": 400,
      "type": "website_addons"
   },
   {
      "id": 30,
      "name": "Sosial Media İnteqrasiyası",
      "price": 50,
      "type": "website_addons"
   },
   {
      "id": 31,
      "name": "Analitika / İzləmə",
      "price": 50,
      "type": "website_addons"
   },
   {
      "id": 36,
      "name": "Admin Panel",
      "price": 300,
      "type": "website_addons"
   }],
   "costSeo" : [{
      "id": 3,
      "name": "Başlıqlar & Meta",
      "price": 200,
      "type": "seo_addons" 
   },
   {
      "id": 32,
      "name": "Açar söz",
      "price": 300,
      "type": "seo_addons"
   },
   {
      "id": 33,
      "name": "+20 Qabaqcıl Texnika",
      "price": 300,
      "type": "seo_addons"
   },
   {
      "id": 34,
      "name": "Başlıq Teqləri",
      "price": 100,
      "type": "seo_addons"
   },
   {
      "id": 35,
      "name": "Sitemap",
      "price": 100,
      "type": "seo_addons"
   }],
   "costSetting" : [{
      "id": 18,
      "name": "min",
      "price": 450,
      "type": "setting",
   },
   {
      "id": 19,
      "name": "page",
      "price": 20,
      "type": "setting"
   }],
   "costEcommerce": [{
      "id": 38,
      "name": "Ödəniş",
      "price": 200,
      "type": "ecommerce"
   },
   {
      "id": 39,
      "name": "Səbət",
      "price": 500,
      "type": "ecommerce"
   },
   {
      "id": 40,
      "name": "Məhsullar",
      "price": 300,
      "type": "ecommerce"
   },
   {
      "id": 41,
      "name": "Bəyəndiklərim",
      "price": 300,
      "type": "ecommerce"
   },
   {
      "id": 42,
      "name": "Filtr",
      "price": 300,
      "type": "ecommerce"
   },
   {
      "id": 43,
      "name": "Məhsul Haqqında",
      "price": 200,
      "type": "ecommerce"
   }]
  };
   
   


const vebSayt = document.getElementById("vebSayt");
const vebValues = document.getElementById("vebValues");
const search = document.getElementById("search");
const searchValue = document.getElementById("searchValue");
const elektronTicaret = document.getElementById("elektronTicaret");
const elektronValue = document.getElementById("elektronValue");

// Function Toggle Website Div added 
function vebDizaynSayt() {
   calcData.costAddon.map(item => {
      vebSayt.innerHTML += `  
            <label class="flex justify-between items-center mb-5 cursor-pointer">
               <input type="checkbox" value="${item.price}" class="sr-only peer" onclick="calcVeb()" name="${item.name}" />
               <span class="ms-3 text-sm font-medium text-[#11185E] ">${item.name}</span>
            <div class="relative w-9 h-5 bg-gray-200   rounded-full peer  peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
               after:content-[''] after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full 
               after:h-4 after:w-4 after:transition-all dark:border-gray-600  dark:peer-checked:bg-[#A271F2]">
            </div>
         </label>
         `
   });

   calcData.costSeo.map(item => {
      search.innerHTML += `
         <div class="inline-flex  items-center mr-2 rounded-full cursor-pointer">
            <label class="relative flex items-center mr-2 rounded-full cursor-pointer" for="${item.name}">
               <input type="checkbox" id="${item.name}"  name="${item.name}" value="${item.price}" 
               class="border relative border-gray-400 rounded-md
               appearance-none h-5 w-5 transition-all duration-500 checked:bg-[#A271F2] before:content[''] peer before:absolute 
               before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8  
                cursor-pointer before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:before:bg-[#A271F2] 
                hover:before:opacity-40  checked:border-[#A271F2]" onclick="searchVal()" 
               />
            </label>
            <label for="${item.name}" class="select-none cursor-pointer">${item.name}</label>
         </div>
      `
   });


   calcData.costEcommerce.map(item => {
      elektronTicaret.innerHTML+=  `
      
            <label class="flex justify-between items-center mb-5 px-2 cursor-pointer">
               <input type="checkbox" value="${item.price}" class="sr-only peer " onclick="calcVeb()" name="${item.name}" />
               <span class="ms-3 text-sm font-medium text-[#11185E]">${item.name}</span>
            <div class="relative w-9 h-5 bg-gray-200   rounded-full peer  peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
               after:content-[''] after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full 
               after:h-4 after:w-4 after:transition-all dark:border-gray-600  dark:peer-checked:bg-[#A271F2]">
            </div>
         </label>
      `
   });
};
vebDizaynSayt();


// Calculation Functions Area 

const pageNum = document.getElementById("pageNum");
const pageDesign = document.getElementById("pageDesign");
const pageStatic = document.getElementById("pageStatic");
const costAmount = document.getElementById("costAmount");
let generalPage = 0;


function calc() {
   generalPage = pageNum.value * pageDesign.value;
   costAmount.innerHTML = `₼ ${pageNum.value / 100} səhifə / ${generalPage}`;
   pageStatic.innerHTML = `₼ ${generalPage}`;
   generalValue();
};
window.onload = 'calc';

const costLogo = document.getElementById("costLogo");
const pageLogo = document.getElementById("pageLogo");
const logoInput = document.getElementById("logoInput");
let generalLogo = 0;

function logoVal() {
   generalLogo = parseFloat(logoInput.value) || 0;
   costLogo.innerHTML = `₼ ${generalLogo}`;
   logoInput.innerHTML = `₼ ${generalLogo}`;
   pageLogo.innerHTML = `₼ ${generalLogo}`
   generalValue();
};

const pageAddition = document.getElementById("pageAddition");
let generalVeb = 0;

function calcVeb () {
   let inputs = document.querySelectorAll("#vebSayt input");
   generalVeb = 0;
   inputs.forEach(item => {
      if(item.checked) generalVeb += +item.value;
   });
   vebValues.innerHTML = `₼ ${generalVeb}`;
   pageAddition.innerHTML = `₼ ${generalVeb}`;
   generalValue();
};

const pageSeo = document.getElementById("pageSeo");
let generalSeo = 0;

function searchVal() {
   let inputs = document.querySelectorAll("#search input");
   generalSeo = 0;
   inputs.forEach(item => {
      if(item.checked) generalSeo+= +item.value;
   });
   searchValue.innerHTML = `₼ ${generalSeo}`;
   pageSeo.innerHTML = `₼ ${generalSeo}`;
   generalValue();
};

const pageEcommerce = document.getElementById("pageEcommerce");
let generalEcommerce = 0;

function electronVal(){
   let inputs = document.querySelectorAll("#elektronTicaret input");
   generalEcommerce = 0;
   inputs.forEach(item => {
      if(item.checked) generalEcommerce+= +item.value;
   });
   elektronValue.innerHTML = `₼ ${generalEcommerce}`;
   pageEcommerce.innerHTML = `₼ ${generalEcommerce}`;
   generalValue();
};


const generalCost = document.getElementById("generalCost");
function generalValue() {
   const minValue = 450;
   const general = generalPage + generalLogo + generalVeb + generalSeo + generalEcommerce;
   generalCost.textContent = ""
   generalCost.textContent = `₼ ${general > minValue ? general : minValue}`;
};