import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import { Blog } from './components/Blog';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './routes/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
        <main>
          <Route path='/' component={HomePage}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
