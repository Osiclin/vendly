export default function Button({name, bc, onClick, c}) {
    return(
        <button 
            style={{
                width: '100%', 
                height: '45px', 
                backgroundColor: bc ?? '#006e72', 
                border: !bc ? '1px solid #006e72' : '1px solid #82ECD3', 
                color: c ?? 'white', 
                fontSize: '.938rem', 
                fontWeight: 800, 
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onClick={onClick}
        >
            {name}
        </button>
    )
}