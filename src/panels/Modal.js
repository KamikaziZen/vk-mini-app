import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
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
  Div,
  Button,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS
} from '@vkontakte/vkui';

import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      group_count: 0,
      modalHistory: []
    };
    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
      console.log('closing!')
      this.props.onClose()
    };

    this.getGroupMembers(this.props.event.group_id)
  }

  getGroupMembers (group_id) {
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
        this.setState({
          group_count: data.response.count
        });
      })
      .catch(error => {
        console.log('error', error)
      });
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
            <Div>
              <Button size="xl">Готов поучаствовать!</Button>
            </Div>
          </Cell>
          <Cell>
            <UsersStack
              photos={[
                'https://sun9-1.userapi.com/c850624/v850624456/9f63e/c2_IbBit7I8.jpg?ava=1',
                'https://sun9-6.userapi.com/c851528/v851528416/e0360/1UfQ8aSIGVA.jpg?ava=1'
              ]}
              size="m"
            >{this.props.event.count_cur} пойдут</UsersStack>
          </Cell>
        </List>
      </ModalPage>
    </ModalRoot>
    );
  }
}

export default Modal;
