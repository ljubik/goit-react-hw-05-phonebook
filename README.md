# goit-react-hw-06-phonebook

**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерії прийому

- Створено репозиторій `goit-react-hw-06-phonebook`
- При здачі домашньої роботи є посилання: на вихідні файли і робочу сторінку
  проекту на `GitHub Pages` або `Netlify`
- У Redux-стані зберігається мінімально необхідний набір даних
- При запуску коду завдання, в консолі немає помилок і попереджень
- Для кожного компонента є окрема папка з файлом React-компонента і файлом
  стилів
- Для компонентів описані `propTypes`, і де необхідно,`defaultProps`

## Телефонна книга

Візьми своє рішення завдання з
[домашньої роботи 5](../../homework-05/phonebook/) і виконай рефакторинг,
додавши управління станом за допомогою бібліотеки
[Redux](https://redux.js.org/), таким чином відокремивши логіку від компонентів.

Нехай Redux-стейт виглядає наступним чином.

```shell
{
  contacts: [],
  filter: ''
}
```

### Крок 1

Використовуй тільки можливості бібліотеки Redux (без redux-toolkit).

- Створи сховище і додай
  [інструменти розробника](http://extension.remotedev.io/)
- Створи діїя (actions) збереження і видалення контакту, а також поновлення
  фільтра
- Винеси типи дій в окремий файл констант
- Створи редюсери контактів і фільтра
- Додай контейнери для компонентів, які підписуються на стан

### Крок 2

Виконай рефакторинг коду і скороти Redux-бойлерплейт використовуючи бібліотеку
[Redux Tookit](https://redux-toolkit.js.org/).
