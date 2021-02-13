# navigationbar-circle

demo: https://khotharish1207.github.io/navigationbar-circle/

## Getting Started

### Prerequisites

Add the class `container-circle-navbar` to your root element in index.html

```
 <div id="root" class="container-circle-navbar"></div>
```

### Installing

```
npm i navigationbar-circle --save
```

### How to use

```
import Nav from 'navigationbar-circle';

class App extends React.Component {
	 render () {
		 return (
             <Nav 
             navItems={
                [
                    <div onClick={() => alert('Home')}><i className="fas fa-home"></i> Home</div>,
                    <div onClick={() => alert('About')}><i className="fas fa-user-alt"></i> About</div>,
                    <div onClick={() => alert('Contact')}><i className="fas fa-envelope"></i> Contact</div>
                ]
            }
             />
             { ... your app }
          }
          />
		 )
	 }
}

```

### Props

| prop        | type   |   default value    |
| ----------- | ------ | :----------------: |
| circleBackgroundColor      | string  | transparent |
| navItems | array   |        []        |


Navbar events

| Event         |      default value |
| ------------- | :-----------:    |
| onClose| () => {} |
| onOpen| () => {} |

## Author

- **Harish S Khot**

