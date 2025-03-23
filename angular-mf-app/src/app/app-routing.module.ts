import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { Component } from "@angular/core";

@Component({
    selector:'test-page',
    standalone:true,
    template:`<h1>Esto es una ruta local del Host</h1>`,
})
export class TestPageComponent {}

const routes: Routes = [
    {
        path:'test', component: TestPageComponent //Ruta Local del Host 
    },
    {
        path: 'auth',
        loadChildren: () => import('authApp/Module').then(m => m.AuthModule),
    },
    {
        path:'editor',
        loadChildren: () => import('resumeEditorApp/Module').then(m =>m.EditorModule),
    },
    {
        path:'templates',
        loadChildren: () => import('templatesApp/Module').then(m =>m.TemplatesModule),
    },
    {
        path:'', redirectTo: '/auth/login',pathMatch:'full'
    },
    {
        path:'**', redirectTo:'auth/login'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}