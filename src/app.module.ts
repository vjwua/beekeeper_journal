import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HivesModule } from './hives/hives.module';
import { ApiariesModule } from './apiaries/apiaries.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Hive } from './hives/hives.entity';
import { Apiary } from './apiaries/apiaries.entity';
import { Inspection } from './inspections/inspections.entity';

@Module({
  imports: [
    HivesModule,
    ApiariesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'templates'), 
      serveRoot: '/', 
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '617891aA',
      database: 'beekeeperdata',
      entities: [Apiary, Hive, Inspection],
      synchronize: false,
      logging: ['query', 'error'],
    }),
  ],
})
export class AppModule {}
