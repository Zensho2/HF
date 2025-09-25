import { Routes, Route, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from '@/routes/Home'
import WhoWeAre from '@/routes/WhoWeAre'
import OurServices from '@/routes/OurServices'
import OurWork from '@/routes/OurWork'
import Contact from '@/routes/Contact'
import NotFound from '@/routes/NotFound'
import Page from '@/components/layout/Page'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import useScrollToTop from '@/hooks/useScrollToTop'

export default function App() {
  useScrollToTop()

  return (
    <>
      <Helmet>
        <title>HF • Site web</title>
        <meta name="description" content="Site web de HF" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Page title="Accueil"><Home /></Page>} />
        <Route path="/who-we-are" element={<Page title="Qui sommes-nous"><WhoWeAre /></Page>} />
        <Route path="/our-services" element={<Page title="Nos services"><OurServices /></Page>} />
        <Route path="/our-work" element={<Page title="Nos réalisations"><OurWork /></Page>} />
        <Route path="/contact" element={<Page title="Contact"><Contact /></Page>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}



