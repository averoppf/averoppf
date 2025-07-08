import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import { PageLayout } from './components/layout/layout'
import { ContactPage } from './pages/contact'
import { CeramicPage } from './pages/services/ceramic'
import { PpfPage } from './pages/services/ppf'
import { PrivacyPolicyPage } from './pages/privacyPolicy'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
        <Route path="/services/ceramic" element={<PageLayout><CeramicPage /></PageLayout>} />
        <Route path="/services/ppf" element={<PageLayout><PpfPage /></PageLayout>} />
        <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
