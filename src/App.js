import './App.css';
/* antd style */
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import { AuthComponent } from './components/AuthComponent';

function App() {
  return (
    // router
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/login" element={<Login />} />
          {/** Layout要进行鉴权处理，要根据是否登录进行判断 */}
          <Route path="/" element={
            <AuthComponent>
              <Layout />
            </AuthComponent>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
