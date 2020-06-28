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
    url: string = "http://3.19.26.214:5000/keywords"
    url2: string = "http://3.19.26.214:5000/addKeyword";
    url3: string = "http://3.19.26.214:5000/deleteKeyword/";
=======
    url: string = "http://3.19.26.214:5000/keywords"
    url2: string = "http://3.19.26.214:5000/addKeyword";
    url3: string = "http://3.19.26.214:5000/deleteKeyword/";
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61
   


    
    getWords(){
        return this.httpClient.get(this.url);
    }




    postKeyWord(input: HTMLInputElement){
        const headers = new HttpHeaders
        ({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
         return this.httpClient.post(this.url2, {"keyword": input.value}, 
        {headers: headers}).toPromise().then
        (
            posts => 
            {
                console.log(posts);
            }
        );
         
       }

    deleteKeyWord(word): Observable<void> {
<<<<<<< HEAD
        const url = `http://3.19.26.214:5000/deleteKeyword/${word}`;
=======
        const url = `http://3.19.26.214:5000/deleteKeyword/${word}`;
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61
        return this.httpClient.delete<void>(url);
    }
 

}
