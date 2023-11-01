
import {SiteProvider,AuthProvider} from './context';
import Home from './components/Home';


function App() {
 return(
  <SiteProvider>
    <AuthProvider>
      <Home/>
    </AuthProvider>
  </SiteProvider>
 )

}

export default App;
