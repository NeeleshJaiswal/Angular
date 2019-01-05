import {Component} from '@angular/core';

@Component({
       selector: 'server-component',
       templateUrl: './server.component.html'
       
    })

export class ServerComponent{
    
title:string='Data Binding';
allowNewServer=false;

constructor(){
    setTimeout( () => {
        this.allowNewServer=true;
    },2000);
}

}