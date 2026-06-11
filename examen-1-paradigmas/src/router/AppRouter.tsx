import { Route, Routes } from "react-router";
import { Navbar } from "../presentation/components/layout/Navbar";
import { CatalogPage } from "../presentation/pages/catalog/CatalogPage";
import { HomePage } from "../presentation/pages/home/HomePage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
    </>
  );
};