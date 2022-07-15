import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DatabaseService } from "./database.service";
import { configuration } from "src/common/config/prod.config";

@Module({
    imports: [
        MongooseModule.forRoot(configuration.db_url, {

        }),
    ],
    providers: [DatabaseService],
})

export class DatabaseModule {
    constructor( private readonly databaseService: DatabaseService){};
}