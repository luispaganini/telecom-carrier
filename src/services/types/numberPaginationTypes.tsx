import INumberInterface from "../../interfaces/INumberInterface";

type NumberPaginationTypes = {
    first: number | null;
	prev: number | null,
	next: number | null,
	last: number | null,
	pages: number,
	items: number,
    data: INumberInterface[];
}

export default NumberPaginationTypes;