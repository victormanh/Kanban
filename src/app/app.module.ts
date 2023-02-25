import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanViewComponent } from './pages/main-view/kanban-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewColumnDialogComponent } from './pages/main-view/new-column-dialog/new-column-dialog.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NewTaskDialogComponent } from './pages/main-view/new-task-dialog/new-task-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    KanbanViewComponent,
    NewColumnDialogComponent,
    NewTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
