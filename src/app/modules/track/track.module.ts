import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { CardComponent } from './components/card/card.component';
import { MyMaterialModule } from 'src/app/mymaterial';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, PlaylistComponent, CardComponent],
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  exports: [HeaderComponent]
})
export class TrackModule { }
