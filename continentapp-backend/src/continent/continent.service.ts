import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nomContinent, NomContinentDocument } from "./schema/continent.schema";

@Injectable()
export class ContinentService {
    constructor(@InjectModel(nomContinent.name) private nomContinentModel: Model<NomContinentDocument>,) {}

    async getAll(): Promise<nomContinent[]>{
        return await this.nomContinentModel.find().exec()
    } 
}
