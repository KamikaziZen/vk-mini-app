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

  const joinGroup = (group_id) => {
    connect
    .send("VKWebAppJoinGroup", {"group_id": group_id});
  }

  const getToken = () => {
    connect
      .sendPromise("VKWebAppGetAuthToken", {"app_id": 7149958, 
                                            "scope": "friends,groups"})
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
        'coords': [55.766059, 49.304057],
        'name': 'Помочь зооботсаду',
        'start': '2019-10-05 09:00',
        'end': '2019-10-05 13:00',
        'aim': 'Содействие в поддержании благополучия экспонируемых животных',
        'description': 'Необходима помощь во время сезонных работ, помощь посетителям в ориентировании на территории, консультирование',
        'requirements': ['Хорошо знать территорию зооботсада', 'Готовность выполнять любую из перечисленных задач'],
        'type': 'Zoo',
        'reward': 'Бесплатное посещение экскурсий, а также памятные сувениры',
        'photo': 'botsad.svg',
        'group_id': '187013907'
      }
    ]);

  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id='home' location={location} fetchedUser={fetchedUser} token={token}/>
    </View>
  );
}

export default App;
