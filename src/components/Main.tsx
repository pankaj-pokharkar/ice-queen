import { faPlusCircle, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import IconButton from './IconButton';
import { flavoursData } from "../data";
import { SidePanel } from './SidePanel';
import Image from './dummyFlavour.png';
import styled from 'styled-components';

const addClick = () => {
  console.log('Add clicked');
}

interface FlavourCardProps {
  srcImg?: string;
  flavourName: string;
  onSelectFlavr?: React.MouseEventHandler<HTMLDivElement>;
}

const Card = styled.div`
  height: 250px;
  min-width: 200px;
  border: 3px solid grey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & :hover {
    cursor: pointer;
  }
`

const FlavourCard = ({srcImg, flavourName, onSelectFlavr}: FlavourCardProps) => {
  const imgSrc = srcImg || Image;
  return(
    <Card onClick={onSelectFlavr}>
      <img src={imgSrc} alt=""></img>
      <p style={{fontSize: '20px', textAlign: 'center', width: '100%', fontWeight: 'bold'}}>{flavourName}</p>
    </Card>
  )
}

const MainWrapper = styled.main`
  display: flex;
`

const Main = () => {
  const [showDetailPanel, setDetailPanel] = useState<boolean>(false);
  const [selectedFlavrData, setSelectedFlavrData] = useState<any>({});
  const sliderRef = useRef(null);
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const fixedWidth = showDetailPanel ? '75%' : '100%';

  const selectFlavour = (item: any) => {
    setSelectedFlavrData(item);
    setDetailPanel(true); 
  };

  const closePanelHandler = () => { 
    setDetailPanel(false);
    setSelectedFlavrData({});
  };

  const sideScroll = (direction: string, distance=300, step=50) =>{
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direction == 'left'){
          sliderRef.current.scrollLeft -= step;
        } else {
          sliderRef.current.scrollLeft += step;
        }
        
        scrollAmount += step;
        setPrevDisabled(sliderRef.current.scrollLeft === 0);
        const diff = sliderRef.current.scrollWidth - sliderRef.current.offsetWidth <= sliderRef.current.scrollLeft;
        setNextDisabled(diff);
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, 25);
  }

  return (
    <MainWrapper>
      <div className="left-part" style={{ height: '80vh', width: fixedWidth, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2>Flavours</h2>
        <div className="carousel-container" style={{ height: '50vh', width: '100%', position: 'relative', overflow: 'hidden', padding: '20px'}}>
          <div style={{ position: 'absolute', top: '20vh', left: '2vw'}}>
            <IconButton
              icon={faChevronCircleLeft}
              onClickHandler={() => sideScroll("left")}
              tooltip="Previous"
              size="4x"
              disabledIcon={prevDisabled}
            />

          </div>
          
          <div id="slider" ref={sliderRef} style={{ display: 'flex', margin: 'auto', width: '82%', height: '100%', gap: '3vw', overflowX: 'hidden' }}>
            {flavoursData.map((item: any) => (
              <FlavourCard srcImg={item.img} flavourName={item.name} key={item.id} onSelectFlavr={() => selectFlavour(item)}/>
            ))}
          </div>
          <div style={{ position: 'absolute', top: '20vh', right: '2vw'}}>
            <IconButton
              icon={faChevronCircleRight}
              onClickHandler={() => sideScroll("right")}
              tooltip="Next"
              size="4x"
              disabledIcon={nextDisabled}
            />

          </div>
        </div>
        <IconButton icon={faPlusCircle} onClickHandler={addClick} tooltip="Add new flavour" size="5x"/>
      </div>
      {showDetailPanel && (
        <SidePanel item={selectedFlavrData} closePanel={closePanelHandler}/>
      )}

    </MainWrapper>
  )
}

export default Main;