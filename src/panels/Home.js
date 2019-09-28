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

const Home = ({ id, location, fetchedUser, events, token }) => {

  const emptyEvent = {
    'coords': [1, 1],
    'title': 'Пусто',
    'organizer': 'Пусто',
    'start': 'Пусто',
    'end': 'Пусто',
    'aim': 'Пусто',
    'description': 'Пусто',
    'requirements': [],
    'icon_type': 'islands#blueZooIcon',
    'reward': '',
    'photo': 'botsad.svg',
    'group_id': '1',
    'count_cur': 1,
    'count_end': 1
  }

  const [currentEvent, setCurrentEvent] = useState(
    {
      event: emptyEvent,
      activeModal: null
    }
  );

  const handleEventClick = (event) => {
    console.log('clicked')
    setCurrentEvent(
      {
        event: event,
        activeModal: 'modal-page-1'
      }
    )
    console.log(currentEvent)
  }

  const listEvents = events.map((e, idx) =>
    <Placemark
      key={'event-' + idx}
      geometry={e.coords}
      options={{preset: e.icon_type}}
      token={token}
      onClick={() => handleEventClick(e)}
    />
  );

  const onCloseModal = () => {
    setCurrentEvent(
      {
        event: emptyEvent,
        activeModal: null
      }
    )
  }

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
        event={currentEvent.event}
        activeModal={currentEvent.activeModal}
        onClose={onCloseModal}
      />
    </div>
  );
}

export default Home;
