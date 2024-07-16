const GetCategories = async ()=> {
    const response = await fetch("https://dummyjson.com/products/categories");
    const json = await response.json();
    return json;
}

export default GetCategories;

/*
Megszerezzük a json, úgyhogy ezt ebben a függvényben return-öljük 
és ha meghívjuk ezt valahol, akkor abba a változóban meg lesznek a kategoriák!!!! 
*/