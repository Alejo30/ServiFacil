import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

//Modulos PrimeNg
import { InputTextModule } from "primeng/inputtext"
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { MessageModule } from "primeng/message";
import { MenubarModule } from "primeng/menubar";
import { ToastModule } from "primeng/toast";
import { PanelModule } from "primeng/panel";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { EditorModule } from "primeng/editor";
import {CardModule} from 'primeng/card';

import {HttpClient, HttpClientModule } from "@angular/common/http";
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrarFormComponent } from './pages/registrar-form/registrar-form.component';

//servicios
import { PersonaService } from './servicios/persona.service';
import { PersonaComponent } from './pages/persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    InicioComponent,
    RegistrarFormComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule, 
    RadioButtonModule, 
    ButtonModule, 
    TabViewModule, 
    CodeHighlighterModule,
    MessageModule,
    MenubarModule,
    ToastModule,
    PanelModule,
    InputTextareaModule,
    EditorModule,
    TableModule,
    CardModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
