import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SplashComponent } from './pages/splash/splash.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { YogaComponent } from './pages/yoga/yoga.component';
import { MeditationComponent } from './pages/meditation/meditation.component';
import { MusicComponent } from './pages/music/music.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AudioplayerComponent } from './pages/audioplayer/audioplayer.component';
import { SharedDataService } from './shared/shared-data.service';
import { WellnessandyouComponent } from './pages/healing/wellnessandyou/wellnessandyou.component';
import { HealingandyouComponent } from './pages/healing/healingandyou/healingandyou.component';
import { HealingComponent } from './pages/healing/healing/healing.component';
import { DiseasesComponent } from './pages/healing/diseases/diseases.component';
import { MaterialExampleModule } from './material.modules';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
//import { MatCarouselModule } from '@ngbmodule/material-carousel';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCarouselModule } from 'ng-mat-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    HeaderComponent,
    FooterComponent,
    YogaComponent,
    MeditationComponent,
    MusicComponent,
    SleepComponent,
    ProfileComponent,
    AudioplayerComponent,
    WellnessandyouComponent,
    HealingandyouComponent,
    HealingComponent,
    DiseasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    SlickCarouselModule

  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
