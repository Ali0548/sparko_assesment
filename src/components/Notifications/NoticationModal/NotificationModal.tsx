import React, { useRef } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextField } from '../../TextField/TextField';
import styles from './NotificationModal.module.scss'
import { NotificationType, ToastMessage } from '../../../common/enums';
import { Notification } from '../../../common/types';
import { addNotification } from '../../../common/firebase/addNotification';
import { Toast } from 'primereact/toast';

interface NotificationModalProps {
    isNotificationModalVisible: boolean;
    setIsNotificationModalVisible: (isNotificationModalVisible: boolean) => void;
    modalHeaderLabel: string;
    notificationType: NotificationType
}
const NotificationModal: React.FC<NotificationModalProps> = ({ isNotificationModalVisible, setIsNotificationModalVisible, modalHeaderLabel, notificationType }) => {
    const toast = useRef<Toast>(null);
    const { control, handleSubmit, formState: { errors } } = useForm<Notification>();
    const submitForm: SubmitHandler<Notification> = async (data: Notification) => {
        const newNotification = await saveNotification(data, notificationType);
        toast?.current?.show({ severity: newNotification?.status ? ToastMessage.SUCCESS : ToastMessage.ERROR, summary: newNotification?.message, life: 3000 });
        setTimeout(() => {
            setIsNotificationModalVisible(false);
        }, 300);
    }
    const saveNotification = async (data: Notification, type: NotificationType) => {
        data.type = type;
        data.status = false;
        return await addNotification(data);
    }
    const onHide = () => {
        setIsNotificationModalVisible(false)
    };
    return (
        // Main Notification Modal to get input and generate a brand new notification
        <Dialog header={modalHeaderLabel} visible={isNotificationModalVisible} modal={false} style={{ width: '50vw' }} onHide={() => onHide()}>
            <Toast ref={toast} />
            <div className={` ${styles["notificationMessage"]} grid`} >
                <div className="py-3 px-2 grid align-items-center">
                    <div className="col-8 p-0">
                        {/* Using React Hook Form For Validation */}
                        <Controller
                            name="message"
                            control={control}
                            defaultValue="This is test notification"
                            rules={{ required: 'Message is required to generate notification' }}
                            render={({ field }) => (
                                <TextField
                                    value={field?.value}
                                    onChange={(value) => field.onChange(value)}
                                    placeholder={'Enter message'}
                                    errorMessage={errors?.message?.message}
                                />
                            )}
                        />
                    </div>
                    <p></p>
                    <div className="col-4 pl-3">
                        <Button
                            label={'Save'}
                            onClick={handleSubmit(submitForm)}
                            className={`${styles["send-notification"]} w-full p-button-lg`}
                            style={{ marginLeft: '10px' }} // Add margin to the left of the button
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default NotificationModal