import('./bootstrap')
	.catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent,{
	providers:[
		importProvidersFrom(AppRoutingModule) //Se inyecta las rutas federadas
	]
}).catch(err => console.error(err));
