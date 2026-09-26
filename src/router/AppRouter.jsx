import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import NotFound from "../components/NotFound/NotFound"


function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter