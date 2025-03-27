var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

    // Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// Открываем модальное окно
openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex'; // Показываем модальное окно
});

// Закрываем модальное окно
closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Скрываем модальное окно
});

// Закрываем модальное окно при клике вне его области
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

async function fetchData() {
    const url = 'http://25.56.59.245:8080/bear'; // Ваш URL

    try {
        // Отправляем GET-запрос с помощью Axios
        const response = await axios.get(url);

        // Данные из ответа
        const data = response.data;

        // Сохраняем данные в localStorage
        localStorage.setItem('serverData', JSON.stringify(data));

        // Выводим сообщение на страницу
        document.getElementById('output').textContent = 'Данные успешно сохранены в localStorage!';
        console.log('Данные с сервера:', data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('output').textContent = 'Ошибка при получении данных.';
    }
}

// Назначаем обработчик на кнопку
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);