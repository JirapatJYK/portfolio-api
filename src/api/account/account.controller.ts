import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AccountService } from "./account.service";

@Controller('account')
@ApiTags('Account')
export class AccountController {
    constructor(private readonly accountService: AccountService){}
    @Post('create-account')
    async createAccount( accountBody): Promise<string>{
        return await this.accountService.createAccount(accountBody);
    }
}