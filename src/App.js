import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from './Components/Dashboard';
import { RedirectIfUserLoggedIN } from './Components/RedirectIfUserLoggedIn';
import { Case_list } from './Components/Case_list';
import { Contact } from './Components/Contact';
import { Detectives } from './Components/Detectives';
import { About } from './Components/About';
import { PrivateRouter } from './Components/PrivateRoute';
import { UserRegistration } from './Components/UserRegistration';
import { MainPanel } from './Components/MainPanel';
import { AdminLogin } from './Components/AdminLogin';
import { AdminPanel } from './Components/AdminPanal';
import { RedirectAdminIfLoggedIn } from './Components/RedirectAdminIfLoggedIn';
import { PrivateAdminRouter } from './Components/PrivateAdminRouter';
import { Admin_Case_List } from './Components/Admin_Case_list';
import { Admin_Detective_List } from './Components/Admin_Detective_List';
import { Admin_Add_Detectives } from './Components/Admin_Add_Detectives';
import { Admin_Add_Case } from './Components/Admin_Add_Case';
import { Admin_Edit_Case } from './Components/Admin_Edit_Case';
import { Admin_Edit_Detective } from './Components/Admin_Edit_Detective';


function App() {
  return (     
    <BrowserRouter>     
      <Routes>       
                
        <Route path='/' element={<RedirectIfUserLoggedIN><MainPanel/></RedirectIfUserLoggedIN>}></Route>    
        <Route path='/user-registration' element={<UserRegistration/>}></Route>

        <Route path='/admin' element={<RedirectAdminIfLoggedIn><AdminLogin/></RedirectAdminIfLoggedIn>}></Route>
        <Route path='/admin-panel' element={<PrivateAdminRouter><AdminPanel/></PrivateAdminRouter>}></Route>
        <Route path='/admin/case-list' element={<PrivateAdminRouter><Admin_Case_List/></PrivateAdminRouter>}></Route>
        <Route path='/admin/edit-case/:id' element={<PrivateAdminRouter><Admin_Edit_Case/></PrivateAdminRouter>}></Route>
        <Route path='/admin/edit-detective/:id' element={<PrivateAdminRouter><Admin_Edit_Detective/></PrivateAdminRouter>}></Route>
        <Route path='/admin/detectivelist' element={<PrivateAdminRouter><Admin_Detective_List/></PrivateAdminRouter>}></Route>
        <Route path='/admin/add-case' element={<PrivateAdminRouter><Admin_Add_Case/></PrivateAdminRouter>}></Route>
        <Route path='/admin/add-detectives' element={<PrivateAdminRouter><Admin_Add_Detectives/></PrivateAdminRouter>}></Route>

        <Route path='/dashboard' element={<PrivateRouter><Dashboard/></PrivateRouter>}></Route>
        <Route path='/case_list' element={<PrivateRouter><Case_list/></PrivateRouter>}></Route>
        <Route path='/detective' element={<PrivateRouter><Detectives/></PrivateRouter>}></Route>
        <Route path='/contact' element={<PrivateRouter><Contact/></PrivateRouter>}></Route>
        <Route path='/about' element={<PrivateRouter><About/></PrivateRouter>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
