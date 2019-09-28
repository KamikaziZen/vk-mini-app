import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';

import {
  YMaps,
  Map,
  Placemark
} from 'react-yandex-maps';

import Modal from './Modal';

import './Home.css';

const Home = ({ id, location, fetchedUser, events }) => {

  const [message, setMessage] = useState('ты ничего не нажал');

  const joinGroup = (group_id) => {
    connect
      .sendPromise("VKWebAppJoinGroup", {"group_id": group_id})
      .then(data => {
        console.log('data', data)
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  const handleEventClick = (id, name, group_id) => {
    setMessage('Вы записались на событие ' + name, '19:40')
    joinGroup(group_id)
  }

  const listEvents = events.map((e) =>
    <Placemark
      key={'event-' + e.id}
      geometry={e.coords}
      onClick={() => handleEventClick(e.id, e.name, e.group_id)}
    />
  );

  return (
    <div id={id} className="main">
      <YMaps>
        <Map className="map"
          defaultState={
            {center: [
              parseFloat(location[0]),
              parseFloat(location[1])
            ],
            zoom: 9}
          }
        >
          <Placemark
            geometry={[parseFloat(location[0]), parseFloat(location[1])]}
            options={{preset: 'islands#redCircleDotIcon'}}
          />
          {listEvents}

        </Map>
      </YMaps>
      <Modal
        id='modal-1'
        title='Налить кофию.'
      />
    </div>
  );
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.array.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
