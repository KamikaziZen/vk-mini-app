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

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeModal: 'modal-page-1',
      modalHistory: []
    };

    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };
  }

  setActiveModal(activeModal) {
    activeModal = activeModal || null;
    let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

    if (activeModal === null) {
      modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
      modalHistory.push(activeModal);
    }

    this.setState({
      activeModal,
      modalHistory
    });
  };

  handleClick = () => {
    console.log('значение this:', this);
  }

  render() {
    return (
      <ModalRoot
        id={this.props.id}
        activeModal={this.state.activeModal}
      >
        <ModalPage
          id='modal-page-1'
          header={
            <ModalPageHeader
              left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
              right={IS_PLATFORM_IOS && <HeaderButton onClick={this.modalBack}><Icon24Dismiss /></HeaderButton>}
            >
              {this.props.title}
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
            Эти товарищи тоже идут!
          </UsersStack>
        </List>
      </ModalPage>
    </ModalRoot>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
