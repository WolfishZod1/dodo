import { ThemeProvider } from "@providers/ThemeProvider";
import { MainPage } from "@pages/MainPage/MainPage";
import "swiper/css";

function App() {
   return (
      <ThemeProvider>
         <MainPage />
      </ThemeProvider>
   );
}

export default App;
