import { Notification } from '../../src/application/entities/notification/notification';
import { NotificationsRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public noticiations: Notification[] = [];

  async create(notification: Notification) {
    this.noticiations.push(notification);
  }
}
