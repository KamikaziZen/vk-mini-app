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

  const [currentEvent, setCurrentEvent] = useState(
    {
      title: null,
      group_id: null,
      activeModal: null
    }
  );


  const joinGroup = (group_id) => {
    connect
      .sendPromise("VKWebAppJoinGroup", {"group_id": parseInt(group_id)})
      .then(data => {
        console.log('data', data)
      })
      .catch(error => {
        console.log('error', error)
      });
  }


  const getGroupMembers = (group_id) => {
    let endpoint = 'https://api.vk.com/method/groups.getMembers'
    // ?v=5.101&group_id=' + group_id + '&access_token=' + token)
    // fetch(endpoint, {})
  }

  const handleEventClick = (title, group_id) => {
    // joinGroup(group_id)
    getGroupMembers(group_id)
    console.log('clicked')
    setCurrentEvent(
      {
        title: title,
        group_id: group_id,
        activeModal: 'modal-page-1'
      }
    )
    console.log(currentEvent)
  }

  const listEvents = events.map((e, idx) =>
    <Placemark
      key={'event-' + idx}
      geometry={e.coords}
      onClick={() => handleEventClick(e.title, e.group_id)}
    />
  );

  const onCloseModale = () => {
    setCurrentEvent(
      {
        title: null,
        group_id: null,
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
        title={currentEvent.title}
        group_id={currentEvent.group_id}
        activeModal={currentEvent.activeModal}
        onClose={onCloseModale}
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
