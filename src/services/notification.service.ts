import { 
    CreateNotificationDto, 
    GetNotificationsResponseDto, 
    NotificationDto, 
    NotificationId, 
    NotificationProto, 
    UpdateNotificationDto, 
    UserId, 
    createNotificationProto 
} from '../protos/notification.pb.ts';
import { getDataSource } from '../data-source.ts';
import { Notification } from '../entity/notification.entity.ts'

const notificationProto: NotificationProto = {
    getNotifications: async (userId: UserId): Promise<GetNotificationsResponseDto> => {
        const AppDataSource = await getDataSource();
        const notificationRepo = AppDataSource.getRepository(Notification);
        const notifications = await notificationRepo.manager.find(Notification, { where: { userId: userId.id }, order: { createdAt: 'DESC' }});
        if(notifications.length <= 0) {
            return { notifications: [] }
        }
        return { notifications: notifications };
    },
    getNotification: async (notificationId: NotificationId): Promise<NotificationDto> => {
        const AppDataSource = await getDataSource();
        const notificationRepo = AppDataSource.getRepository(Notification);
        const notification = await notificationRepo.manager.findOne(Notification, { where: { id: notificationId.id }});
        if(!notification) {
            throw Error('Post not found');
        }
        return notification;
    },
    createNotification: async (data: CreateNotificationDto): Promise<NotificationDto> => {
        const AppDataSource = await getDataSource();
        const notificationRepo = AppDataSource.getRepository(Notification);
        const notification = await notificationRepo.manager.save(Notification, data);
        if(!notification) {
            throw Error('unable to create post');
        }
        return notification;
    },
    updateNotification: async (data: UpdateNotificationDto): Promise<NotificationDto> => {
        const AppDataSource = await getDataSource();
        const notificationRepo = AppDataSource.getRepository(Notification);
        const notification = await notificationRepo.manager.update(
            Notification,
            { id: data.id },
            data,
        );
        if(!notification.raw) {
            throw Error('Unable to save post');
        }
        return notification.raw;
    },
  };
  
  export const notificationProtoHandler = createNotificationProto(notificationProto);