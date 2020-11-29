export interface CreateEventType {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
}

export interface UpdateEventType {
  title?: string;
  description?: string;
  startsAt?: string;
  capacity?: number;
}
