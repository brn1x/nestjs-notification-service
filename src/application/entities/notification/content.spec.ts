import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Notification content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    const content = () => new Content('test');

    expect(content).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    const content = () => new Content('a'.repeat(241));

    expect(content).toThrow();
  });
});
