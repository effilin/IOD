function PropGreeting({person}) {
   
if (person.name) {
    return (
        <div className="GreetingParent componentBox">
            <h5>Hello {person.name}!</h5>
            {person.children}
        </div>
    )
} else {
    return (
    <div className="GreetingParent componentBox">
            <h5>Hello World!</h5>
            {person.children}
        </div>
    )
}
   
};

export default PropGreeting