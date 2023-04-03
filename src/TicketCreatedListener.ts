import { Message } from "node-nats-streaming";
import { Listener } from "./BaseListener";

export class TicketCreatedListener extends Listener {
  subject = "ticket:created";
  QueueGroupName: string = "payment-service";
  onMessage(data: any, msg: Message): void {
    console.log("Event data:", data);

    msg.ack();
  }
}
