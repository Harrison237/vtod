import { IRequest } from "./request.interface";

export class Shop implements IRequest{

    id: number;
    name: string;
    created_at?: string;
    uptated_at?: string;

    constructor() {
        this.id = 0;
        this.name = '';
    }
    
}