import { Component } from '@angular/core';

@Component({
    selector: 'server-root',
    templateUrl: './server.component.html',
    styleUrls: []
})
export class ServerComponent{

    isAuthenticate: boolean=false;
    isSubmitted: boolean=false;
    mailId: string="";
    onSubmit(mail: string, pass: string){
        this.mailId =mail;
        this.isSubmitted=true;
        if(mail==="admin" && pass==="admin"){
            this.isAuthenticate=true;}
        else{
            this.isAuthenticate=false;
        }
        console.log(this.mailId+" and "+pass+" Authenticate "+this.isAuthenticate+" Submitted "+this.isSubmitted);
    }

}

