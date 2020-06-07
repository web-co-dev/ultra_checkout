import React from 'react';
import { Box, CheckOff, DiscountMenuItem } from '../basic';

const DiscoundCard = (props) => {
    return (
        <DiscountMenuItem onClick={() => props.selectOrder(props.index)} style={{background: `${props.index===2 ? '#ffbd03' : 'white'}`}}>
            {props.active ? <Box width={20} height={20}>
                <img src='/images/check.png' width='100%' alt="" />
            </Box>
            : <CheckOff />}
            
            <Box ml={20} display='flex' alignItems='center' justifyContent='space-between' width="90%">
                <Box display='flex' alignItems='center'>
                    {props.discount}% OFF: {props.quantity}
                    <Box ml='10px' dangerouslySetInnerHTML={{__html: props.shortName}} />
                </Box>
                <Box display='flex' width="130px">
                   <Box dangerouslySetInnerHTML={{__html: props.rightText}}></Box>
                </Box>
            </Box>
        </DiscountMenuItem>
    )
}

export default DiscoundCard;