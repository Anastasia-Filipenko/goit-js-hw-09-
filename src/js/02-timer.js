import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
     datePicker: document.querySelector('#datetime-picker'),
     startBtn: document.querySelector('[data-start]'),
     days: document.querySelector('[data-days]'),
     hours: document.querySelector('[data-hours]'),
     minutes: document.querySelector('[data-minutes]'),
     seconds: document.querySelector('[data-seconds]'),
};




let selectedTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        if (selectedDates[0].getTime() <= Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.startBtn.disabled = true;
            return;
        }
        refs.startBtn.disabled = false;
        selectedTime = selectedDates[0].getTime();
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.datePicker, options);



const timer = {
    start() {
        refs.startBtn.disabled = true;

        timerId = setInterval(() => {
            const currentTime = Date.now();
            const { days, hours, minutes, seconds } = convertMs(selectedTime - currentTime
            );

            refs.days.textContent = days;
            refs.hours.textContent = hours;
            refs.minutes.textContent = minutes;
            refs.seconds.textContent = seconds;
        }, 1000)
    }
};

refs.startBtn.addEventListener('click', timer.start);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
