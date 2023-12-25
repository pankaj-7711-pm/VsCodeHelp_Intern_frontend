import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import { Toaster } from "react-hot-toast";
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/bookingpage' element={<BookingPage/>} />
      </Routes>
    </>
  );
}

export default App;
