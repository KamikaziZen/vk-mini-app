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
      .sendPromise("VKWebAppGetAuthToken", {"app_id": 7149958, 
                                            "scope": "friends"})
      .then((type, data)=> {
        console.log(type, data)
        if (type == "VKWebAppAccessTokenReceived") {
          setToken(data.access_token)
          console.log('fetched token', token)
        } else {
          console.log('could not fetch token :(')
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
        'coords': [55.6105863, 49.2864581],
        'name': 'Мероприятие 1',
        'description': 'Уехать в Москву'
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
