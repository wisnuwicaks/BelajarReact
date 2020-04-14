import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from "./views/components/NewScreen";
import TableProduct from "./views/components/TableProduct";
import style from "./style.css";
import CounterScreen from "./views/screen/CounterScreen";
import ProductCard from "./views/components/ProductCard"

function App() {

//  let arr = [1,2,3]
//  const renderArr = ()=>{
//    return (arr.map((val)=>{
//       return <CounterScreen cek={val}/>
//    }))
//  }
let arrProduct =[
{
  nama: "Sepatu Basket",
  harga: 2300000,
  desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
  disc:20,
  stok : 2
},
{
  nama: "Kaos Polo",
  harga: 250000,
  desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
  disc :40,
  stok : 0
},
{
  nama: "Celana Jeans",
  harga: 550000,
  desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
  disc :0,
  stok : 3
}
]

const renderData = ()=>{
 return  (arrProduct.map((val)=>{
    return <ProductCard productData={val}/>
  })
 )
}

  return (
    <div className="App">
      {/* {
        renderData()
      } */}
      <CounterScreen/>
    </div>
  );
}

export default App;
