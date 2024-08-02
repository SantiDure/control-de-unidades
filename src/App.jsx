import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import './App.css'
import Home from "./pages/home/Home";

function App() {
 return  <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
 </>
}

export default App
