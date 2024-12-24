/**
 * A generic type representing a class constructor.
 * 
 * @typeParam T - The type of the instance created by the constructor. Defaults to an empty object (`{}`).
 */
export type Constructor<T = {}> = new (...args: any[]) => T;