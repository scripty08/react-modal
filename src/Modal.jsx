import React from 'react';
import './Modal.scss';
import { Card } from '@scripty/react-card';

export const Modal = (props) => {
    const { children, onOk, onCancel, onClose, visible, title } = props;

    return (
        (visible) ?
            <div className={'modal'}>
                <div className={'mask'}> </div>
                <div className={'wrapper'} tabIndex={'-1'}>
                    <Card
                        title={title}
                        style={{ margin: '30px auto', maxWidth: 800 }}
                        onClose={onClose}
                        onCancel={onCancel}
                        onOk={onOk}
                    >
                        {children}
                    </Card>
                </div>
            </div> : null
    );
};
