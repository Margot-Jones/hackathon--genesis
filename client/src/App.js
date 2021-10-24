import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { CommentsPage } from './routes/CommentsPage';
import { HomePage } from './routes/HomePage';
import { ProfilePage } from './routes/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper' style={{ fontFamily: "Rosarivo" }}>
      <Header />
      {/* <CommentPage {...COMMENTSEXAMPLE} /> */}
        <main>
          <Route path = '/profile/' component={ProfilePage}
          />
          <Route path = '/comment/:postId' component={CommentsPage}
          />
          <Route path='/' component={HomePage} exact/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
