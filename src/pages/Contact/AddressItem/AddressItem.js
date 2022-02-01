import './addressItem.css'

const AddressItem = ({icon, name, address}) => {
    return (
        <div className="address_item">
            <div className="d-flex">
                <div className="w-25 address__icon me-4">
                    <i className={icon}></i>
                </div>
                <div className="w-75 address__detail">
                    <h6 className='text-light fw-bold'>{name}</h6>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    )
}

export default AddressItem

