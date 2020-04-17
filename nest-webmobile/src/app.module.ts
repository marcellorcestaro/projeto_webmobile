import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendaModule } from './renda/renda.module';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db_v1.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RendaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
