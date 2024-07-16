import { Link, Outlet } from "react-router-dom";
import selectMenu from "../functions/SelectMenu";

function Nav() {
    return(
        <>
            <nav>
                <ul>
                    <li className={selectMenu("/")}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={selectMenu("/create-product")}>
                        <Link to={"/create-product"}>Create Product</Link>
                    </li>
                    <li className={selectMenu("/contact")}>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Nav;

/*
    return(
        <>

        </>
    );

mert majd vissza kell adni az outlet-et is, nem csak a nav tag-et!!!!!
*/