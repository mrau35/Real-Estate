import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() { 
   return<BrowserRouter>
      <Routes>
         <Route path="/" element = {<Home />} />
         <Route path="/sign-in" element = {<Signin />} />
         <Route path="/sign-up" element = {<SignUp />} />
         <Route path="/profile" element = {<Profile />} />
         <Route path="/about" element = {<About />} />
      </Routes>
   </BrowserRouter>
}