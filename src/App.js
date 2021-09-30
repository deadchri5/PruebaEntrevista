import './App.css'
//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import TaskInterface from './components/TaskInterface/TaskInterface';

//Comentario desde rama dev

function App() {
  return (
    <div className="App">
      <Navbar />
        <section className="center">
          <TaskInterface/>
        </section>
      <Footer />
    </div>
  );
}

export default App;
