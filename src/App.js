import Home from './components/home/Home';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import PostPage from './components/PostPage';
import AuthorPage from './components/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:slug' element={<PostPage />} />
        <Route path='/authors/:slug' element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
