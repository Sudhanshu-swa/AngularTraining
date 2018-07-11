import{ Injectable,OnInit} from '@angular/core';
import{ IUser} from '../model/user-model';
import{ Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import  {configuration} from './../../shared/config/api-configuration';
// import { resolve } from 'dns';
// import { reject } from 'q';
@Injectable()
export class LoginService  {
 userList:IUser[];
constructor(private _http:Http){}

public apiHost: string = configuration.apiurl;
 getUserList():Promise<any> {
    return  new Promise((resolve,reject)=>{ 
        this._http.get(this.apiHost+'Users')
    .subscribe(
        res=>{
            if(!res.ok){
                        reject("Failed with  status: "+res.status+ "\n trying to find file at " +this.apiHost)
            }
            var jsonRes=res.json();
            resolve(jsonRes);
        }
    )
}).catch((reason)=>this.handleError(reason));
   
}
handleError(error:Response) {
  console.error(error);
  return  Observable.throw(error)
}
validateCredential():boolean{

return true;
}

getUserRole():string{

return "";
}
}