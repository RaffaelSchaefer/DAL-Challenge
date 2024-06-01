import type User from "./user";

export default interface DLAUser {
    id: string;
    expand: {
        isUser: User | undefined;
    }
    user: User | undefined;
    department: string;
    working_hours: string;
}
