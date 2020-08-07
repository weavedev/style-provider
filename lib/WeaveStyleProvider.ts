import { LitStyleProvider } from 'lit-style-provider/create';

/**
 * Construct your own lit style provider with a custom fallback style object
 */
export class WeaveStyleProvider<T extends {}> extends LitStyleProvider<T> {}
