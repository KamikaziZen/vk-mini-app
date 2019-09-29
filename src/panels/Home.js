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
  const [groupCount, setGroupCount] = useState(0)
  const [inGroup, setInGroup] = useState(false)
  const [groupCover, setGroupCover] = useState('')
  const [userIcons, setUserIcons] = useState([])


  const allowGroup = () => {
    connect
      .sendPromise("VKWebAppAllowMessagesFromGrou", {"group_id": parseInt(currentEvent.event.group_id)})
      .then(data => {
        console.log('data', data)
      })
      .catch(error => {
        console.log('error in allow group', error)
      });
  }

  const joinGroup = () => {
    connect
      .sendPromise("VKWebAppJoinGroup", {"group_id": parseInt(currentEvent.event.group_id)})
      .then(data => {
        console.log('data', data)
      })
      .catch(error => {
        console.log('error IN JOIN GROUP', error)
      });
  }

  const getCover = (group_id) => {
    let params = {
      v: '5.101',
      access_token: token,
      group_id: parseInt(group_id),
      fields: "cover"
    }

    connect
      .sendPromise("VKWebAppCallAPIMethod", {"method": "groups.getById", 
                                             "params": params})
      .then(data => {
        console.log('cover:', data.response[0].photo_50)
        setGroupCover(data.response[0].photo_50)
      })
      .catch(error => {
        console.log('error in get cover', error)
      });
  }

  const getUsersPhotos = (user_ids) => {
    let params = {
      v: '5.101',
      access_token: token,
      user_ids: user_ids,
      fields: 'photo_50'
    }

    connect
      .sendPromise("VKWebAppCallAPIMethod", {"method": "users.get", 
                                             "params": params})
      .then(data => {
        console.log('response:', data)
        console.log('cover:', data.response.map((u)=>(u.photo_50)))
        setUserIcons(data.response.map((u)=>(u.photo_50)))
      })
      .catch(error => {
        console.log('error in get cover', error)
      });
  }

  const getGroupMembers = (group_id) => {
    let params = {
      v: '5.101',
      access_token: token,
      group_id: parseInt(group_id)
    }
    connect
      .sendPromise("VKWebAppCallAPIMethod", {"method": "groups.getMembers", 
                                            "params": params})
      .then(data => {
        console.log('group count:', data.response.count)
        console.log('items', data.response.items)
        if (data.response.items.includes(fetchedUser.id)) {
          console.log('user in group')
          setInGroup(true)
        } else {
          console.log('USER IS NOT IN GROUP')
          setInGroup(false)
        }
        setGroupCount(data.response.count)
        getUsersPhotos(data.response.items)
      })
      .catch(error => {
        console.log('error in get group members', error)
      });
  }


  const handleEventClick = (event) => {
    // joinGroup(group_id)
    getGroupMembers(event.group_id)
    getCover(event.group_id)
    console.log('clicked')
    setCurrentEvent(
      {
        event: event,
        activeModal: 'modal-page-1'
      }
    )
    console.log('event:', currentEvent)
  }

  const listEvents = events.map((e, idx) =>
    <Placemark
      key={'event-' + idx}
      geometry={e.coords}
      options={{preset: e.icon_type}}
      onClick={() => handleEventClick(e)}
    />
  );

  const onCloseModal = () => {
    setCurrentEvent(
      {
        event: emptyEvent,
        activeModal: null,
      }
    )
    setGroupCount(0)
    setInGroup(false)
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
            zoom: 10}
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
        groupCount={groupCount}
        onJoin={joinGroup}
        inGroup={inGroup}
        groupCover={groupCover}
        userIcons={userIcons}
        onAllow={allowGroup}
      />
    </div>
  );
}

export default Home;
