import {Component} from '@angular/core';

@Component({
       selector: 'server-component',
       templateUrl: './server.component.html'
       
    })

export class ServerComponent{
    
title:string='Data Binding';
allowNewServer=false;
serverCreationStatus='No server created';
input:string="Neelesh";
result:string='';

constructor(){
    setTimeout( () => {
        this.allowNewServer=true;
    },4000);
}
change():void{
console.log(this.input);
}
}