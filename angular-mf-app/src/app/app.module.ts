import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations:[],
    imports:[
        BrowserModule,
        AppRoutingModule, // Conecta las rutas
    ],
    providers:[],
    bootstrap:[AppComponent],
})
export class AppModule {}