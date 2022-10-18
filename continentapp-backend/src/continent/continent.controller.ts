import { Controller,Get } from '@nestjs/common';
import { ContinentService } from './continent.service';

@Controller('continent')
export class ContinentController {
    constructor(private ContinentService:ContinentService){}//Injectez notre 'ContinentService'.

    @Get()//Le décorateur '@Get()' rend notre méthode utilisée uniquement pour la requête HTTP Get.
    async getAll() {
        return await this.ContinentService.getAll()
    }
}
