

export function CustomCard(props) {
   
    const cardStyle = {
    boxShadow: '4px',
    padding: '5vw',
    borderRadius:'5px',
    }
    return (
        <div style={cardStyle}>{props.children}</div>
    )

}