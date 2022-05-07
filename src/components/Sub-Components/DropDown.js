import { useState } from "react";
import { FaPlus, FaAngleDown } from 'react-icons/fa';

const DropDown = ({ onChange, payload, variant }) => {

    //State 
    const [show, setShow] = useState(false)
    const [ previewSelected, setPreviewSelected ] = useState(payload[0].title)

    //Event
    const handleActionApi = (e) => {
        const action = e.currentTarget.dataset.action;

        if(action === 'show') return setShow(!show)

        if(action === 'drop') {
            const payload = JSON.parse(e.currentTarget.dataset.payload);

            setPreviewSelected(payload.title)
            setShow(false);

            if(onChange) return onChange(payload)
        }
    }

    return (
        <div>
            <div onClick={handleActionApi} data-action='show' className={`${variant} border bg-white w-28 text-xs px-1 text-primaryDarkGray flex justify-between items-center py-1 animate__animated animate__fadeIn`} title={previewSelected ? previewSelected : 'Select'}>
                <p className="truncate">{previewSelected}</p> 
                <FaAngleDown />
            </div>
            
            {
                ( show && 
                    <div className={`absolute border bg-white z-50 w-28`}>
                        {
                            payload.map((x, index) => (
                                <div onClick={handleActionApi} data-action='drop' data-payload={JSON.stringify(x)} key={x.id} className={`text-left px-1 py-1 ${index != 0 && 'mt-2'} custom-select text-xs text-primaryDarkGray cursor-pointer`}>
                                    {x.title}
                                </div>
                            ))
                        }
                    </div>
                )
            }

            <style jsx>{`
                .custom-select {
                    transition: 1s all ease;
                    backgorund: white;
                }
                .custom-select:hover {
                    color: #10277C;
                    background: #e6e9f2;
                    transform: scale(1.003);
                }
                @media screen and (max-width: 768px) {
                    .dropdown {
                        width: 95%;
                    }
                }
                    
                `}

            </style>

        </div>

    )

}


export default DropDown;