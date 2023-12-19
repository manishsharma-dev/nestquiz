import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'cloud123',
  database: 'quiz',
  entities: [Quiz],
  synchronize: true,
};
