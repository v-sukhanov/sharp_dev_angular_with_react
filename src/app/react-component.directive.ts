import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';


@Directive({
	selector: '[appReactComponent]'
})
export class ReactComponentDirective<TComp extends ElementType> implements OnChanges, OnDestroy{
	@Input('appReactComponent') reactComponent!: TComp;
	@Input() props!: ComponentProps<TComp>;

	private root = createRoot(inject(ElementRef).nativeElement)

	ngOnChanges() {
		this.root.render(createElement(this.reactComponent, this.props))
	}

	ngOnDestroy() {
		this.root.unmount();
	}
}
