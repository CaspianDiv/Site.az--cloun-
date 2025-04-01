
  // Animation Toggle Scroll
  const scrollButton = document.getElementById('scrollButton');
  scrollButton.addEventListener('click' , () => {
    document.getElementById('customers').scrollIntoView({
      behavior: 'instant',
    });
  });


  // Domain Searching Error Message
  function axtarDomain() {
    const domainInput = document.querySelector("#domain-inp-div input");
    const domainValue = domainInput.value.trim();


    let errorMessage = document.querySelector('#domain-error');

    if(!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.id = 'domain-error';
      errorMessage.className = 'text-[#300B7A]';
      document.querySelector('#domain-inp-div').after(errorMessage);
    }

    if(domainValue === "" || /^[a-zA-Z0-9-]+$/.test(domainValue)) {
      errorMessage.textContent = "*Domen adı düzgün deyil. Domen adında yalnız hərf, rəqəm və '-' işarəsi ola bilər";
      errorMessage.style.display = 'block';
      return false
    }

    errorMessage.style.display = 'none';
    console.log("Domen axtarış nəticəsi :" + domainValue);
    return true
  }
  // Hosting Plan Changed Prices

  function updatePrices() {
      const isYearly = document.getElementById('Toggle3').checked;

      const cards = document.querySelectorAll('#pricing-div .card-title');

      const prices = isYearly ? [60 , 120 , 240]: [5 , 10 , 20]
      const suffix = isYearly ? '/il' : '/ay';

      cards.forEach((card, i) => {
        const priceEl = card.querySelector('.card-title p');
        if(priceEl) {
          priceEl.innerHTML = `₼${prices[i]} <span class="text-lg">${suffix}</span>`
        }
      });
  };

  // StartUp Data Cards forEach progress
  const startUpContainer = document.getElementById('startup_container');

  startUpContainer.innerHTML = '';

  startupData.forEach(item => {
    const cardHTML = `
           <div class="max-w-sm  my-4  bg-[#FAF4FF] border border-gray-200 rounded-lg shadow-sm">
                    <div class="parent p-8">
                    <a href="https://sayt.az/startups/saytaz">
                        <img class="rounded-t-lg bg-cover " src="${item.img}" alt="sayt.az img" />
                    </a>
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#300B60]">${item.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-[#300B60]">${item.description}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A271F2] rounded-full hover:bg-[#300B60]">
                           Ətraflı oxu ...
                        </a>
                    </div>
                </div>
      `

      startUpContainer.innerHTML += cardHTML
  });

  const teams_container = document.getElementById('teams_container');
  teams_container.innerHTML = '';
  teamsData.forEach(item => {
    const cardTeam = `

      <div class="min-h-[150px] min-w-[250px] bg-white mx-auto  border-2 border-[#A271F2] nm:rounded-[30px] dl:rounded-[30px] ts:rounded-[30px] ex-sm:rounded-[30px] sm:rounded-[30px] shadow-sm relative">
           <div class="relative w-full">
               <img class="rounded-[50px] py-8 px-2 object-cover  sm:w-[240px] w-[150px] xs:w-[200px] bottom-0 z-10  mx-auto md:h-[250px] sm:h-[300px] h-[200px]" width="0" height="0" src="${item.img}" alt="" />
           </div>
          <div class="relative -top-20 rounded-[40px] bg-white">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#300B60] text-center">${item.title}</h5>
              </a>
              <p class="mb-3 font-bold text-[#4A2182] text-center">${item.description}</p>
          </div>
      </div>

    `
    teams_container.innerHTML += cardTeam
  });


 // Cards With Paginations 
  let page = 1;
  const perPage = 4;

  function render(p) {
    page = p;
    const start = (p - 1) * perPage;
    let html = '<div class="container flex flex-wrap  justify-center items-center gap-8 py-8">';
    
    progress_cards_data.slice(start, start + perPage).forEach(card => {
      html+= `
                <div class="max-w-lg p-4 shadow-md  bg-[#FAF4FF] border-2 rounded-lg border-[#E4D7FD]">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <img src="${card.img}" alt="" class="block object-cover object-center w-full rounded-md h-72">
                  </div>
                  <div class="space-y-2">
                    <a rel="noopener noreferrer" href="#" class="block">
                      <h3 class="text-xl font-semibold text-[#300B60]">${card.title}</h3>
                    </a>
                  </div>
                </div>
              </div>
        `
    });
    html+= '</div>';
    // Pagination Buttons
    const pages = Math.ceil(progress_cards_data.length / perPage);
    html+= '<div class="flex justify-center  py-10">'
    html+= `<button class="border-2 border-[#E5E7EB] rounded-xl px-3" onclick="render(${p > 1 ? p-1 : 1})" ${p === 1 ? 'disabled' : ''}><</button>`;

    for(let i = 1; i <= pages; i++){
      html+= `<button onclick="render(${i})" class="mx-1 px-3 py-1 border-2 border-[#E5E7EB] rounded-xl ${i === p ? 'bg-purple-600 text-white' : 'bg-white'}">${i}</button>`
    };

    html+= `<button class="border-2 border-[#E5E7EB] rounded-xl px-3" onclick="render(${p > 1 ? p+1 : pages})" ${p === pages ? 'disabled' : ''}>></button>`;
    html+= '</div>';

    document.getElementById('progress_cards').innerHTML = html;
  }; 
  document.addEventListener("DOMContentLoaded" , () => render(1));

  // Blog Sections Cards 
  const blogCardsContainer = document.getElementById('blog_cards');

  blogCardsData.forEach(cards => {
    const cardsBlog = `
        <div class="max-w-sm   bg-[#FAF4FF] border-2 border-[#A271F2] rounded-lg shadow-sm">
          <div class="border">
            <div class="py-5 px-4">
                <img class="w-full h-full  object-contain aspect-[16/9]   rounded-[7px] border border-solid border-slate-200" src="${cards.img}" alt="" />
            </div>
          </div>
            <div class="py-5">
                <a href="#">
                    <h5 class="mb-2 text-lg font-semibold tracking-tight px-2 text-[#334155]">${cards.title}</h5>
                </a>
            </div>
            <div class="px-3 py-2">
              <button class="bg-[#A271F2] py-1 rounded-lg px-3 text-white font-semibold">${cards.btn1desc}</button>
              <button class="bg-[#A271F2] py-1 rounded-lg px-3 text-white font-semibold">${cards.btn2_desc}</button>
              <button class="bg-[#A271F2] py-1 rounded-lg px-3 text-white font-semibold my-2">${cards.btn3_desc}</button>
              <button class="bg-[#A271F2] py-1 rounded-lg px-3 text-white font-semibold my-2">${cards.btn4_desc}</button>
            </div>
        </div>
      `
      blogCardsContainer.innerHTML +=  cardsBlog;    
  });

// Selection Area
  function toggleDropdown(menuId) {
    const allMenus = document.querySelectorAll('.allMenu');
    allMenus.forEach(item => {
        if (item.id !== menuId) {
            item.classList.add('hidden');
        }
    });
    let menu1 = document.getElementById(menuId);
    menu1.classList.toggle('hidden');
};

