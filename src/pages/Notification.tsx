import FullLayout from '../components/Layout/FullLayout'
import CreateNotification from '../components/Notifications/CreateNotifications/CreateNotification'
import { NotificationType } from '../common/enums';
import styles from './Notification.module.scss'
import ViewNotification from '../components/Notifications/ViewNotifications/ViewNotifications';

const Notification = () => {
    return (
        // Main component
        <FullLayout>
            <div className={`${styles["notification-container"]}`}>
                {/* Three button for different  type of notification output */}
                <CreateNotification notificationType={NotificationType.MESSAGE} />
                <CreateNotification notificationType={NotificationType.REMINDER} />
                <CreateNotification notificationType={NotificationType.ALERT} />
            </div>
          <p></p>
          {/* View all non-seen notifications */}
           <ViewNotification />

        </FullLayout>
    )
}

export default Notification