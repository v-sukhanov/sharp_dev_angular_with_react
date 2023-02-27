import { Component } from '@angular/core';
import Select from 'react-select';
import { ComponentProps } from 'react';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
	Select = Select;
	selectProps: ComponentProps<Select> = {
		onChange(v: any) {
			console.log(v)
		},
		options: [
			{ value: 'boots', label: 'boots' },
			{ value: 'dress', label: 'dress' },
			{ value: 't-short', label: 't-short' }
		]
	}

	showSelect = false;
	selectLazyProps: ComponentProps<typeof import('react-select').default> = {
		onChange(v) {
			console.log(v)
		},
		options: [
			{ value: 'boots', label: 'boots' },
			{ value: 'dress', label: 'dress' },
			{ value: 't-short', label: 't-short' }
		]
	}
	LazySelect = () => import('react-select').then(m => m.default);

	changeProps() {
		this.selectProps = {
			...this.selectProps,
			options: [{ value: 'changed', label: 'Changed' }]
		}
		this.selectLazyProps = {
			...this.selectProps,
			options: [{ value: 'change', label: 'Change' }]
		}
	}
}
