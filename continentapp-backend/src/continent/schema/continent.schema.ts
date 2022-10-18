import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type  NomContinentDocument = nomContinent & Document ;

@Schema({collection : 'nomContinent'})//Ce décorateur fixe la classe comme définition de schéma.
export class nomContinent {
    @Prop()//Ceci est utilisé pour définir les propriétés dans le document.
    nom : string

    @Prop()
    code : string

    @Prop()
    imageUrl : string

}

export const nomContinentSchema = SchemaFactory.createForClass(nomContinent)

