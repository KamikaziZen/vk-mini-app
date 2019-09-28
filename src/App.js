import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [location, setLocation] = useState({lat:55.798, lon:49.106});
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
  const [events, setEvents] = useState([]);
  
  const fetchLocation = () => {
    connect
      .sendPromise('VKWebAppGetGeodata')
      .then(data => {
        setLocation({lat:data.lat, lon:data.lon})
        console.log('location', location)
      })
      .catch(error => {
        console.log('error', error)
      });
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
      <Home id='home' location={location} fetchedUser={fetchedUser}/>
    </View>
  );
}

export default App;
