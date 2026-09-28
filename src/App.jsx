import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import AboutPage from "./pages/AboutPage"
import ContractorsPage from "./pages/ContractorsPage"
import GalleryPage from "./pages/GalleryPage"
import GetInvolvedPage from "./pages/GetInvolvedPage"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contractors" element={<ContractorsPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="contact" element={<Navigate to="/get-involved" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
