// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Arindam" appName="TextUtils" />
      {/* <Navbar appName="TextUtils" /> */}
      <TextForm Heading="Enter Your Text Here"/>
    </>
  );
}

export default App;
