import { ContactI } from 'src/app/shared/interfaces/ContactI';
export interface UserI {
    email: string;
    username: string;
    name: string;
    lname: string;
    password?: string;
    telefono?: string;
    contactos: Array<ContactI>;
}
