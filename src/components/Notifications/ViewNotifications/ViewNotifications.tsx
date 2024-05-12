import { useEffect, useRef, useState } from 'react';
import { Notification } from '../../../common/types';
import { TableColumns } from '../../Datatable/types';
import { Button } from 'primereact/button';
import DataTableRenderer from '../../Datatable/Datatable';
import { getAllNotifications } from '../../../common/firebase/getAllNotifications';
import { Toast } from 'primereact/toast';
import { ToastMessage } from '../../../common/enums';
import { markNotificationAsSeen } from '../../../common/firebase/markNotificationAsSeen';


const ViewNotification = () => {
    const [notifications, setNotifications] = useState<Notification[]>([] as Notification[]);
    const [UInotifications, setUINotifications] = useState<Notification[]>([] as Notification[]);
    const toast = useRef<Toast>(null);

    const editNotification = async (docId: string) => {
       const updateNotificationStatus = await markNotificationAsSeen(docId);
       if(!updateNotificationStatus.status) return toast?.current?.show({ severity: ToastMessage.ERROR, summary: updateNotificationStatus?.message, life: 3000 });
       return toast?.current?.show({ severity: ToastMessage.SUCCESS, summary: updateNotificationStatus?.message, life: 3000 });
    };
    // Fetching Notifications Form Firebase
    const fetchNotification = async () => {
        const notifications = await getAllNotifications();
        if (!notifications?.status) return toast?.current?.show({ severity: ToastMessage.ERROR, summary: notifications?.message, life: 3000 });
        setNotifications(notifications?.data as Notification[]);
    };
    // Show data in databases
    const tableColumns: TableColumns[] = [
        {
            header: 'Type',
            field: 'type',
            sortable: true,
            style: { width: '15rem' },
        },
        {
            header: 'Message',
            field: 'message',
            sortable: true,
            style: { width: '15rem' },
        },
        {
            header: 'Action',
            field: 'action',
            style: { width: '15rem' },
        },
    ];
    useEffect(() => {
        fetchNotification()
    }, []);

    // modifying the data to show in datatable properly
    useEffect(() => {
        let newNotification = [] as Notification[];
        notifications?.forEach(x => {
            newNotification?.push({
                ...x,
                action: <Button label="Mark as seen" className="p-button-info" onClick={() => editNotification(x?.id)
                } />,
                message: x?.message,
                type: x?.type
            })
        });
        setUINotifications(newNotification);
    }, [notifications]);

    return (
        <>
            <div className="grid">
                <Toast ref={toast} />
                <div className="col-12">
                    {<DataTableRenderer<Notification> data={UInotifications} tableColumns={tableColumns} />}
                </div>
            </div>
        </>
    )
}

export default ViewNotification