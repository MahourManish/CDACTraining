import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-add',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule, RouterLink],
  templateUrl: './emp-add.component.html',
  styles: ``
})
export class EmpAddComponent implements OnInit {
  constructor(private es: EmployeeService, private ar: ActivatedRoute, private r: Router){}

  id: number = 0;
  emp: Employee = {} as Employee;
  selectedFile: File | null = null;
  uploadStatus: string = '';
  ngOnInit(): void {

  }

  action(){
    this.es.save(this.emp).subscribe(r => {
      alert("Successfully Saved");
      this.r.navigate(['/emp-list']);
    }, e => {console.error(e)});
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.es.uploadFile(this.selectedFile).subscribe(
        response => {
          this.uploadStatus = `File uploaded successfully! Access it at ${response.filePath}`;
          this.emp.empPic = response.file;
        },
        error => {
          this.uploadStatus = 'Error uploading file.';
        }
      );
    }
  }

}
