function PropGreeting(props) {

    const stringProps = JSON.stringify(props);

    return (
        <div className="GreetingParent componentBox">
            <h5>Hello World!</h5>
            <h3>{stringProps}</h3>
        </div>
    )

};

export default PropGreeting