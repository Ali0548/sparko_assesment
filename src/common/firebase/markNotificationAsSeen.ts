import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase/config";
import { MarkNotificationAsSeenResponse } from "../types";
import { Collections, NotificationActionResponse } from "../enums";

const markNotificationAsSeen = async (docId: string) => {
    const statusRef = doc(db, Collections.NOTIFICATIONS, docId)
    try {
        await updateDoc(statusRef, {
            status: true
        })
        return { status: true, message: NotificationActionResponse.SUCCESS } as MarkNotificationAsSeenResponse;
    } catch (error: any) {
        console.log('ErrorWhileFetching', error?.message);
        return { status: false, message: NotificationActionResponse.ERROR } as MarkNotificationAsSeenResponse;
    }
}
export {
    markNotificationAsSeen
}
