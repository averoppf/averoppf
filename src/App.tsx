import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import { PageLayout } from './components/layout/layout'
import { ContactPage } from './pages/contact'
import { CeramicPage } from './pages/services/ceramic'
import { PpfPage } from './pages/services/ppf'
import { PrivacyPolicyPage } from './pages/privacyPolicy'
import { AreaServed } from './pages/AreaServed'
import { ColourWrapsPage } from './pages/services/colourWraps'
import { WindowTintingPage } from './pages/services/windowTinting'
import ProjectsPage from './pages/projects'
import TeslaPPFPage from './pages/tesla/tesla-ppf'
import ArticlesPage from './pages/articles'
import WhatIsPPFArticle from './pages/articles/what-is-ppf'
import PPFvsCeramicArticle from './pages/articles/ppf-vs-ceramic-coating'
import PPFCostSydneyArticle from './pages/articles/ppf-cost-sydney'
import PPFCareArticle from './pages/articles/ppf-care-guide'
import IsPPFWorthItArticle from './pages/articles/is-ppf-worth-it'
import SelfHealingPPFArticle from './pages/articles/self-healing-ppf'
import NewCarPPFArticle from './pages/articles/new-car-ppf'
import PPFMythsArticle from './pages/articles/ppf-myths-debunked'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
        <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
        <Route path="/services/ceramic" element={<PageLayout><CeramicPage /></PageLayout>} />
        <Route path="/services/ppf" element={<PageLayout><PpfPage /></PageLayout>} />
        <Route path="/services/colour-wraps" element={<PageLayout><ColourWrapsPage /></PageLayout>} />
        <Route path="/services/window-tinting" element={<PageLayout><WindowTintingPage /></PageLayout>} />
        <Route path="/tesla-ppf" element={<PageLayout><TeslaPPFPage /></PageLayout>} />
        <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
        <Route path="/articles" element={<PageLayout><ArticlesPage /></PageLayout>} />
        <Route path="/articles/what-is-ppf" element={<PageLayout><WhatIsPPFArticle /></PageLayout>} />
        <Route path="/articles/ppf-vs-ceramic-coating" element={<PageLayout><PPFvsCeramicArticle /></PageLayout>} />
        <Route path="/articles/ppf-cost-sydney" element={<PageLayout><PPFCostSydneyArticle /></PageLayout>} />
        <Route path="/articles/ppf-care-guide" element={<PageLayout><PPFCareArticle /></PageLayout>} />
        <Route path="/articles/is-ppf-worth-it" element={<PageLayout><IsPPFWorthItArticle /></PageLayout>} />
        <Route path="/articles/self-healing-ppf" element={<PageLayout><SelfHealingPPFArticle /></PageLayout>} />
        <Route path="/articles/new-car-ppf" element={<PageLayout><NewCarPPFArticle /></PageLayout>} />
        <Route path="/articles/ppf-myths-debunked" element={<PageLayout><PPFMythsArticle /></PageLayout>} />
        <Route path="*" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/services/:area" element={<PageLayout><AreaServed /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
