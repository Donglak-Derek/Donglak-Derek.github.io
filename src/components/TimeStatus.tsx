'use client';

import { useEffect, useState } from 'react';

export default function TimeStatus() {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('NORTH TEXAS, US'); // Default fallback
  
  useEffect(() => {
    // Mechanism: The "Heartbeat" of the site
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const millis = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds}:${millis}`);
    };

    const timer = setInterval(updateTime, 50);
    updateTime();

    // Fetch User's Location
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city && data.country_code) {
          setLocation(`${data.city.toUpperCase()}, ${data.country_code}`);
        }
      })
      .catch((err) => {
        console.warn('Location fetch failed, using default:', err);
        // Fallback remains "NORTH TEXAS, US"
      });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-mono tracking-widest uppercase text-neutral-500 mix-blend-difference">
      {/* Location Anchoring */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>{location}</span>
      </div>

      {/* The Time Mechanism */}
      <div className="w-[120px] text-center">
        {time || "00:00:00:00"}
      </div>

      {/* Weather/Availability (Interaction context) */}
      <div className="hidden md:block">
        OPEN FOR WORK
      </div>
    </div>
  );
}
