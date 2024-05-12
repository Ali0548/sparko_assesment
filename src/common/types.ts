import { NotificationType } from "./enums";

export interface Notification {
    id: string;
    message: string;
    type: NotificationType;
    status: boolean;
    action?: React.ReactNode
};
export interface AddNotificationResponse {
    status: boolean;
    message: string;
}
export interface MarkNotificationAsSeenResponse {
    status: boolean;
    message: string;
}
export interface GetAllNotificationsResponse {
    status: boolean;
    data: Notification[] | null;
    message: string
}