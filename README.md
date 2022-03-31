## React Vimeo Provider

[Open docs →](https://react-vimeo-provider.netlify.app)

### Install via npm
```sh
npm i react-vimeo-provider
```

### Import

```jsx
import {VimeoProvider} from "react-vimeo-provider";
```

### Use

```jsx
<VimeoProvider 
  videoId="12345678" 
  onEnded={doSomething} 
  ref={ref}
  title="Some Title"
  videoId="123412341234"
  allowFullScreen={true}
  height="1200px"
  width="900px"
  onPlay={callback}
  onProgress={callback}
  onEnded={callback}
  onError={callback}
  onGetTitle={callback}
  options={vimeoOptions}
{...props}
/>
```

### Props && types

Todo