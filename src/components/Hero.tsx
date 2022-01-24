import React, { useEffect, useRef, useState} from 'react'


export const Hero =  function  () {




    return  (
        <>
        <div className="hero min-h-screen bg-base-200 w-screen ">
  <div className="text-center hero-content">
    <div className="max-w-md flex items-center flex-col">
        <img src="/zarp_logo.png" alt="logo"  className="mask mask-squircle h-24 w-24 "/>
      <h1 className="mb-5 text-5xl font-bold">
      A digital Rand from the future
          </h1> 
      <p className="mb-6 ">
      ZARP is a cryptocurrency pegged to the price of the South African Rand (ZAR). 1 ZARP equals 1 ZAR, stored in our treasury account. ZARP is the only bank-approved, fully backed, transparent, and audited stablecoin for the South African Rand
          </p> 
      <button className="btn bg-zarp_color hover:bg-green-700">Connect Wallet</button>
    </div>
  </div>
</div>
        
        </>

    )
}


