import {useState,useEffect} from "react";//Importing the useState hook from the React library to manage component state

function App() {//the main component APP,and returning the main component to render on screen(converting it into html,css,js)

    let [counterVisible,setCounterVisible] = useState(true) ;

    useEffect(function(){
        setInterval(function(){
            setCounterVisible(counterVisible => !counterVisible);
        },5000);
    },[]);
    return <div>
      {/*  <Counter></Counter>Including the counter component*/}
        {counterVisible ? <Counter></Counter> : null } {/*conditional rendering:  helps u render components as per some criteria or if-else conditions */}
    </div>
}

function Counter() {//Counter component
    const [count, setCount] = useState(0);// State variable 'count' and the function 'setCount' to update it
/*
    console.log("counter");*/
    // useEffect hook is used to perform side effects (like setting intervals, fetching data, etc.)
    // Empty dependency array [] means this effect runs only once after the initial render of the component.
    //if we don't use this each time react re-renders the counter component another interval starts with existing interval causing unusual behavior
    useEffect(function(){
        console.log("on mount")
      let clock =  setInterval(function(){
          console.log("from inside setInterval")
           setCount(count => count + 1 );
       },1000);

       return function(){/*!//cleanup : stops the clock*/
           console.log("on unmount");
           clearInterval(clock)
       }
    },[]);

    function increaseCount() {
        setCount(count + 1);
    }
    function decreaseCount() {
        setCount(count - 1);
    }
    function resetCount() {
        setCount(0);
    }
    //returning the jsx for rendering counter component UI
    return <div>
        <h1>{count}</h1>{/*displaying the count */}
        <div>
            <button onClick={increaseCount}>Increase count</button>{/*button that call 'increaseCount' function to update it*/}
        </div>

        <div>
            <button onClick={decreaseCount}>Decrease count</button>
        </div>
        <div>
            <button onClick={resetCount}>Reset count</button>
        </div>
    </div>
}

export default App // exporting the default app component for use in other files
