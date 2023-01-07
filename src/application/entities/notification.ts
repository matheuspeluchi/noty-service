import { Replace } from '../../helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null | undefined;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(val: string) {
    this.props.recipientId = val;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(val: Content) {
    this.props.content = val;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(val: string) {
    this.props.category = val;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readtAt(val: Date | null | undefined) {
    this.props.readAt = val;
  }

  public get readtAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
