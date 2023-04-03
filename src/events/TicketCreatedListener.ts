import { Message } from "node-nats-streaming";
import { Listener } from "./BaseListener";
import { TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  QueueGroupName: string = "payment-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message): void {
    console.log("Event data:", data);

    msg.ack();
  }
}
