import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'page-template-driven-file-upload',
  templateUrl: './page-template-driven-file-upload.component.html',
  styleUrls: ['./page-template-driven-file-upload.component.css']
})
export class PageTemplateDrivenFileUploadComponent {

  uploadedFiles = [];
  uploadError;
  currentStatus: number;
  uploadFieldName = 'photos';

  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;

  constructor(private _svc: FileUploadService) {
    this.currentStatus = this.STATUS_INITIAL;
  }

  filesChange(fileList: FileList) {
    const formData = new FormData();
    if (!fileList.length) return;

    Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append(this.uploadFieldName, fileList[x], fileList[x].name);
      });

    this.save(formData);
  }

  reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
  }

  save(formData: FormData) {
    const url = 'http://localhost:3001/photos/upload';
    this.currentStatus = this.STATUS_SAVING;
    this._svc.upload(formData)
      .take(1)
      .delay(1500)
      .subscribe(x => {
        this.uploadedFiles = [].concat(x);
        console.log(x);
        this.currentStatus = this.STATUS_SUCCESS;
      }, err => {
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
      })
  }
}