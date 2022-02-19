import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioplayerComponent } from './pages/audioplayer/audioplayer.component';
import { DiseasesComponent } from './pages/healing/diseases/diseases.component';
import { HealingComponent } from './pages/healing/healing/healing.component';
import { HealingandyouComponent } from './pages/healing/healingandyou/healingandyou.component';
import { WellnessandyouComponent } from './pages/healing/wellnessandyou/wellnessandyou.component';
import { HomeComponent } from './pages/home/home.component';
import { MeditationComponent } from './pages/meditation/meditation.component';
import { MusicComponent } from './pages/music/music.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { SplashComponent } from './pages/splash/splash.component';
import { YogaComponent } from './pages/yoga/yoga.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'yoga', component: YogaComponent, },
  { path: 'meditation', component: MeditationComponent, },
  { path: 'music', component: MusicComponent, },
  { path: 'sleep', component: SleepComponent, },
  { path: 'profile', component: ProfileComponent, },
  { path: 'splash', component: SplashComponent, },
  { path: 'audio', component: AudioplayerComponent, },
  { path: 'wellnessandyou', component: WellnessandyouComponent, },
  { path: 'healingandyou', component: HealingandyouComponent, },
  { path: 'healing', component: HealingComponent, },
  { path: 'diseases', component: DiseasesComponent, },



  //{ path: 'audio', component: AudioplayerComponent, },

  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: '**', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


