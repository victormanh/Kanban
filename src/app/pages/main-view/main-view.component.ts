import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IBoard } from 'src/app/models/board.model';
import { MatDialog } from '@angular/material/dialog';
import { NewColumnDialogComponent } from './new-column-dialog/new-column-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  public board: IBoard =
    {
      name: 'Test Board',
      columns: [
        {
          name: 'toDo',
          tasks: [
            'task1',
            'task2',
            'task3'
          ]
        },
        {
          name: 'inProgess',
          tasks: []
        },
        {
          name: 'Done',
          tasks: []
        }
      ]
    }

  public columnName: string = '';

  constructor(
    public dialog: MatDialog,
    public toastrService: ToastrService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openColumnDialog(): void {
    const dialogRef = this.dialog.open(NewColumnDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (!(result === null || result === undefined)) {
        this.columnName = result;
        console.log(this.columnName)
        if (this.columnName.trim().length !== 0) {
          this.addColumn();
        } else {
          this.toastrService.error('Please provide a valid column name', 'Error');
        }
      }
    });
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public createTask() {
    // to be implemented
  }

  public deleteTask() {
    // to be written in the future
  }

  public addColumn() {
    this.board.columns.push({ name: this.columnName, tasks: [] });
  }

  public deleteColumn(columnName: string) {
    console.log(columnName)
    const indexOfObject = this.board.columns.findIndex((object) => {
      return object.name === columnName;
    });
    if (indexOfObject !== -1) {
      this.board.columns.splice(indexOfObject, 1);
    }
  }

}
