import { ConfigService } from "@nestjs/config";
import { User } from "src/user/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const TypeORMconfigs = (configService: ConfigService): MysqlConnectionOptions => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    password: configService.get('DB_PASSWORD'),
    username: configService.get('DB_USER'),
    database: configService.get('DB_NAME'),
    synchronize: true,
    entities: [User]
})