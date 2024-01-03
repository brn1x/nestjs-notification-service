import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';
import { Notification } from '@application/entities/notification/notification';

interface GetRecipientNotifications {
  recipientId: string;
}

interface GetRecipientNoficationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNofications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotifications,
  ): Promise<GetRecipientNoficationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
