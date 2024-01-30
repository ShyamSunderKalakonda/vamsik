import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './Components/Home/header';
import AppBanner from './Components/Home/banner';
import AppWedo from './Components/Home/wedo';
import AppWeserve from './Components/Home/weserve';
import AppSave from './Components/Home/savetime';
import AppMobile from './Components/Home/mobile';
import AppClients from './Components/Home/clients';
import AppTestimonials from './Components/Home/testimonials';
import AppNewsletter from './Components/Home/newsletter';
import AppFooter from './Components/Home/footer';

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <AppBanner />
        <AppWedo />
        <AppWeserve />
        <AppSave />
        <AppMobile />
        <AppClients />
        <AppTestimonials />
        <AppNewsletter />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
