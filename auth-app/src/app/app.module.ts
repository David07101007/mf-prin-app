import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AuthModule } from './auth/auth.module'

@NgModule({
    declarations:[],
    imports:[
    BrowserModule,
    AuthModule],
    providers:[],
    bootstrap:[] // no se necesita componente raiz, pues este se carga dentro del Host
})
export class AppModule {}