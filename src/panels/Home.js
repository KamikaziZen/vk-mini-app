import React from 'react';
import PropTypes from 'prop-types';

import {
  YMaps,
  Map,
  Placemark
} from 'react-yandex-maps';

import Modal from './Modal';

import './Home.css';

const Home = ({ id, location, fetchedUser, token }) => (
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
      </Map>
    </YMaps>
    <Modal
      id='modal-1'
      title='Налить кофию.'
    />
  </div>
);

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
