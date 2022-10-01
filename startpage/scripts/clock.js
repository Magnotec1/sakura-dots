
(function clock() {
    const windowClock = document.getElementById("window-clock");
    const windowDate = document.getElementById("window-date");
  
    const date = new Date();
  
    const weekDay = date.toLocaleString("en-US", { weekday: "long" });
  
    const fullDate = date
      .toLocaleString("en-US", {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      })
      .replace(",", "") // Remove "," from "(month) (day), (year)"
      .split(" "); // Split to array [month, day, year]
  
    const time = date
      .toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        ampm: "long",
      })
      .split(" ") // Parse "(hours):(minutes):(seconds) AM(PM)" to array [(hours):(minutes):(seconds), AM(PM)]
  
    windowClock.innerHTML = `
      <span id="hours">${time[0]}</span> ${time[1]}
    `;
    windowDate.innerHTML = `
      <span id="date">${weekDay}</span>
    `;
  
    setTimeout(clock, 500);
  })();
clock()