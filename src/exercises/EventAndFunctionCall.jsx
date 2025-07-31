//Neareast function will be called if there are multiple function with same name.
//If I comment both function inside the EventAndFunctionCall Component then it will invoke the function outside of that component also.
//If there are all function not commented then nearest function will be called.

function callFun()
{
    alert("External Function Called");
}

export default function EventAndFunctionCall() {
    // function callFun() {
    //     alert("Internal First Function Called");
    // }

    // function callFun() {
    //     alert("Internal Second Function Called");
    // }

    function sum(a, b) {
        alert(`Sum is ${a+b}`)
    }

    const fruit = ()=> alert("fruit function");
    return (
        <>
            <h2>Event and Function Call</h2>
            {/* We are passing the defintion in onClick so it will work fine */}
            <button onClick={callFun}>Click to Invoke function</button>

            {/* It will automatically calls the callFun function without invoking because we are passsing function calling.
            <button onClick={callFun()}>Click Me</button> */}
            <button onClick={() => sum(2, 3)}>Add Button</button>

            <button onClick={fruit}>Call fruit function.</button>
        </>
    );
}