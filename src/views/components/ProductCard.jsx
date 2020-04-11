import React from 'react';
import style from './style.css';
import './bootstrap.css';
import'./bootstrap.min.css';
import Crazy from './Crazy.png'
import Brave from './Brave.png'
import Educated from './Educated.png'
import Handmaid from './Handmaid.png'

const ProductCard =(props)=>{
    //disctructuring
    const {productData} = props
    const {author, title, review,desc,price,discount,image,stock} = productData

    // const renderingItems =()=>{
    //     if(stok){
    //         return <>
    //         <h1>ProductCard</h1>
    //         <h3>Nama Produk : {nama}</h3>
    //         <h3>Harga : {price}</h3>
    //         {
    //         disc>0?<h3>Harga Diskon : {harga*((100-disc)/100)}</h3>:null
    //         }
    //         <h3>Deskripsi : {desc}</h3>
    //         </>
    //     }
    //     else{
    //         return <h3>Item Kosong </h3>
    //     }
    // }
    // <img src="" alt="" />
    const kondisiDiskon =()=>{
        let afterDiscount = price*((100-discount)/100)
        afterDiscount = afterDiscount.toFixed(2)
        if(discount>0)
        return (
        <strong> {`$${afterDiscount}`} <del>${price}</del></strong>
        )
        else {
           return <strong>{`$${price.toFixed(2)}`}</strong>
        }
    }
    const kondisiBtn = ()=>{
        if(stock){
            return(
                <input class="buttonku text-center" type="submit" value="BUY NOW"/>  
            )
        }
        else{
            return  <input class="btn-disable text-center" type="submit" value="BUY NOW" disabled/>  
        }
    }
   
    const renderingItems = ()=>{

        return <> 
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col">
                            <img style={{width: '200px', height: '300px'}} src={require(`./${image}.png`)}/>
                        </div>
                        <div className="col text-left">
                            <p>{author}</p>
                            <h3>{title}</h3>
                            <p>{`${review}/5 Review`}</p>
                            <p>{desc}</p>
                            <p>{kondisiDiskon()}</p>
                            <center>{kondisiBtn()}</center>
                        </div>
                    </div>
                 
                    
                  
                </div>
        </>
    }

    return (
        // <div
        //     style={{
        //         border:"1px solid black",
        //         width:"240px",
        //         borderRadius:"7px",
        //         padding :"10px"
        //     }}
        // >
        //     {renderingItems()}
        // </div>
            <>
             {renderingItems()}
            </>
    )


}

export default ProductCard