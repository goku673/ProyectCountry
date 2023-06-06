


import {Routes, Route} from 'react-router-dom';
import  Home from  './components/Home/Home';
import FormActivity from './components/Form/Form';
import Landing from './components/Landing Page/Landing';
import Detail from './components/Detail/Detail';
function App() {
        
  return (
    <>
           
               <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route path='/home' element={<Home/>}/>
                        
                        <Route path='/createActivity' element={<FormActivity/>}/>
                        <Route path='/detail/:id' element={<Detail/>}/>
               </Routes>
    </>
  );
}

export default App;


