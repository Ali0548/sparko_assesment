import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase/config";
import { AddNotificationResponse, Notification } from "../types";
import { Collections, NotificationActionResponse } from "../enums";

const notificationRef = collection(db, Collections.NOTIFICATIONS);

const addNotification = async (notification: Notification) => {
    try {
        await addDoc(notificationRef, notification);
        return { message: NotificationActionResponse.SUCCESS, status: true } as AddNotificationResponse;
    } catch (error: any) {
        return { message: NotificationActionResponse.ERROR, status: false } as AddNotificationResponse;
    }
}

export {
    addNotification
}
