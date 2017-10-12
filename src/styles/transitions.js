

const fill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

export const routeTransition = {
    fill,
    content: {
        ...fill,
        top: '40px',
        textAlign: 'center'
    },
    nav: {
        padding: 0,
        margin: 0,
        position: 'absolute',
        top: 0,
        height: '40px',
        width: '100%',
        display: 'flex'
    },
    navItem: {
        textAlign: 'center',
        flex: 1,
        listStyleType: 'none',
        padding: '10px'
    },
    hsl: {
        ...fill,
        color: 'white',
        paddingTop: '20px',
        fontSize: '30px'
    }
}



