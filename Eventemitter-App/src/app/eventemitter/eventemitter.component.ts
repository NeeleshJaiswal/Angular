import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-root',
    templateUrl: './eventemitter.component.html',
    styleUrls: []
})

export class EventComponent{
    
    @Input()
    name: string="Neel";

}