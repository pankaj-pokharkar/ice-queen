import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from './dummyFlavour.png';

const Card = styled.div`
  height: 100px;
  width: 100px;
  text-align: center;
  font-size: 1.3em;
`

const RightPanel = styled.div`
width: 25%;
height: 80vh;
position: fixed;
z-index: 1;
right: 0;
background: darkgrey;
transition: 0.5s;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`

interface Props {
  primary: boolean
}

const Button = styled.button<Props>`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  :disabled {
    cursor: not-allowed;
    background: ${props => props.primary ? "#edb6c8" : "grey"};
  }
`;

const InputNum = styled.input`
  margin-left: 3px;
  :invalid {
    border: 2px solid red;
  }
`

interface SizeQtyMap {
  small?: number;
  medium?: number;
  large?: number
}

const OrderRow = ({ size, availQty, rate, orderData, setOrderData }: any) => {
  const [orderQty, setOrderQty] = useState<number>(0);

  return (
    <div className="size-quantity-row" style={{ height: '5vw'}}>
      <p style={{ margin: 0}}>{size.toUpperCase()}: ${rate}</p>
      <p style={{ margin: 0}}>Max Qty: {availQty}</p>
      <label htmlFor={`${size}-qty`}>Enter Quantity:
        <InputNum id={`${size}-qty`} type="number" min="0" max={availQty} value={orderQty} onChange={
          (e)=> setOrderQty(+e.target.value)} />
          {/* // (e)=> setOrderData({...orderData, [size]: +e.target.value})} /> */}
      </label>
      
    </div>
  )
}

export const SidePanel = ({item, onSubmitHandler, closePanel}: any) => {
  const [isError, setError] = useState<boolean>(false);
  const [isBuyDisabled, setBuyDisabled] = useState<boolean>(true);
  const [orderData, setOrderData] = useState<any>({
    "small": 0,
    "medium": 0,
    "large": 0
  });
  const [totalAmt, setTotalAmt] = useState<number>(0);

  useEffect(() => {
    console.log('Side panel rendered');
    setOrderData({
      "small": 0,
      "medium": 0,
      "large": 0
    })

  }, [])


  console.log('Order Data', orderData);

  

  return (
    <RightPanel>
      <Card>
        <img src={Image} alt="" width="100%"></img>
        <p style={{ margin: 'auto 0'}}>{item.name}</p>
      </Card>
      <p style={{ padding: '0.8em', marginTop: '30px'}}>{item.desc}</p>
      <form className="order-form" onSubmit={onSubmitHandler} style={{ marginTop: '-20px', scrollBehavior: 'auto'}}>
        {item.stock.map((stockItem: any, index: number) => 
          {
            if(stockItem.availQuantity > 0) {
              return <OrderRow
                      size={stockItem.size} 
                      availQty={stockItem.availQuantity}
                      rate={stockItem.rate}
                      key={index}
                      orderData={orderData}
                      setOrderData={setOrderData}
                    />
            }
          }
        )}
        {isError && (
          <p style={{ color: 'red' }}></p>
        )}
        <p style={{fontWeight: 'bold'}}>Total Amount: ${totalAmt}</p>
        <div className="action-row" style={{ position: 'absolute', bottom: '15px'}}>
          <Button primary type="submit" disabled={isError || isBuyDisabled}>Buy</Button>
          <Button primary={false} onClick={closePanel}>Close</Button>
        </div>
      </form>
    </RightPanel>
  )
}