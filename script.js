let heading1 = document.getElementById("h1");
let season = document.getElementById("season")


function winter() {
    heading1.innerHTML = "Зима";
    season.innerHTML = "Зима — це найхолодніша пора року, яка приходить на зміну осені. Земля вкривається пухнастою білою ковдрою снігу, а річки замерзають від морозів. Це час, коли природа засинає, а дерева стоять голі або вкриті блискучим інеєм. Проте саме взимку ми відзначаємо улюблені свята та насолоджуємося затишком у родинному колі.";
    heading1.style.color = "#1111ff";
    season.style.color = "#4f60ff";
    season.style.backgroundColor = "#90c8ff";
    document.getElementById("myImage").src = "https://images.unian.net/photos/2020_12/thumb_files/400_0_1606805888-8038.jpg?0.07767719050420352";
}
function spring() {
    heading1.innerHTML = "Весна";
    season.innerHTML = "Весна — це пора пробудження та оновлення природи. У цей час сонце починає гріти тепліше, а дні стають довшими. Земля вкривається першою зеленню, а на деревах розпускаються бруньки. Повертаються з теплих країв птахи, наповнюючи все навколо дзвінким співом";
    heading1.style.color = "#88ae31";
    season.style.color = "#00ff37";
    season.style.backgroundColor = "#54aa5f80";
    document.getElementById("myImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LS-6AyOWZdak5ZYzKyazQXztupSFOnBwVlHQrjGa-mzbXfqxctSXvxNO&s=10";
}
function summer() {
    heading1.innerHTML = "Літо";
    season.innerHTML = "Літо — це найтепліша пора року, коли природа буяє зеленню, а сонце дарує найбільше тепла. У цей період настають довгоочікувані канікули, що приносять відчуття свободи та безтурботності. Це час для активного відпочинку на свіжому повітрі: купання в річці, прогулянок лісом та подорожей. Сезон також тішить нас свіжими ягодами, фруктами та теплими зоряними вечорами.";
    heading1.style.color = "#f7ff1a";
    season.style.color = "#90f66e";
    season.style.backgroundColor = "#d7e5706f";
    document.getElementById("myImage").src = "https://kor.ill.in.ua/a/610x0/2508147.jpg?v=637266064007846513";
}
function autumn() {
    heading1.innerHTML = "Осінь";
    season.innerHTML = "Осінь — це чарівна пора року, коли природа готується до зимового відпочинку. Листя на деревах змінює свій зелений колір на яскраві відтінки жовтого, оранжевого та червоного. У цей час часто йдуть дощі, а повітря стає прохолодним і свіжим. Також це період збору врожаю та особливого затишку.";
    heading1.style.color = "#981aff";
    season.style.color = "#ff9900";
    season.style.backgroundColor = "#663603bd";
    document.getElementById("myImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA--NDlUrvp0uaGuwOFdqxJbAZzg9e1Q50UujnKh4d-rRVJG5QKgxaLI&s=10";
}