import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentModule } from './continent/continent.module';

@Module({
  imports: [ContinentModule, MongooseModule.forRoot('mongodb://localhost:27017/continents')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
