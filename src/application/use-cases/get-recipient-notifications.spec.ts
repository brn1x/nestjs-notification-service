import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNofications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const recipientNotifications = new GetRecipientNofications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-count-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-count-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-count-2' }),
    );

    const { notifications } = await recipientNotifications.execute({
      recipientId: 'recipient-id-count-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id-count-1' }),
        expect.objectContaining({ recipientId: 'recipient-id-count-1' }),
      ]),
    );
  });

  it('should be able to get an empty list of recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const recipientNotifications = new GetRecipientNofications(
      notificationsRepository,
    );

    const { notifications } = await recipientNotifications.execute({
      recipientId: 'recipient-id-count-1',
    });

    expect(notifications).toHaveLength(0);
  });
});
