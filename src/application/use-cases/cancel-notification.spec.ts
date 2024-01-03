import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const canceledNotification = new CancelNotification(
      notificationsRepository,
    );

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await canceledNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.noticiations[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const canceledNotification = new CancelNotification(
      notificationsRepository,
    );

    expect(() => {
      return canceledNotification.execute({
        notificationId: 'non-existing-notification',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
