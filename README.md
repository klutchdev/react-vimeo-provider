## Fireship components


### Install via npm
```sh
npm i klutch-ui
```

### Import

```jsx
import { Button,  IconButton, LoadingButton } from "klutch-ui";
```

### Use

```jsx
<Button label="Hello" onClick={doSomething} {...props}/>

<LoadingButton label="Upload" loading={isLoading} onClick={uploadData} />

<IconButton label="Next Episode" icon={<PlayIcon />} onClick={playNext} />

```

### Props && types

```js
propTypes = {
  ref: element(Element),
  type: string,
  label: string.isRequired,
  icon: element.isRequired, // IconButton only
  width: string,
  color: string,
  style: object,
  height: string,
  margin: string,
  shadow: bool,
  onClick: func,
  loading: bool.isRequired, // LoadingButton only
  disabled: bool,
  className: string,
  background: string,
};
```