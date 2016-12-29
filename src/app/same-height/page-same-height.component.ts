
import { Component } from '@angular/core';

@Component({
    selector: 'page-same-height',
    templateUrl: './page-same-height.component.html',
    styleUrls: ['./page-same-height.component.css']
})
export class PageSameHeightComponent {
    list = [
        { 
            title: 'Selangor', 
            content: 'Selangor is a state on the west coast of Peninsular Malaysia, encircling the capital Kuala Lumpur. In the state capital, Shah Alam, the Sultan Salahuddin Abdul Aziz Mosque has 4 soaring minarets and a huge blue dome.' 
        },
        { 
            title: 'Kuala Lumpur', 
            content: 'Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs. The towers also offer a public skybridge and observation deck. The city is also home to British colonial-era landmarks such as the Kuala Lumpur Railway Station and the Sultan Abdul Samad Building.' 
        },
        {
            title: 'Perak',
            content: 'Perak is a state in the northwest of Peninsular Malaysia. The capital city Ipoh is known for its British colonial landmarks, including a baroque railway station. Sam Poh Tong is a huge Buddhist cave temple filled with wall paintings. The town of Gopeng is a base for rafting on the Kampar river.'
        }
    ]
}