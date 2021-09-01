import {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import {addToCart,removeFromCart}from '../redux/actions/cartActions'
import {useDispatch} from 'react-redux'
const alanKey='c4766e6fbd24d6b914e0f4a093981f9a2e956eca572e1d8b807a3e2338fdd0dc/stage';
export default function AlanBtn() {
    const dispatch = useDispatch();
    useEffect(()=> {
        alanBtn({
            key:alanKey,
            onCommand: (commandData) => {
                if(commandData.command === 'testCommand') {
                    alert('This is a Alan AI demo');
                }else if(commandData.command  === 'goToCart'){
                    window.open('/cart', "_self");
                }else if(commandData.command  === 'goBack') {
                    window.open('/', "_self");
                }else if(commandData.command  === 'viewProduct') {
                    console.log(commandData.data);
                    window.open(`/product/${commandData.data}`, "_self");
                }else if(commandData.command  === 'addToCart'){
                    const id = window.location.pathname.split('/')[2];
                    dispatch(addToCart(id,commandData.number));
                }else if(commandData.command === 'removeItem'){
                    dispatch(removeFromCart(commandData.data));
                }else if(commandData.command === 'purchaseItems'){
                    window.alert("Thank you for purchasing");
                }
            }
        }).activate()
    },[]);
    
    return null
}