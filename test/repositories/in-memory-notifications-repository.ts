import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.noticiations.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.noticiations.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.noticiations.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.noticiations.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.noticiations[notificationIndex] = notification;
    }
  }

  public noticiations: Notification[] = [];

  async create(notification: Notification) {
    this.noticiations.push(notification);
  }
}
