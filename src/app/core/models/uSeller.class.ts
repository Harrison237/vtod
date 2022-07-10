import { IRequest } from "./request.interface";

export class userSeller implements IRequest {
    id: number;
    name: string;
    lastname: string;
    email: string;
    id_user: number;
    id_branch: number;
    created_at?: string;
    updated_at?: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname = '';
        this.email = '';
        this.id_user = 0;
        this.id_branch = 0;
    }
}