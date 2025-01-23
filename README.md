https://redux-toolkit.js.org/introduction/getting-started

<h1> Данный проект создан в целях практики с технологией Redux Toolkit.  </h1>

В этом проекте:
<ul>
<li>Как инициализировать Redux Toolkit в приложение</li>
<li> Reducer + Immer (добавление/удаление в избранное) </li>
<li>Настройка store и combineReducers </li>
<li>  Хук useSelector</li>
<li>Хук useDispatch </li>
<li>Проверка на добавленный рецепт </li>
<li>Делаем удобный хук (useActions) </li>
<li> Вывод избранного из store</li>
<li>createAsyncThunk vs RTK Query </li>
<li>  Разбираем кейс с createAsyncThunk </li>
<li> Создаем свое простое API </li>
<li>RTK Query (api на получение рецептов) </li>
<li> useQuery </li>
<li>useMutation </li>
<li> Ревалидация данных</li>
<li> Condition в хуке</li>
<li>Middleware </li>
<li> Полная типизация REDUX</li>
</ul>

npm install @reduxjs/toolkit <br/>
npm install react-redux <br/>

<h3> CreateAsyncThunk:</h3> 
+Может использоваться для любых асинхронных операций <br/>
+Ручная обработка состояний загрузки, ошибки и успеха <br/>

<h3>RTK Query:</h3> 
+Автоматически генерирует экшены, редьюсеры и хуки <br/>
+Встроенные инструменты для кэширования и обновления данных <br/>
+Включает интеграцию с React <br/>

подключение json-server:  
npm i -global json-server
json-server db.json --port 4200 --watch