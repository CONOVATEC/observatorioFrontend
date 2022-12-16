import CustomNavBar from '../../containers/CustomNavBar';
import CustomFooter from '../../containers/CustomFooter';
import React, { memo } from 'react';

interface DefaultProps {
  children: JSX.Element | JSX.Element[]
}

const DefaultLayout = ({children}: DefaultProps)=>{
  return (
    <>
      <CustomNavBar />
        {children}
      <CustomFooter />
    </>
  )
}

export default memo(DefaultLayout)