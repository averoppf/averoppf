import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        {/* <title>Avero | Quality PPF & Ceramic Coating in Sydney</title> */}
        <link rel='canonical' href={ "https://www.averoppf.com.au" } />
        <meta name="description" content={"Protect your car with Sydney’s car care experts in PPF & ceramic coating. Get unbeatable shine, increased vehicle value & long-lasting protection. Trusted by locals across NSW."} />
      </Helmet>
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
