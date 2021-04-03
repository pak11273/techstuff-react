import Button from './Button';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { Grid } from './Grid';
import List from './List';
import LoadingComponent from './LoadingComponent';
import { SplashPage } from './SplashPage';
// notice we're building out a 'package' of reusables here and exporting them as an object of component properties.
// to use this, simply `import {foo, bar, baz} from '<path-to-this-directory>/ReusableComponents';`
export {
  FormButton,
  FormInput,
  Grid,
  List,
  LoadingComponent,
  Button,
  SplashPage,
};
