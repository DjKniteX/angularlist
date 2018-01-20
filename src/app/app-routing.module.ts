import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// New things to add
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent} from './weather/weather.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'weather',
    component: WeatherComponent

  },
  {
    path: 'setting',
    component: SettingComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
