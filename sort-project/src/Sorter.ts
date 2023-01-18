export abstract class Sorter {
	abstract isGreater(leftIndex: number, rightIndex:number): boolean;
	abstract swap(leftIndex: number, rightIndex:number): void;
	abstract length: number;
	sort() {
		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.length - i; j++) {
				if(this.isGreater(j, j +1))
					this.swap(j, j + 1);
			}
		}
	}
}
