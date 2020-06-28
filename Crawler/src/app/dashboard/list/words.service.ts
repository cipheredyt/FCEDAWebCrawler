import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Words } from './words';
import { Observable } from 'rxjs';

 
@Injectable({
    providedIn: 'root'
})
export class WordsService implements OnInit{

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }

<<<<<<< HEAD
    url: string = "http://3.19.26.214:5000/startCrawler";
=======
    url: string = "http://3.19.26.214:5000/startCrawler";
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61

    getWords():Observable<Words[]>{
        return this.http.get<Words[]>(this.url);
    }

}
