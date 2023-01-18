import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	get length(): number {
		return this.data.length;
	};

	constructor(public data: number[]) {
		super();
	}

	swap(leftIndex: number,rightIndex: number) {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}

	isGreater(leftIndex: number,rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}
}

export interface ISortable {
	length: number;
	isGreater(leftIndex:number, rightIndex:number):boolean;
	swap(leftIndex:number, rightIndex:number): void;
}
