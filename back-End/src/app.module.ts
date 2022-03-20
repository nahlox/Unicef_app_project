import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';
import { RolesModule } from './roles/roles.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { EventsModule } from './events/events.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [TypeOrmModule.forRoot({

   }), UserModule, QuestionsModule, RolesModule, RegistrationsModule, EventsModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
