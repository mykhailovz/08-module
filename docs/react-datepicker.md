# install

```
$ npm i react-datepicker
```


# docs

https://reactdatepicker.com/


# usage
```javascript
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//...

export default function Component() {
  const [date, setDate] = useState(new Date());

  //...

  return (
    <>
      <DatePicker showIcon selected={releaseDate} onChange={(date) => setReleaseDate(date)} />
    </>
  );
}
```