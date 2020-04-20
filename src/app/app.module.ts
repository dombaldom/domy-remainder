import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './shared/shared.module';
import { TopBarComponent, DialogProductoEliminarComponent } from './top-bar/top-bar.component';
import { MenuComponent,  DialogProfileComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';

import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { LearnMachineLearningComponent } from './learn-machine-learning/learn-machine-learning.component';
import { LearnIdeaComponent } from './learn-idea/learn-idea.component';
import { LearnCalculusComponent } from './learn-calculus/learn-calculus.component';
import { LearnElectronicsComponent } from './learn-electronics/learn-electronics.component';
import { LearnPythonComponent } from './learn-python/learn-python.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuComponent,
    DialogProfileComponent,
    DialogProductoEliminarComponent,
    ProjectsComponent,

    /** Content */
    LearnAngularComponent,
    LearnMachineLearningComponent,
    LearnIdeaComponent,
    LearnCalculusComponent,
    LearnElectronicsComponent,
    LearnPythonComponent
  ],
  imports: [
    MatSidenavModule,
    MatDialogModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'calculus', component: LearnCalculusComponent},
      { path: 'angular', component: LearnAngularComponent},
      { path: 'machine', component: LearnMachineLearningComponent},
      { path: 'electronics', component: LearnElectronicsComponent},
      { path: 'python', component: LearnPythonComponent},
      { path: 'idea', component: LearnIdeaComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [DialogProductoEliminarComponent, DialogProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
