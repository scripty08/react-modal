import React, { Fragment, useState } from 'react';
import { Modal } from '../../../src';

import './Example.scss';
import { Button } from '@scripty/react-buttons';

export const Example = () => {

    const [visible, setVisible] = useState(false)

    const onClose = () => {
        setVisible(false);
        console.log('onClose', '  ---------------------- ');
    };

    const onCancel = () => {
        setVisible(false);
        console.log('onCancel', '  ---------------------- ');
    };

    const onOk = () => {
        setVisible(false);
        console.log('onOk', '  ---------------------- ');
    };

    const onShowAlertBtnClick = () => {
        setVisible(true);
    }

    return (
        <Fragment>
            <Button style={{width:100}} onClick={onShowAlertBtnClick}>Show Alert</Button>
            <Modal
                visible={visible}
                title={'Alert'}
                onClose={onClose}
                onCancel={onCancel}
                onOk={onOk}
            >
                Test Content for Alert
            </Modal>
        </Fragment>
    )
}
