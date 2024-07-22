import { Header } from "@components/Header/Header";
import { AppBar } from "@components/AppBar/AppBar";
import { StoriesList } from "@components/StoriesList/StoriesList";
import { Catalog } from "@components/Catalog/Catalog";

export function MainPage() {
   return (
      <>
         <Header />
         <AppBar />
         <StoriesList />
         <Catalog />
      </>
   );
}
