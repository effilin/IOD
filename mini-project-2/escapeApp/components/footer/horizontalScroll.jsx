
export function HorizontalScroll({children}) {

    const scroll = {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
       

    };

    return (
        <div style={scroll}>
            {children}
        </div>
    )
}