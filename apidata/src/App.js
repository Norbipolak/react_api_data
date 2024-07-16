import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faTrashCan, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
library.add(
    faCircleXmark, faUpRightFromSquare, faTrashCan
)
import ProductsP from './components/ProductsP';
import Nav from './components/Nav';
import Contact from './components/Contact';
import CreateProductForm from './components/CreateProductForm';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<ProductsP/>}/>
                    <Route path="/create-product" 
                    element={<CreateProductForm endpoint={"https://dummyjson.com/products/add"} method="POST"/>}/>
                    <Route path="/update-product/:id" 
                    element={<CreateProductForm endpoint={"https://dummyjson.com/products"} method={"PUT"}/>}/>
                    <Route path="contact" element={<Contact/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
