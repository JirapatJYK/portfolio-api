import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountService {
    constructor(){}
    async createAccount(accountData): Promise<string>{
        return 'createAccount';
    }
}