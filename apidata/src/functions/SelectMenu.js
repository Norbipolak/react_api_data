import { useLocation } from "react-router-dom";

function selectMenu(menu) {
    const location = useLocation();

    if(location.pathname === menu) 
        return "selected-menu"
    return "";
}

export default selectMenu;

/*
ha a location.pathname az megegyezik a menu-vel, amit majd bekérünk és vagyis ez egy path lesz majd inkább és ha megegyezik a kettő 
akkor megadjuk className-nek ezt amit itt return-ölünk 
    <li className={SelectMenu("/")}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={SelectMenu("/create-product")}>
                        <Link to="/create-product">Create Product</Link>
                    </li>
                    <li className={SelectMenu("/contact")}>
                        <Link to="/contact">Contact</Link>
                    </li>

ez a fontos, hogy egy className-ben hívjuk meg és megadjuk neki mindig azt ami a Link to-jában van!!!!!!!! 

*/