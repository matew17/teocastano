import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	selectedTab: number = 1;
	buttons: any[] = [
		{
			text: '¿Quienes somos?',
			value: 1
		},
		{
			text: '¿Que hacemos?',
			value: 2
		},
		{
			text: '¿Acerca de nosotros?',
			value: 3
		}
	];

	constructor() {}

	ngOnInit() {}

	changeSelection(selected: number) {
		this.selectedTab = selected;
	}
}
