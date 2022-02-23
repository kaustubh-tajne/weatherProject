const submitBtn =document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp1 = document.getElementById('temp1');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.data_hide');

const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == '') {
        city_name.innerText = 'Pleaze write the name before you search';
        data_hide.classList.add('data_hide');
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7589bbb10f3a5e3dd98573668537b224`;
            const respons = await fetch(url);
            const data = await respons.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp1.innerText = parseFloat(arrData[0].main.temp).toFixed(2);
            const tempMood = arrData[0].weather[0].main;

            

            if (tempMood == 'Clear') {
                temp_status.innerHTML = `<i class='fas fa-sun style='color: #eccc68;'></i>`;
            }
            else if (tempMood == 'Clouds') {
                temp_status.innerHTML = `<i class='fas fa-cloud style='color: #f1f2f6;'></i>`;
            }
            else if (tempMood == 'Rain') {
                temp_status.innerHTML = `<i class='fas fa-rain style='color: #a4b0be;'></i>`;
            }
            else {
                temp_status.innerHTML = `<i class='fas fa-sun style='color: #f1f2f6;'></i>`;
            }
            data_hide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Pleaze enter the city name properly';
            data_hide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);


const getDateAll = () => {
    const arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let date = new Date;
    let days = date.getDay();
    let month = date.getMonth();
    let dat = date.getDate();

    let day = document.getElementById('day');
    day.innerText = arr[days];

    let monthIns = document.getElementById('today_date');
    monthIns.innerText = `${dat} ${arrMonth[month]}`;
}

getDateAll();