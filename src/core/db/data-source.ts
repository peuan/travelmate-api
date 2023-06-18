import { CreateUserTable1687092740504 } from 'src/migrations/1687092740504-create-user-table';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [],
  migrations: [CreateUserTable1687092740504],
  synchronize: false,
  migrationsRun: true,
});

export default dataSource;
