import { useState } from 'react';
import './App.css';


function App() {
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [interval, setInterval] = useState('');
  const [startTime, setStartTime] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInterval(Number(days)*24*3600*1000+Number(hours)*3600*1000+Number(minuts)*60*1000+seconds*1000+Number(milliseconds))
    console.log(interval)};
  return (
		<div className='App'>
			<h1>
				Can we set an event in time that recurs regularly according to a certain
				interval? Can we position ourselves (in time) with those events as
				reference?
			</h1>

			<div className='idea'>
				<h2>... the idea, step by step ...</h2>
				<h3>
					Here we're just testing to get the time now and converting it to a
					readable time from a timestamp (1)
				</h3>
				<p> It's {time1} (time as a timestamp)</p>
				<p>
					{new Intl.DateTimeFormat('nl-BE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
					}).format(time1)}{' '}
					(readable time)
				</p>
				<button onClick={() => setTime1(Date.now())}>
					Show me what time it is now (1)
				</button>
				<p> It's {time2} (time as a timestamp)</p>
				<p>
					{new Intl.DateTimeFormat('nl-BE', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
					}).format(time2)}{' '}
					(readable time)
				</p>
				<button onClick={() => setTime2(Date.now())}>
					Show me what time it is now (2)
				</button>
				<h3>Can we count with timestamps? Yes, we can (2)</h3>
				<p>
					The difference between timestamp 1 and 2 is: {time2 - time1}
					milliseconds
				</p>
				<h3>
					Now, let's define an interval of time as an amount of milliseconds
					that we can add to a given timestamp to get a new time, starting form
					days, hours, minuts, seconds & milliseconds (3)
				</h3>
				<form onSubmit={handleSubmit}>
					<label>
						days:
						<input
							type='number'
							placeholder='days'
							onChange={e => setDays(e.target.value)}
							value={days}
						/>
					</label>
					<label>
						hours:
						<input
							type='number'
							placeholder='hours'
							onChange={e => setHours(e.target.value)}
							value={hours}
						/>
					</label>
					<label>
						minuts:
						<input
							type='number'
							placeholder='minuts'
							onChange={e => setMinuts(e.target.value)}
							value={minuts}
						/>
					</label>
					<label>
						seconds:
						<input
							type='number'
							placeholder='seconds'
							onChange={e => setSeconds(e.target.value)}
							value={seconds}
						/>
					</label>
					<label>
						milliseconds:
						<input
							type='number'
							placeholder='milliseconds'
							onChange={e => setMilliseconds(e.target.value)}
							value={milliseconds}
						/>
					</label>

					<button type='submit'>Submit</button>
				</form>
				<p>In this case our given interval counts: {interval} milliseconds</p>
				<h3>We add the interval (above) to a given date and time (4)</h3>
        <label>Choose that given date & time:
          <input type="datetime-local"
            onChange={e => setStartTime(e.target.value)} 
           value={startTime} className='givenTime'/>
        </label>
          <p>Timestamp of the new date (given date + interval): {(new Date(startTime)).getTime() + interval}</p> //useState van maken
          <p></p>
			</div>
		</div>
	);
}

export default App;
