import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { EntryElements } from '../interfaces/EntryElements';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  displayedColumns: string[] = ['Description', 'IsExpense', 'Value', 'Actions'];
  dataSource; 
  constructor(private service: EntryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<EntryElements>(data as EntryElements[]);
    })
  }

  updateEntry(entry) {
    console.log(entry);
    this.dialog.open(UpdateEntryComponent, {
      data: {
        Id: entry.Id,
        Description: entry.Description,
        IsExpense: entry.IsExpense,
        Value: entry.Value
      }
    })
  }


}
