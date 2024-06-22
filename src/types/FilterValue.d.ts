import { TODO_FILTERS } from '../const';

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]