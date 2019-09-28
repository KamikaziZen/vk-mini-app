import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './Home.css';

const Home = ({ id, location, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Карта событий</PanelHeader>
    <YMaps>
      <Map className="map" defaultState={{center: [parseFloat(location[0]),
                                                   parseFloat(location[1])], 
                                          zoom: 9}}>
        <Placemark
          geometry={[parseFloat(location[0]), parseFloat(location[1])]}
          options={{preset: 'islands#redCircleDotIcon'}}
        />
      </Map>
      <Div className="event-short-info">
        <div style={{
          backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
          height: 200,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '6px',
          borderRadius: 12
        }}>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >{parseFloat(location[0])} - {parseFloat(location[1])} - 15:17</UsersStack>
        </div>
      </Div>
    </YMaps>
  </Panel>
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