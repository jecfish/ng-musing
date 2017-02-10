import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class FileUploadService {

    constructor(private _http: Http) { }

    upload(formData) {
        const url = 'http://localhost:3001/photos/upload';
        return this._http.post(url, formData)
            .map(x => x.json())
            .map((x: any[]) => x
                .map(item => Object
                    .assign({}, item, { url: `http://localhost:3001/images/${item.id}` }))
            );
    }
}