import { useEffect, useState } from 'react';
import './DateAndTime.scss';
import dayjs from 'dayjs';
import { FaRegClock } from 'react-icons/fa';
import { io, Socket } from 'socket.io-client';

const DateAndTime: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  const month: string = dayjs().format('D MMM, YYYY');
  const weekday: string = dayjs().format('dddd');

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    const socket: Socket = io('http://your-server-url');
    socket.on('activeSessions', (count: number) => {
      setActiveSessions(count);
    });

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);

  return (
    <div className="data-container">
      <div>
        <div className="data-title">Сьогодні</div>
        <p className="data-weekday">{weekday}</p>
        <span className="data-month">{month}</span>
      </div>
      <div className="data-clock">
        <span className="data-clock_icon">
          <FaRegClock />
        </span>
        <span>{time.toLocaleTimeString()}</span>
      </div>
      <div className="active-sessions">Активні сесії: {activeSessions}</div>{' '}
    </div>
  );
};

export default DateAndTime;
