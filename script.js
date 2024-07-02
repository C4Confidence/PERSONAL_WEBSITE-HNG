document.addEventListener("DOMContentLoaded", () => {
    function updateTimeAndDay() {
        const now = new Date();
        const options = { weekday: 'long' };
        const day = new Intl.DateTimeFormat('en-US', options).format(now);
        const timeUTC = now.toUTCString().slice(-12, -4);

        document.getElementById('currentDay').textContent = day;
        document.getElementById('currentTimeUTC').textContent = timeUTC;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
