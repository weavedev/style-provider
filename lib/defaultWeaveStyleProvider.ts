import { defaultStyles, StyleObject } from './defaultStyles';
import { WeaveStyleProvider } from './WeaveStyleProvider';

// StyleProvider object
const styleProviderObject: WeaveStyleProvider<StyleObject> = new WeaveStyleProvider(
  defaultStyles,
);

// rootStyleProvider for use in the root component
export const rootStyleProvider: WeaveStyleProvider<
  StyleObject
>['rootStyleProvider'] = styleProviderObject.rootStyleProvider;

// styleProvider to alter styles in child components
export const styleProvider: WeaveStyleProvider<StyleObject>['styleProvider'] =
  styleProviderObject.styleProvider;
