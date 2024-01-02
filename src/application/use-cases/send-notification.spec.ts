import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipient-id-test',
      content: 'Notification test',
      category: 'social',
    });

    expect(notificationsRepository.noticiations).toHaveLength(1);
    expect(notificationsRepository.noticiations[0]).toEqual(notification);
  });
});
