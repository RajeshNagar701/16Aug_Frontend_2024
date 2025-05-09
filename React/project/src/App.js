import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/website/Index";
import Header from "./pages/website/component/Header";
import Footer from "./pages/website/component/Footer";
import Basic_header from "./pages/website/component/Basic_header";
import About from "./pages/website/About";
import Contact from "./pages/website/Contact";
import Doctor from "./pages/website/Doctor";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/> <Index/> <Footer/> </>  }></Route>
          <Route path="/about" element={<><Basic_header/> <About/> <Footer/> </>  }></Route>
          <Route path="/contact" element={<><Basic_header/> <Contact/> <Footer/> </>  }></Route>
          <Route path="/doctor" element={<><Basic_header/> <Doctor/> <Footer/> </>  }></Route>
          <Route path="*" element={<><Basic_header/> <Index/> <Footer/> </>  }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
