(async function(){
    const el = document.getElementById('weather');
    if (!el) return;
    try{
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=36.1699&longitude=-115.1398&current=temperature_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto');
    const d = await res.json();
    const now = Math.round(d.current.temperature_2m);
    const hi = Math.round(d.daily.temperature_2m_max[0]);
    const lo = Math.round(d.daily.temperature_2m_min[0]);
    el.textContent = `Now ${now}°C · High ${hi}°C / Low ${lo}°C`;
    }catch(e){
    el.textContent = 'Weather unavailable.';
    }
    })();