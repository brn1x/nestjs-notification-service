import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-id-count-1',
    content: new Content('Notification test'),
    category: 'social',
    ...override,
  });
}
