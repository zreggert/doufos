import { Icon } from '@iconify/react'
import alienIcon from '@iconify-icons/mdi/alien';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={alienIcon} className='alienOutline' />
        </div>
    )
}

export default LocationMarker