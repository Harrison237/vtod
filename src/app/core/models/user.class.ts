import { IRequest } from "./request.interface";

export class User implements IRequest {
    id: number;
    email: string;
    email_verified_at: string | null;
    created_at?: string;
    updated_at?: string;

    constructor() {
        this.id = 0;
        this.email = '';
        this.email_verified_at = null;
    }
}