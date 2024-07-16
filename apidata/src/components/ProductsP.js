/*
Mi kell a pagiantion-hoz 
kell egy limit, hogy mennyi termék legyen egy oldalon 
ezt megkapjuk, úgyhogy van egy select és ki lehet választani, hogy mennyi legyen a limit 
->
<select value={limit}
onChange={e=>setLimit(parseInt(e.target.value))}>
    <option value={16}>16</option>
    <option value={24}>24</option>
    <option value={32}>32</option>
</select>

skip-et úgy kapjuk meg, ami azt jelenti, hogy hány terméket hagytunk ki (néztünk meg) 
tehát itt fontos a page, mert ha az első page-n vagyunk, akkor a skip-nek biztos, hogy nullának kell lenni 
és kell hozzá még a limit megkapunk a select-ből 

const skip = (page-1) * limit;
mert ha a page 1, akkor ne legyen skip, tehát 1-1=0 és akkor 0 lesz, akármennyi is a limit (amit megjelenítünk egyszerre termékek)
utána meg folyamatosan nő a skip a limit-vel minden lapozásnál 

total az megint egy egyenlet lesz -> json.total -> ez megmondja, hogy összesen, hány terméket szedtünk le ezt el kell osztani a limit-vel 

mondjuk 100 termék van és 32-re van beállítva a limit akkor a total 4 lesz, mert ezt mindig felfele kell majd kerekíteni!!!!! 
Első oldalon van 32 termék, 2-dik, 3-dikon is és a negyediken meg a fentmaradó 4 
-> 
setTotal(Math.ceil(json.total/limit)); ezt mindig json.ceil()-ezni kell!!!!!!! 

kell még egy page is ami meg azt fogja megmondani, hogy éppen hányadik oldalon vagyunk, ez mindig 1-ről indul és nem lehet nagyobb, mint a total
-> 
const pagination = (addition)=> {
    const dNext = addition === 1 && page >= total;
    const dPrev = addition === -1 && page <= 1;

    if(!dNext && !dPrev)
    setPage(p=>p+addition);

ez itt a pagination-ból is jó látszik, hogy nem lehet nagyobb mint a total és nagyobbnak kell legyen mint 1
page-t majd a pagination-ben növeljük vagy csökkentjük 
és akkor innen tudjuk, hogy hányadik oldalon leszünk majd a useState-s page változó meg egyről indul 
és ami nagyon fontos, hogy meg kell hívni a függvényt ami leszedi a termékeket 
mindig ha változik a page!!!!! 
*/