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
import NetworkDeviceConfReview from './pages/Services/NetWorkDeviceConfReview/NertworkDeviceConfReview'
import InfosecConsultancy from './pages/Services/InfosecConsultancy/InfosecConsultancy'
import ApiPenTesting from './pages/Services/ApiPenTesting/ApiPenTesting'
import NetwrokPenTesting from './pages/Services/NetworkPenTesting/NetworkPenTesting'
import ApplicationPenTesting from './pages/Services/ApplicationPenTesting/ApplicationPenTesting'

import NotFound from './pages/NotFound/NotFound'

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
        <Route path='/services/security-audit' component={SecurityAudit} />
        <Route path='/services/network-device-configuration-review' component={NetworkDeviceConfReview} />
        <Route path='/services/infosec-consultancy' component={InfosecConsultancy} />
        <Route path='/services/api-pen-testing' component={ApiPenTesting} />
        <Route path='/services/network-pen-testing' component={NetwrokPenTesting} />
        <Route path='/services/application-pen-testing' component={ApplicationPenTesting} />
        

        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </div>
  )
}

export default App
