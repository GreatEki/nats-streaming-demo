import { Publisher } from "./BasePublisher";
import { TicketCreatedEvent } from "../listener/ticket-created-event";
import { Subjects } from "../constants/subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
