
import { Route, Routes } from "react-router-dom";
import Loadingpage from './loadpagetodoapp/Loadingpage';
import Application from './app/Application';
import Document from './document/Document';
import Setting from './setting/Setting';
import Categorypage from './category/Category';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Loadingpage/>} />
        <Route path="/setting" exact element={<Setting/>} />
        <Route path="/app" exact element={<Application/>} />
        <Route path="/document" exact element={<Document />} />
        <Route path="/category" exact element={<Categorypage />} />
      </Routes>
    </div>
  );
}

export default App;
