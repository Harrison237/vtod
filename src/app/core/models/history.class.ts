import { IRequest } from "./request.interface";

export class HistoryDB implements IRequest {
    id?: number;
    log_in: string;
    log_out: string;
    id_seller: number;
    created_at?: string | undefined;
    uptated_at?: string | undefined;
    
    constructor() {
        this.log_in = '';
        this.log_out = '';
        this.id_seller = 0;
    }
}