import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



 
@Injectable({
    providedIn: 'root'
})
export class WordsService implements OnInit{

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {

    }

<<<<<<< HEAD
    url: string = "http://3.19.26.214:5000/freq";
    url2: string = "http://3.19.26.214:5000/UpdateFreq";
=======
    url: string = "http://3.19.26.214:5000/freq";
    url2: string = "http://3.19.26.214:5000/UpdateFreq";
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61
  
    getFrequency(){
        return this.httpClient.get(this.url);
    }


    putFrequency(input: HTMLInputElement){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});
        return this.httpClient.put(this.url2, {"frequency": input.value}, 
       {headers: headers}).toPromise().then(puts => {
           console.log(puts);
       });
    }
}
