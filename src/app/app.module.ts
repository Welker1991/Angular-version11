import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { TotemService } from './totem/totem.component.services';
import { HomeComponent } from './home/home.component';
import { UpdateTabletComponent } from './update-tablet/update-tablet.component';
import { UpdateCelularComponent } from './update-celular/update-celular.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { UpdateTotemComponent } from './update-totem/update-totem.component';
import { CreateTabletComponent } from './create-tablet/create-tablet.component';
import { CreateCelularComponent } from './create-celular/create-celular.component';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { CreateDesktopComponent } from './create-desktop/create-desktop.component';
import { CreateTotemComponent } from './create-totem/create-totem.component';
import { LaptopComponent } from './laptop/laptop.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TabletComponent } from './tablet/tablet.component';
import { CelularComponent } from './celular/celular.component';
import { TotemComponent } from './totem/totem.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { UpdateDesktopComponent } from './update-desktop/update-desktop.component';

const routes: Routes = [
  { path: 'cadastrar-totem', component: CreateTotemComponent },
  { path: 'listar-totem', component: TotemComponent },
  { path: 'cadastrar-desktop', component: CreateDesktopComponent },
  { path: 'listar-desktop', component: DesktopComponent },
  { path: 'cadastrar-laptop', component: CreateLaptopComponent },
  { path: 'listar-laptop', component: LaptopComponent },
  { path: 'cadastrar-celular', component: CreateCelularComponent },
  { path: 'listar-celular', component: CelularComponent },
  { path: 'cadastrar-tablet', component: CreateTabletComponent },
  { path: 'listar-tablet', component: TabletComponent },
  { path: 'atualizar-totem', component: UpdateTotemComponent },
  { path: 'atualizar-desktop', component: UpdateDesktopComponent },
  { path: 'atualizar-laptop', component: UpdateLaptopComponent },
  { path: 'atualizar-celular', component: UpdateCelularComponent },
  { path: 'atualizar-tablet', component: UpdateTabletComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TotemComponent,
    CelularComponent,
    TabletComponent,
    DesktopComponent,
    LaptopComponent,
    CreateTotemComponent,
    CreateDesktopComponent,
    CreateLaptopComponent,
    CreateCelularComponent,
    CreateTabletComponent,
    UpdateTotemComponent,
    UpdateDesktopComponent,
    UpdateLaptopComponent,
    UpdateCelularComponent,
    UpdateTabletComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,


  ],
  providers: [HttpClientModule, TotemService, UpdateTotemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
