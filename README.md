# react-svg-icon-components-generator
Generate React Icon Components from SVG files

---
## Usage
__Install the npm package:__

```js
npm install --save react-svg-components-generator
```

__Create React components:__

Add your SVG icons to `svg` directory and create a JS file with the following code:

```js
const path = require('path');
const componentGenerator = require('react-svg-components-generator');

componentGenerator({
    svgSrcDir: path.join(__dirname, 'svg'),
    componentDestDir: path.join(__dirname, 'components'),
});
```

Run the file using node and you'll find the React components in the `components` directory.

```js
node file.js
```

__Use the React components:__

```js
import React, { Component } from 'react';
import HelloIcon from './components/HelloIcon';
import UpArrowIcon from './components/arrows/UpIcon';
import DownArrowIcon from './components/arrows/DownIcon';
import { LeftIcon, RightIcon } from './components/arrows';
import styles from './styles.css';

export default class App extends Component {
    handleHelloIconClick = () => {
        // Do something
    };

    render() {
        return (
            <div>
                <h1>Component demo</h1>

                <h2>HelloIcon</h2>
                <HelloIcon
                    width={20}
                    height={20}
                    style={{ color: 'red' }}
                    className={styles.icon}}
                    onClick={this.handleHelloIconClick}
                />

                <h2>UpArrowIcon</h2>
                <UpArrowIcon width={20} height={20}/>

                <h2>DownArrowIcon</h2>
                <DownArrowIcon width={20} height={20}/>

                <h2>LeftIcon</h2>
                <LeftIcon/>

                <h2>RightIcon</h2>
                <RightIcon/>
            </div>
        );
    }
}
```

## Options

- `svgSrcDir` - Path to the directory containing SVG files.
- `componentDestDir` - Path to the directory where the components would be created.
- `templatesDir` - *Optional* For using custom templates. Defaults to the `templates` directory within the package.
- `stripTitle` - *Optional* When set to true, creates the components without the title attribute. Defaults to `true`.
- `componentNamePrefix` - *Optional* Prefix for the component name. Defaults to ``.
- `componentNameSuffix` - *Optional* Suffix for the component name. Defaults to `Icon`.
