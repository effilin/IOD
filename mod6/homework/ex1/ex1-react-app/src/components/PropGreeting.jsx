function PropGreeting({person}) {
   
if (person.name) {
    return (
        <div className="GreetingParent componentBox">
            <h5>Hello {person.name}!</h5>
            <h2> Welcome back!</h2>
        </div>
    )
} else {
    return (
    <div className="GreetingParent componentBox">
            <h5>Hello World!</h5>
            <h2>Welcome</h2>
        </div>
    )
}
   
};

export default PropGreeting