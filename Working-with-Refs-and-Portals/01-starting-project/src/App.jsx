import Player from './components/Player.jsx';
import TimerChallenges from "./components/TimerChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenges title='Easy' targetTime={1} />
          <TimerChallenges title="Not Easy" targetTime={5} />
          <TimerChallenges title="Getting Tough" targetTime={10} />
          <TimerChallenges title= "Pros Onluy" targetTime={15} />
      </div>
    </>
  );
}

export default App;
