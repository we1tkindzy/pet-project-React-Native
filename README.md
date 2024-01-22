# Пет-проект каталог пива Brewdog
Проект сделан для ознакомления с React Native(iOS) с использованием AsyncStorage, Axios и Jest

Что реализовано:
- Получение данных каталога с [PUNK API](https://punkapi.com/)
- Переключение темы
- Поиск по крепкости пива(abv)
- Пагинация

Доступные скрипты:
- `npm i` — установка зависимостей
- `cd ios && pod install && cd ..` - обновление зависимостей для ios
- `npm run ios` — запуск проекта с системой ios
- `npm run android` — запуск проекта с системой android
- `npm run start` — старт проекта с дальнейшим выбором запуска
- `npm run lint` — тестирование ESlint
- `npm run test` — запуск Jest-тестов

Что можно улучшить:
- Более обширный поиск с использованием всех имеющихся показателей
- Добавить неограниченную пагинацию
