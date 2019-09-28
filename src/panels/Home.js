import React from 'react';
import PropTypes from 'prop-types';

import {
  UsersStack,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  HeaderButton,
  List,
  Cell,
  InfoRow,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS
} from '@vkontakte/vkui';

import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

import {
  YMaps,
  Map,
  Placemark
} from 'react-yandex-maps';

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
    <ModalRoot>
      <ModalPage
        id='modal-page'
        header={
          <ModalPageHeader
            left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
            right={IS_PLATFORM_IOS && <HeaderButton onClick={this.modalBack}><Icon24Dismiss /></HeaderButton>}
          >
            Информация о мероприятии
          </ModalPageHeader>
        }
        onClose={this.modalBack}
      >
        <List>
          <Cell>
            <InfoRow title="Место">
              Казань Экспо
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Когда?">
              12 января 13:42
            </InfoRow>
          </Cell>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >
            {token} - 17:08
          </UsersStack>
        </List>
      </ModalPage>
    </ModalRoot>
   
    {/* <Div className="event-short-info-wrapper">
      <div className="event-info-content">
        <UsersStack
          photos={[
            'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
            'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
            'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
          ]}
          style={{ color: "#fff" }}
        >{token} - 17:15</UsersStack>
      </div>
    </Div> */}
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
