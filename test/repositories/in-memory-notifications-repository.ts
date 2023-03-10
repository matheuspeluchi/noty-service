import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notificatins-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
