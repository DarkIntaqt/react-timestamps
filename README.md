# react-timestamps

This is a lightweight JS Module converting any unix timestamp (seconds or milliseconds) or a date string into a beautified string. 

```
npm install react-timestamps
```

You can use it as the following:
```js
import Timestamp from "react-timestamps"

export default function App() {
    return <Timestamp date={myTimestamp} type="relative"/>
}
```
The **date** parameter is required, the type parameter is optional, default is "relative". 
| Different type     | type   | Result                                                                                                                                                                                   |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| relative (default) | string | e.g.: 5 hours ago, in 5 hours                                                                                                                                                            |
| static             | string | 8/23/2022, 12:01:24AM                                                                                                                                                                    |
| { }                | object | any valid .toLocaleTimeString() options object, see more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#using_options). |