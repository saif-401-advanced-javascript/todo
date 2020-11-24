import React, { useContext } from 'react';
import { SettingContext } from '../../context/setting';

export default function Setting() {
  const { isDisplayed, setIsDisplayed, sorted, setSorted } = useContext(
    SettingContext
  );
  return (
    <>
      <h1>Setting</h1>
      <h2>Filter By Completion</h2>
      <button onClick={() => setIsDisplayed(!isDisplayed)}>Filter</button>
      {/* <h2>Sort</h2>
            <button onClick={()=>setIsDisplayed(!isDisplayed)}></button> */}
    </>
  );
}
