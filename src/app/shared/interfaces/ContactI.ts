import { MessageI } from 'src/app/pages/private/home/interfaces/MessageI';
export interface ContactI {
    email: string;
    chat: Array<MessageI>;
}
