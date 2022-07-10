import { IRequest } from "./request.interface";

export class Branch implements IRequest {
    id: number;
    name: string;
    address: string;
    id_shop: number;
    created_at?: string | undefined;
    uptated_at?: string | undefined;
    
    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.id_shop = 0;
    }
}