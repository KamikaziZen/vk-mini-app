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
      // activeModal: null,
      modalHistory: []
    };
    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
      console.log('closing!')
      this.props.onClose()
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
      // activeModal,
      modalHistory
    });
  };

  render() {
    return (
      <ModalRoot
        id='modal-1'
        activeModal={this.props.activeModal}
      >
        <ModalPage
          id='modal-page-1'
          header={
            <ModalPageHeader
              left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
              right={IS_PLATFORM_IOS && <HeaderButton onClick={this.modalBack}><Icon24Dismiss /></HeaderButton>}
            >
              {this.props.event.title}
            </ModalPageHeader>
          }
          onClose={this.modalBack}
        >
        <List>
          <Cell>
            <InfoRow title="Когда?">
              {this.props.event.start} - {this.props.event.end}
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Что там делать?">
              {this.props.event.aim}
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Чат группы">
              { this.props.event.group_id }
            </InfoRow>
          </Cell>
          <Cell>
            <UsersStack
              photos={[
                'https://sun9-1.userapi.com/c850624/v850624456/9f63e/c2_IbBit7I8.jpg?ava=1',
                'https://sun9-6.userapi.com/c851528/v851528416/e0360/1UfQ8aSIGVA.jpg?ava=1'
              ]}
              size="m"
            >Настя и Jean пойдут на это мероприятие</UsersStack>
          </Cell>
        </List>
      </ModalPage>
    </ModalRoot>
    );
  }
}

export default Modal;
