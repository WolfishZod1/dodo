import { ThemeProvider } from "@providers/ThemeProvider";
import { MainPage } from "@pages/MainPage/MainPage";
import "swiper/css";
import { Provider } from "react-redux";
import { store } from "@slices/store";

function App() {
   return (
      <Provider store={store}>
         <ThemeProvider>
            <MainPage />
         </ThemeProvider>
      </Provider>
   );
}

export default App;
