import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';

@Component({
  selector: 'app-student-selector',
  templateUrl: './student-selector.component.html',
  styleUrls: ['./student-selector.component.scss']
})
export class StudentSelectorComponent implements OnInit {
  @Output() selectStudent = new EventEmitter<any>()
  term$ = new BehaviorSubject<string>('');
  studentData: any
  searchText: string
  constructor( private studentApi: StudentApi) { }

  ngOnInit(): void {
    this.term$.pipe(
      debounceTime(500),
      switchMap((term) => {
        if (term?.length < 3) {
          return of([])
        }
        return this.studentApi.searchStudentInfo(term).pipe(catchError(() => { 
          delete this.studentData
          return of(null);}))
      }
      )
    ).subscribe((data) => {
      if( data?.student_info) this.studentData = data?.student_info
    })
  }

  
  onInputChange($event) {
    this.searchText = $event.target.value
    this.term$.next($event.target.value)
  }

  select(){
    this.selectStudent.emit(this.studentData)
    delete this.studentData
  }

  onFocus(){
    this.term$.next(this.searchText )
  }

}
