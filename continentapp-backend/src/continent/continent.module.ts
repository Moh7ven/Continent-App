import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContinentController } from './continent.controller';
import { ContinentService } from './continent.service';
import { nomContinentSchema } from './schema/continent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
      name: 'nomContinent', 
      schema:nomContinentSchema, 
      collection: 'nomContinent'
      }
    ])
  ],
  controllers: [ContinentController],
  providers: [ContinentService]
})
export class ContinentModule {}
