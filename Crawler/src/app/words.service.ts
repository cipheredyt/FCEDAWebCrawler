import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Words } from './words';

 
@Injectable({
    providedIn: 'root'
})
export class WordsService implements OnInit{

    constructor(private http: HttpClient) { }

    ngOnInit() {

    }
<<<<<<< HEAD
    wordsUrl: string = "http://3.19.26.214:5000/runCrawler";
=======
    wordsUrl: string = "http://3.19.26.214:5000/runCrawler";
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61


    getWords(){
        return this.http.get<Words[]>(this.wordsUrl);
    }

    
}
