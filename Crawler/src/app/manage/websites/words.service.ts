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
    url: string = 'http://3.19.26.214:5000/websites';
    url2: string = "http://3.19.26.214:5000/addWebsite";
=======
    url: string = 'http://3.19.26.214:5000/websites';
    url2: string = "http://3.19.26.214:5000/addWebsite";
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61

    
    getWebsites(){
        return this.httpClient.get(this.url);
    }


    postWebsite(input: HTMLInputElement){
        const headers = new HttpHeaders({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});
		const inputvalue = input.value;
		const newvalue = inputvalue.toString();
		const finalvalue = newvalue.replace(/(^\w+:|^)\/\//, '');
        return this.httpClient.post(this.url2, {"website": finalvalue}, 
       {headers: headers}).toPromise().then(posts => {
           console.log(posts);
       });
    }

    deleteWebsite(website): Observable<void> {
<<<<<<< HEAD
        const url = `http://3.19.26.214:5000/deleteWebsite/${website}`;
=======
        const url = `http://3.19.26.214:5000/deleteWebsite/${website}`;
>>>>>>> d0e3c0f1eb2d902b5566d933e49eb706d6755d61
        return this.httpClient.delete<void>(url);
    }
 
}
