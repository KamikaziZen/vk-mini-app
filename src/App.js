import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [location, setLocation] = useState([55.798, 49.106]);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
  const [events, setEvents] = useState([]);
  const [token, setToken] = useState('');
  
  const fetchLocation = () => {
    console.log(location)
    connect
      .sendPromise('VKWebAppGetGeodata')
      .then(data => {
        if (data.available == 1) {
          console.log('accessed user location!')
          setLocation([data.lat, data.long])
        }
        console.log('location', location)
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  const getToken = () => {
    connect
      .sendPromise("VKWebAppGetAuthToken",
        {
          "app_id": 7149958,
          "scope": "friends,groups"
        }
      )
      .then(data=> {
        console.log(data)
        if ("error_data" in data) {
          console.log('could not fetch token :(')
        } else {
          setToken(data.access_token)
          console.log('fetched token', token)
        }
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  useEffect(() => {
    connect.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    setPopout(null);
    async function fetchData() {
      const user = await connect.sendPromise('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
    fetchLocation();
    getToken();

    setEvents([
      {
        'coords': [55.766059, 49.1308083],
        'title': 'Помочь зооботсаду',
        'organizer': 'Казанский зооботанический сад',
        'start': '2019-10-05 09:00',
        'end': '2019-10-05 13:00',
        'aim': 'Содействие в поддержании благополучия экспонируемых животных',
        'description': 'Необходима помощь во время сезонных работ, помощь посетителям в ориентировании на территории, консультирование',
        'requirements': ['Хорошо знать территорию зооботсада', 'Готовность выполнять любую из перечисленных задач'],
        'icon_type': 'islands#blueZooIcon',
        'reward': 'Бесплатное посещение экскурсий, а также памятные сувениры',
        'photo': 'botsad.svg',
        'group_id': '187013907',
        'count_cur': 34,
        'count_end': 50
      },
      {
        'coords': [55.821002, 49.1586594],
        'title': 'Помочь с техникой',
        'organizer': 'Казань Арена',
        'start': '2019-10-06 10:00',
        'end': '2019-10-06 16:00',
        'aim': 'Успешное проведение спортивного мероприятия',
        'description': 'Необходима помощь волонтеров в организации обеспечения коммуникаций и телерадиовещания',
        'requirements': ['Возраст от 18 лет', 'Опыт волонтерской работы на спортивных мероприятиях'],
        'icon_type': 'islands#blueRunIcon',
        'reward': 'Бесплатное посещение матча',
        'photo': 'kazan-arena.svg',
        'group_id': '187023316',
        'count_cur': 27,
        'count_end': 100
      },
      {
        'coords': [55.6122512, 49.2959574],
        'title': 'Прибрать за собой',
        'organizer': 'Цифровой Прорыв',
        'start': '2019-09-29 16:00',
        'end': '2019-09-29 21:00',
        'aim': 'Помочь и отбрагодарить организаторов хакатона',
        'description': 'Требуется провести уборку на своем рабочем месте после завершения хакатона',
        'requirements': ['Умение работать в команде'],
        'icon_type': 'islands#blueStarIcon',
        'reward': 'Благодарность',
        'photo': 'cp.svg',
        'group_id': 'None',
        'count_cur': 3250,
        'count_end': 3300
      },
      {
        'coords': [55.7895988, 49.1014364],
        'title': 'Отпраздновать победу',
        'organizer': 'Фонд побед',
        'start': '2019-09-29 21:00',
        'end': '2019-09-29 23:00',
        'aim': 'Весело провести время',
        'description': 'Необходимо отдохнуть и поздравить победителей',
        'requirements': ['Умение работать в команде'],
        'icon_type': 'islands#blueFoodIcon',
        'reward': 'Вы перестанете чувствовать усталость',
        'photo': 'bar.svg',
        'group_id': 'None',
        'count_cur': 3,
        'count_end': 100
      }
    ]);

  }, []);

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id='home' 
            location={location} 
            fetchedUser={fetchedUser} 
            events={events}
            token={token}/>
    </View>
  );
}

export default App;
