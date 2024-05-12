import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../config/firebase/config";
import { GetAllNotificationsResponse, Notification } from "../types";
import { Collections, NotificationActionResponse, NotificationType } from "../enums";

const q = query(collection(db, Collections.NOTIFICATIONS), where("status", "==", false));

const getAllNotifications = async () => {
    try {
        const notificationsData = [] as Notification[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            notificationsData?.push({
                id: doc?.id,
                message: doc?.data()?.message as string,
                status: doc?.data()?.message as boolean,
                type: getType(doc?.data()?.type)
            } as Notification);
        });
        return { status: true, data: notificationsData } as GetAllNotificationsResponse;
    } catch (error: any) {
        return { status: false, data: null, message: NotificationActionResponse.ERROR } as GetAllNotificationsResponse;
    }
}
const getType = (type: string): NotificationType => {
    if (type === NotificationType.ALERT) {
        return NotificationType.ALERT
    } else if (type === NotificationType.MESSAGE) {
        return NotificationType.MESSAGE
    } else {
        return NotificationType.REMINDER
    }
}
export {
    getAllNotifications
}
