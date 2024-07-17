import { ThemeProvider } from "@providers/ThemeProvider";
import { MainPage } from "@pages/MainPage/MainPage";

function App() {
   return (
      <ThemeProvider>
         <MainPage />
      </ThemeProvider>
   );
}

export default App;
