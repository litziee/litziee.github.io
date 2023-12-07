const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

const form = document.querySelector('form');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', (event) => {
    event.preventDefault(); // предотвращаем отправку формы по умолчанию

    // Проверяем все обязательные поля на заполненность
    if (form.checkValidity()) {
      toastBootstrap.show();
    } else {
      form.reportValidity(); // отображаем стандартные браузерные сообщения об ошибках
    }
  });
}
