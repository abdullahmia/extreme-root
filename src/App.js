import {Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import SingleService from './pages/SingleService/SingleService'
import ScrollToTop from './ScrollToTop'
import Services from './pages/Services/Services'
import Ctf from './pages/Services/Ctf/Ctf'
import SecurityAudit from './pages/Services/SecurityAudit/SecurityAudit'
import InfosecConsultancy from './pages/Services/InfosecConsultancy/InfosecConsultancy'
import ApiPenTesting from './pages/Services/ApiPenTesting/ApiPenTesting'
import NetwrokPenTesting from './pages/Services/NetworkPenTesting/NetworkPenTesting'

import NotFound from './pages/NotFound/NotFound'
import SecureNetworkArchitectureDesignImplementationandAssurance from './pages/Services/SecureNetworkArchitectureDesignImplementationandAssurance/SecureNetworkArchitectureDesignImplementationandAssurance'
import SecurityOperationCenterImplementation from './pages/Services/SecurityOperationCenterImplementation/SecurityOperationCenterImplementation'
import InfoSecProjectManagement from './pages/Services/InfoSecProjectManagement/InfoSecProjectManagement'
import Vapt from './pages/Services/VAPT/Vapt'
import Iadfpt from './pages/Services/iadfpt/Iadfpt'
import Webmobilesecurity from './pages/Services/webmobilesecurity/Webmobilesecurity'
import Idir from './pages/Services/idir/Idir'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/service/:name' component={SingleService} />
        <Route exact path='/services' component={Services} />

        {/* Services Detail */}
        <Route path='/services/ctf' component={Ctf} />

        <Route path={'/services/secure-network-architecture-design-implementation-assurance'} component={SecureNetworkArchitectureDesignImplementationandAssurance} />
        
        <Route path={'/services/vapt'} component={Vapt} />
        
        <Route path={'/services/it-audit-digital-forensics-penetration-testing'} component={Iadfpt} />

        <Route path={'/services/web-mobile-security'} component={Webmobilesecurity} />

        <Route path={'/services/intrusion-detection-incident-response'} component={Idir} />

        <Route path={'/services/security-operation-center-implementation'} component={SecurityOperationCenterImplementation} />
        
        <Route path={'/services/infosec-project-management'} component={InfoSecProjectManagement} />
        
        <Route path='/services/security-audit' component={SecurityAudit} />
        
        <Route path='/services/infosec-consultancy' component={InfosecConsultancy} />
        
        <Route path='/services/api-pen-testing' component={ApiPenTesting} />
        
        <Route path='/services/network-pen-testing' component={NetwrokPenTesting} />
        
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
