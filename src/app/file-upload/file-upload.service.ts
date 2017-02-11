import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class FileUploadService {

    baseUrl = 'http://localhost:3001';

    constructor(private _http: Http) { }

    upload(formData) {
        const url = `${this.baseUrl}/photos/upload`;
        return this._http.post(url, formData)
            .map(x => x.json())
            .map((x: any[]) => x
                .map(item => Object
                    .assign({}, item, { url: `${this.baseUrl}/images/${item.id}` }))
            );
    }
}