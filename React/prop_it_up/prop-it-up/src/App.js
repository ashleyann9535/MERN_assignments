import PersonalCard from './components/PersonalCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonalCard name={'Sekulic, Ashley'} age={26} hair={'black'} />
      <PersonalCard name={'Johnson, Rade'} age={31} hair={'red'} />
      <PersonalCard name={'McPeek, Kristen'} age={28} hair={'brown'} />
      <PersonalCard name={'Bill, Mat'} age={30} hair={'brown'} />
    </div>
  );
}

export default App;
