import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FileUploadFakeService {

    upload(formData: any) {
        const photos: any[] = formData.getAll('photos');
        const promises = photos.map((x: File) => this.getImage(x)
            .then(img => ({
                id: img,
                originalName: x.name,
                fileName: x.name,
                url: img
            })));
        return Observable.fromPromise(Promise.all(promises));
    }

    private getImage(file: File) {
        return new Promise((resolve, reject) => {
            const fReader = new FileReader();
            const img = document.createElement('img');

            fReader.onload = () => {
                img.src = fReader.result;
                resolve(this.getBase64Image(img));
            }

            fReader.readAsDataURL(file);
        })
    }

    private getBase64Image(img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png');

        return dataURL;
    }
}