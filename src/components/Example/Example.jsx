// Это специально созданный компонент для тестирования, с целью понять различные возможности React

import { useEffect, useState } from "react";

// import React from "react";

export const Counter = ({ randomNumber }) => {
    // let count = 0;
    const [count, setCount] = useState(0); 

    useEffect(() => {
        console.log('like did mount');
    }, []);

    useEffect(() => {
        console.log('like did mount + did update');
        return () => {
            console.log('like will unmount no dependencies array');
        }
    }); // отрабатывает ВСЕГДА
    
    useEffect(() => {
        console.log('like did mount + count update');
    }, [count]);

    useEffect(() => {
        console.log('like did mount + randomNumber update');
    }, [randomNumber]);

    useEffect(() => {
        console.log('like did mount + count or randomNumber update');
        return () => {
            console.log('like will unmount [count, randomNumber]');
        }
    }, [count, randomNumber]);

    useEffect(() => {
        return () => {
            console.log('like will unmount');
        }
    }, []);

    return (
         <div>
             <h3>{count}</h3>
             <button onClick={() => setCount(count + 1)}>Click!</button>
             <div>{randomNumber}</div>
         </div>
    );
}

// export class Child extends React.Component {
//     state = {
//         count: 0,
//         name: "Alex",
//     };

//     constructor(props) {
//         super(props);

//         console.log("child constructor");
//     };

//     componentDidMount() {
//         console.log("child did mount");
//     }

//     componentWillUnmount() {
//         console.log("child will unmount");
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("child did update", prevProps, prevState);
//     }

//     render() { // render всегда гарантированно вызывается после обновления state
//         console.log("child render");
//         return (
//             <div>
//                 <h4>Сhild component</h4>
//             </div>
//         );
//     };
// }

// export class Counter extends React.Component {
//     state = {
//         count: 0,
//         name: "Alex",
//         showChild: false,
//     };

//     constructor(props) {
//         super(props);

//         console.log("constructor");
//     };

//     componentDidMount() {
//         console.log("component did mount");
//         this.interval = setInterval(() => {
//             this.setState((prevState) => ({
//                 count: prevState.count + 1
//             }))
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//         console.log("component will unmount");
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("component did update", prevProps, prevState);
//     }

//     handleClick = () => {
//         console.log('before', this.state.count);
//         // this.setState({ count: this.state.count + 1 }); // вариант если нет race state / условия гонки
//         this.setState((oldState) => {
//             console.log(oldState);
//             return (
//                 { count: oldState.count + 1 }
//             );
//         });  // вариант на случай вычисления значения на основе предыдущего
//         // setState не является синхронным. 
//         // Результат его действия появляется позже 
//         // и точно после отрабатывания данной функции. 
//         // Поэтому в консоли (в данном случае) каждый раз будет 2 раза повторяться старое значение count
//         console.log('after', this.state.count);
//     };

//     toggleChild = () => {
//         this.setState((prevState) => ({
//             showChild: !prevState.showChild
//         }))
//     }

//     render() { // render всегда гарантированно вызывается после обновления state
//         console.log("render");
//         return (
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <button onClick={this.toggleChild}>
//                     Click!
//                 </button>
//                 {this.state.showChild && <Child />}
//             </div>
//         );
//     };
// }