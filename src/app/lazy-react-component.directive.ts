import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
import { ComponentProps, ElementType } from 'react';
import { Root } from 'react-dom/client';

@Directive({
	selector: '[appLazyReactComponent]'
})
export class LazyReactComponentDirective<TComp extends ElementType> implements OnChanges, OnDestroy {
	@Input('appLazyReactComponent') lazyReactComponent!: () => Promise<TComp>;
	@Input() props!: ComponentProps<TComp>;

	private root: Root | null = null;

	constructor(private host: ElementRef) {
	}

	async ngOnChanges() {
		const [{ createElement }, { createRoot }, Comp] = await Promise.all([
			import('react'),
			import('react-dom/client'),
			this.lazyReactComponent()
		]);

		if (!this.root) {
			this.root = createRoot(this.host.nativeElement);
		}

		this.root.render(createElement(Comp, this.props))
	}

	ngOnDestroy() {
		this.root?.unmount();
	}
}
