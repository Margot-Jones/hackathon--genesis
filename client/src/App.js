import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import { Blog } from './components/Blog';
import { BrowserRouter, Route } from 'react-router-dom';
import { CommentPage, COMMENTSEXAMPLE } from './components/Comments/CommentPage';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
      <Blog />
      {/* <CommentPage {...COMMENTSEXAMPLE} /> */}
        <main>
          <Route path = '/profile/' 
            render={ () => <Profile /> 
            }
          />
          {/* <Route path = '/blog' 
            render={ () => <Blog />
            }
          /> */}
          <Route path = '/login' 
            render={ () => <Login />
          }
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
