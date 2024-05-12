import React, { useState } from 'react';
import styles from './CreateNotification.module.scss';
import { Button } from 'primereact/button'
import { NotificationType } from '../../../common/enums';
import NotificationModal from '../NoticationModal/NotificationModal';


interface CreateNotificationProps {
    notificationType: NotificationType;
}
const CreateNotification: React.FC<CreateNotificationProps> = ({ notificationType }) => {
    const [isNotificationModalVisible, setIsNotificationModalVisible] = useState<boolean>(false);
    return (
        <>
            <div className={styles['notification-container']}>
                {/* Modal to create new notifications */}
                <NotificationModal
                    isNotificationModalVisible={isNotificationModalVisible}
                    setIsNotificationModalVisible={setIsNotificationModalVisible}
                    modalHeaderLabel={`Add New ${notificationType} Notification`}
                    notificationType={notificationType}
                />
                {/* Conditionally Rendering Buttons */}
                {notificationType === NotificationType.REMINDER && <div className={styles['reminder-box']}><Button onClick={()=>setIsNotificationModalVisible(true)} type='button' label='Reminder' /></div>}
                {notificationType === NotificationType.MESSAGE && <div className={styles['message-box']}><Button onClick={()=>setIsNotificationModalVisible(true)} type='button' className="p-button-success" label='Message' /></div>}
                {notificationType === NotificationType.ALERT && <div className={styles['alert-box']}><Button onClick={()=>setIsNotificationModalVisible(true)} type='button' className="p-button-danger" label='Alert' /></div>}
            </div>
        </>
    )
}

export default CreateNotification