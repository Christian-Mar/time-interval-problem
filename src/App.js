import { useState } from 'react';
import './App.css';


function App() {
  const [time, setTime] = useState('');
  const [time2, setTime2] = useState('');



  return (
		<div className='App'>
			<h3>
				Here we're just testing to get the time now and converting it to a
				readable time from a timestamp
			</h3>
			<p> It's {time}</p>
			<p>
				{new Intl.DateTimeFormat('nl-BE', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				}).format(time)}
			</p>
			<button onClick={() => setTime(Date.now())}>
				Show me what time it is now (1)
			</button>
			<p> It's {time2}</p>
			<p>
				{new Intl.DateTimeFormat('nl-BE', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				}).format(time2)}
			</p>
			<button onClick={() => setTime2(Date.now())}>
				Show me what time it is now (2)
			</button>
			<h3>Can we count with timestamps? Yes, we can</h3>
			<p>The difference between timestamp 1 and 2 is: {time2 - time}</p>
      <h3>So, we need to be able to define an interval of time as a number of milliseconds that we can add to a given timestamp </h3>
      <p>1 min = 60 * 1000, 1 hour = 60 * 60 * 1000, 1 day = 24 * 60 * 60 * 1000, ...</p>
      <label>How long is the interval? <input type="number" placeholder='days'/></label>
		</div>
	);
}

export default App;
